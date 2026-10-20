export interface Enquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  type: 'general' | 'wholesale' | 'finance' | 'spec';
  subject: string;
  message: string;
  status: 'new' | 'replied' | 'archived';
  replyMessage?: string;
  repliedAt?: string;
}

const ENQUIRY_KEY = 'allied_ev_enquiries_v1';

// See orderStore.ts for the rationale behind the API-first, localStorage-fallback pattern.

function localGetEnquiries(): Enquiry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ENQUIRY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse local enquiries:', e);
    return [];
  }
}

function localSaveEnquiry(enquiry: Enquiry): void {
  if (typeof window === 'undefined') return;
  const existing = localGetEnquiries();
  const updated = [enquiry, ...existing.filter(e => e.id !== enquiry.id)];
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(updated));
}

function localDeleteEnquiry(id: string): void {
  if (typeof window === 'undefined') return;
  const updated = localGetEnquiries().filter(e => e.id !== id);
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(updated));
}

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }
  });
}

export async function saveEnquiry(enquiry: Enquiry): Promise<{ shared: boolean }> {
  try {
    const res = await apiFetch('/api/enquiries', { method: 'POST', body: JSON.stringify(enquiry) });
    if (res.ok) {
      localSaveEnquiry(enquiry);
      return { shared: true };
    }
  } catch (e) {
    console.warn('Enquiry API unreachable, saved locally only:', e);
  }
  localSaveEnquiry(enquiry);
  return { shared: false };
}

export async function getEnquiries(passcode: string): Promise<{ enquiries: Enquiry[]; shared: boolean }> {
  try {
    const res = await apiFetch('/api/enquiries', { headers: { 'X-Admin-Passcode': passcode } });
    if (res.ok) return { enquiries: await res.json(), shared: true };
  } catch (e) {
    console.warn('Enquiry API unreachable, showing local-only enquiries:', e);
  }
  return { enquiries: localGetEnquiries(), shared: false };
}

export async function markEnquiryReplied(id: string, replyText: string, passcode: string): Promise<Enquiry | undefined> {
  const patch: Partial<Enquiry> = { status: 'replied', replyMessage: replyText, repliedAt: new Date().toISOString() };
  try {
    const res = await apiFetch(`/api/enquiries/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'X-Admin-Passcode': passcode },
      body: JSON.stringify(patch)
    });
    if (res.ok) {
      const updated = await res.json();
      localSaveEnquiry(updated);
      return updated;
    }
  } catch (e) {
    console.warn('Enquiry API unreachable, updating locally only:', e);
  }
  const enquiries = localGetEnquiries();
  const enquiry = enquiries.find(e => e.id === id);
  if (!enquiry) return undefined;
  Object.assign(enquiry, patch);
  localSaveEnquiry(enquiry);
  return enquiry;
}

export async function deleteEnquiry(id: string, passcode: string): Promise<void> {
  try {
    const res = await apiFetch(`/api/enquiries/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Passcode': passcode }
    });
    if (res.ok) {
      localDeleteEnquiry(id);
      return;
    }
  } catch (e) {
    console.warn('Enquiry API unreachable, deleting locally only:', e);
  }
  localDeleteEnquiry(id);
}
