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

export function getEnquiries(): Enquiry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ENQUIRY_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse enquiries:', e);
    return [];
  }
}

export function saveEnquiry(enquiry: Enquiry): void {
  if (typeof window === 'undefined') return;
  const existing = getEnquiries();
  const updated = [enquiry, ...existing.filter(e => e.id !== enquiry.id)];
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(updated));
}

export function getEnquiryById(id: string): Enquiry | undefined {
  return getEnquiries().find(e => e.id === id);
}

export function markEnquiryReplied(id: string, replyText: string): Enquiry | undefined {
  const enquiries = getEnquiries();
  const enquiry = enquiries.find(e => e.id === id);
  if (!enquiry) return undefined;
  
  enquiry.status = 'replied';
  enquiry.replyMessage = replyText;
  enquiry.repliedAt = new Date().toISOString();
  saveEnquiry(enquiry);
  return enquiry;
}

export function deleteEnquiry(id: string): void {
  const enquiries = getEnquiries();
  const filtered = enquiries.filter(e => e.id !== id);
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(filtered));
}
