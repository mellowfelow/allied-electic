/**
 * Order/enquiry persistence in Upstash Redis — the Vercel counterpart to
 * functions/_shared/store.js (same shape, same per-type index-array pattern),
 * so orderStore.ts/enquiryStore.ts on the client work unmodified against
 * either backend.
 */
import { isKvConfigured, kvGet, kvSet, kvDel } from './kv.js';

const ORDER_INDEX_KEY = 'order:index';
const ENQUIRY_INDEX_KEY = 'enquiry:index';
const MAX_INDEX = 1000;

export { isKvConfigured };

async function getIndex(key: string): Promise<string[]> {
  const raw = await kvGet(key);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function addToIndex(key: string, id: string): Promise<void> {
  const index = await getIndex(key);
  const next = [id, ...index.filter((x) => x !== id)].slice(0, MAX_INDEX);
  await kvSet(key, JSON.stringify(next));
}

async function removeFromIndex(key: string, id: string): Promise<void> {
  const index = await getIndex(key);
  await kvSet(key, JSON.stringify(index.filter((x) => x !== id)));
}

// ---- Orders ----

export async function saveOrder(order: Record<string, unknown>): Promise<Record<string, unknown>> {
  await kvSet(`order:${order.id}`, JSON.stringify(order));
  await addToIndex(ORDER_INDEX_KEY, order.id as string);
  return order;
}

export async function getOrder(id: string): Promise<Record<string, unknown> | null> {
  const raw = await kvGet(`order:${id}`);
  return raw ? JSON.parse(raw) : null;
}

export async function listOrders(): Promise<Record<string, unknown>[]> {
  const index = await getIndex(ORDER_INDEX_KEY);
  const orders = await Promise.all(index.map((id) => getOrder(id)));
  return orders.filter(Boolean) as Record<string, unknown>[];
}

export async function deleteOrder(id: string): Promise<void> {
  await kvDel(`order:${id}`);
  await removeFromIndex(ORDER_INDEX_KEY, id);
}

// ---- Enquiries ----

export async function saveEnquiry(enquiry: Record<string, unknown>): Promise<Record<string, unknown>> {
  await kvSet(`enquiry:${enquiry.id}`, JSON.stringify(enquiry));
  await addToIndex(ENQUIRY_INDEX_KEY, enquiry.id as string);
  return enquiry;
}

export async function getEnquiry(id: string): Promise<Record<string, unknown> | null> {
  const raw = await kvGet(`enquiry:${id}`);
  return raw ? JSON.parse(raw) : null;
}

export async function listEnquiries(): Promise<Record<string, unknown>[]> {
  const index = await getIndex(ENQUIRY_INDEX_KEY);
  const enquiries = await Promise.all(index.map((id) => getEnquiry(id)));
  return enquiries.filter(Boolean) as Record<string, unknown>[];
}

export async function deleteEnquiry(id: string): Promise<void> {
  await kvDel(`enquiry:${id}`);
  await removeFromIndex(ENQUIRY_INDEX_KEY, id);
}
