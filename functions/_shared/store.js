/**
 * Shared order/enquiry persistence in Cloudflare KV (binding: REPLY_KV).
 * One key per record ("order:<id>" / "enquiry:<id>") plus a capped index array
 * ("order:index" / "enquiry:index") for cheap listing without a KV list() scan.
 */
const ORDER_INDEX_KEY = 'order:index';
const ENQUIRY_INDEX_KEY = 'enquiry:index';
const MAX_INDEX = 1000;

async function getIndex(kv, key) {
  const raw = await kv.get(key);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

async function addToIndex(kv, key, id) {
  const index = await getIndex(kv, key);
  const next = [id, ...index.filter((x) => x !== id)].slice(0, MAX_INDEX);
  await kv.put(key, JSON.stringify(next));
}

async function removeFromIndex(kv, key, id) {
  const index = await getIndex(kv, key);
  await kv.put(key, JSON.stringify(index.filter((x) => x !== id)));
}

// ---- Orders ----

export async function saveOrder(kv, order) {
  await kv.put(`order:${order.id}`, JSON.stringify(order));
  await addToIndex(kv, ORDER_INDEX_KEY, order.id);
  return order;
}

export async function getOrder(kv, id) {
  const raw = await kv.get(`order:${id}`);
  return raw ? JSON.parse(raw) : null;
}

export async function listOrders(kv) {
  const index = await getIndex(kv, ORDER_INDEX_KEY);
  const orders = await Promise.all(index.map((id) => getOrder(kv, id)));
  return orders.filter(Boolean);
}

export async function deleteOrder(kv, id) {
  await kv.delete(`order:${id}`);
  await removeFromIndex(kv, ORDER_INDEX_KEY, id);
}

// ---- Enquiries ----

export async function saveEnquiry(kv, enquiry) {
  await kv.put(`enquiry:${enquiry.id}`, JSON.stringify(enquiry));
  await addToIndex(kv, ENQUIRY_INDEX_KEY, enquiry.id);
  return enquiry;
}

export async function getEnquiry(kv, id) {
  const raw = await kv.get(`enquiry:${id}`);
  return raw ? JSON.parse(raw) : null;
}

export async function listEnquiries(kv) {
  const index = await getIndex(kv, ENQUIRY_INDEX_KEY);
  const enquiries = await Promise.all(index.map((id) => getEnquiry(kv, id)));
  return enquiries.filter(Boolean);
}

export async function deleteEnquiry(kv, id) {
  await kv.delete(`enquiry:${id}`);
  await removeFromIndex(kv, ENQUIRY_INDEX_KEY, id);
}
