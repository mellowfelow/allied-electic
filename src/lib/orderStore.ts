import { SITE } from '../config/site';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string; // Order ref e.g. AEV-8F92A3
  createdAt: string;
  customerName: string;
  email: string;
  phone: string;
  companyName?: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  paymentMethod: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  channel: 'email' | 'whatsapp';
  status: 'new' | 'payment_details_sent' | 'payment_confirmed' | 'dispatched' | 'cancelled';
  parsedPaymentDetails?: { label: string; value: string }[];
  remittanceNote?: string;
  remittanceFile?: string;
}

const STORAGE_KEY = 'allied_ev_orders_v1';

// --- localStorage fallback (used when the /api/orders Vercel function isn't
// reachable — e.g. running `vite dev` locally without `vercel dev`, or a
// network hiccup). This keeps the UI usable everywhere, but only the API path
// gives a shared, cross-device order inbox. ---

function localGetOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse local orders:', e);
    return [];
  }
}

function localSaveOrder(order: Order): void {
  if (typeof window === 'undefined') return;
  const existing = localGetOrders();
  const updated = [order, ...existing.filter(o => o.id !== order.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function localDeleteOrder(id: string): void {
  if (typeof window === 'undefined') return;
  const updated = localGetOrders().filter(o => o.id.toLowerCase() !== id.toLowerCase());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }
  });
}

/** Creates an order. Always tries the shared API first; falls back to this
 * browser's localStorage only if the API is unreachable (e.g. local `vite dev`). */
export async function saveOrder(order: Order): Promise<{ shared: boolean }> {
  try {
    const res = await apiFetch('/api/orders', { method: 'POST', body: JSON.stringify(order) });
    if (res.ok) {
      localSaveOrder(order); // keep a local mirror too, so this device's admin view stays in sync even offline
      return { shared: true };
    }
  } catch (e) {
    console.warn('Order API unreachable, saved locally only:', e);
  }
  localSaveOrder(order);
  return { shared: false };
}

/** Admin-only: lists orders from the shared store. Requires the admin passcode. */
export async function getOrders(passcode: string): Promise<{ orders: Order[]; shared: boolean }> {
  try {
    const res = await apiFetch('/api/orders', { headers: { 'X-Admin-Passcode': passcode } });
    if (res.ok) return { orders: await res.json(), shared: true };
  } catch (e) {
    console.warn('Order API unreachable, showing local-only orders:', e);
  }
  return { orders: localGetOrders(), shared: false };
}

export async function updateOrderStatus(
  id: string,
  status: Order['status'],
  passcode: string,
  parsedPaymentDetails?: { label: string; value: string }[]
): Promise<Order | undefined> {
  const patch: Partial<Order> = { status };
  if (parsedPaymentDetails) patch.parsedPaymentDetails = parsedPaymentDetails;
  try {
    const res = await apiFetch(`/api/orders/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'X-Admin-Passcode': passcode },
      body: JSON.stringify(patch)
    });
    if (res.ok) {
      const updated = await res.json();
      localSaveOrder(updated);
      return updated;
    }
  } catch (e) {
    console.warn('Order API unreachable, updating locally only:', e);
  }
  const orders = localGetOrders();
  const order = orders.find(o => o.id.toLowerCase() === id.toLowerCase());
  if (!order) return undefined;
  Object.assign(order, patch);
  localSaveOrder(order);
  return order;
}

/** Actually sends the payment-details email via SMTP (through
 * /api/send-payment-email), then mirrors the resulting status locally. Falls
 * back to a status-only update (no email) if the send endpoint is unreachable. */
export async function sendPaymentDetailsEmail(
  order: Order,
  fields: { label: string; value: string }[],
  termsLines: string[],
  passcode: string
): Promise<{ sent: boolean; order?: Order }> {
  try {
    const res = await apiFetch('/api/send-payment-email', {
      method: 'POST',
      headers: { 'X-Admin-Passcode': passcode },
      body: JSON.stringify({ orderId: order.id, fields, termsLines, order, customerEmail: order.email })
    });
    if (res.ok) {
      const data = await res.json();
      const updated = await updateOrderStatus(order.id, 'payment_details_sent', passcode, fields);
      return { sent: Boolean(data.email?.sent), order: updated };
    }
  } catch (e) {
    console.warn('Send-payment-email API unreachable:', e);
  }
  const updated = await updateOrderStatus(order.id, 'payment_details_sent', passcode, fields);
  return { sent: false, order: updated };
}

export async function markPaymentConfirmed(id: string, passcode: string, note?: string, fileName?: string): Promise<Order | undefined> {
  const patch: Partial<Order> = { status: 'payment_confirmed' };
  if (note) patch.remittanceNote = note;
  if (fileName) patch.remittanceFile = fileName;
  try {
    const res = await apiFetch(`/api/orders/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'X-Admin-Passcode': passcode },
      body: JSON.stringify(patch)
    });
    if (res.ok) {
      const updated = await res.json();
      localSaveOrder(updated);
      return updated;
    }
  } catch (e) {
    console.warn('Order API unreachable, updating locally only:', e);
  }
  const orders = localGetOrders();
  const order = orders.find(o => o.id.toLowerCase() === id.toLowerCase());
  if (!order) return undefined;
  Object.assign(order, patch);
  localSaveOrder(order);
  return order;
}

export async function deleteOrder(id: string, passcode: string): Promise<void> {
  try {
    const res = await apiFetch(`/api/orders/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Passcode': passcode }
    });
    if (res.ok) {
      localDeleteOrder(id);
      return;
    }
  } catch (e) {
    console.warn('Order API unreachable, deleting locally only:', e);
  }
  localDeleteOrder(id);
}

export function generateOrderRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${SITE.reply.orderPrefix}-${rand}`;
}
