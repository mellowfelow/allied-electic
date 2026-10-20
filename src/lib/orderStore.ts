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

export function getOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse orders:', e);
    return [];
  }
}

export function saveOrder(order: Order): void {
  if (typeof window === 'undefined') return;
  const existing = getOrders();
  const updated = [order, ...existing.filter(o => o.id !== order.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getOrderById(id: string): Order | undefined {
  const orders = getOrders();
  return orders.find(o => o.id.toLowerCase() === id.toLowerCase());
}

export function updateOrderStatus(id: string, status: Order['status'], parsedPaymentDetails?: { label: string; value: string }[]): Order | undefined {
  const orders = getOrders();
  const order = orders.find(o => o.id.toLowerCase() === id.toLowerCase());
  if (!order) return undefined;
  
  order.status = status;
  if (parsedPaymentDetails) {
    order.parsedPaymentDetails = parsedPaymentDetails;
  }
  saveOrder(order);
  return order;
}

export function markPaymentConfirmed(id: string, note?: string, fileName?: string): Order | undefined {
  const orders = getOrders();
  const order = orders.find(o => o.id.toLowerCase() === id.toLowerCase());
  if (!order) return undefined;
  
  order.status = 'payment_confirmed';
  if (note) order.remittanceNote = note;
  if (fileName) order.remittanceFile = fileName;
  
  saveOrder(order);
  return order;
}

export function deleteOrder(id: string): void {
  const orders = getOrders();
  const filtered = orders.filter(o => o.id.toLowerCase() !== id.toLowerCase());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function generateOrderRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${SITE.reply.orderPrefix}-${rand}`;
}
