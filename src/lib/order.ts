import { SITE } from '../config/site';
import { OrderItem } from './orderStore';

export interface ParsedPaymentField {
  label: string;
  value: string;
}

/**
 * 3-tier flexible payment details parser.
 * Converts a raw pasted block of text into structured label/value fields.
 */
export function parsePaymentDetail(text: string): ParsedPaymentField[] {
  if (!text || typeof text !== 'string') return [];
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const result: ParsedPaymentField[] = [];

  let genericCounter = 1;

  for (const line of lines) {
    // Rule 1: Has colon "Label: Value"
    if (line.includes(':')) {
      const parts = line.split(':');
      const label = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      if (label && value) {
        result.push({ label, value });
        continue;
      }
    }

    // Rule 2: Keyword starts line without colon e.g. "BSB 016-000", "Account 12345678", "USDT 0x..."
    const knownKeyRegex = /^(bsb|account|acc|account number|account name|bank|swift|iban|abn|wallet|usdt|btc|reference|ref|payid)\s+(.+)$/i;
    const match = line.match(knownKeyRegex);
    if (match) {
      result.push({
        label: match[1].toUpperCase(),
        value: match[2].trim()
      });
      continue;
    }

    // Rule 3: Fallback bare line
    result.push({
      label: `Detail ${genericCounter++}`,
      value: line
    });
  }

  return result;
}

/**
 * Formats currency amount in AUD
 */
export function money(amount: number): string {
  const symbol = SITE.reply.currency.symbol || '$';
  const formatted = new Intl.NumberFormat(SITE.reply.currency.locale || 'en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
  return `${symbol}${formatted} AUD`;
}

/**
 * Gets payment terms bullets
 */
export function paymentTermsLines(ref: string): string[] {
  return [
    `This order is confirmed once payment or remittance advice is received.`,
    `Use your unique order reference — ${ref} — on all transfers and communications.`,
    `ABN: ${SITE.abn} (${SITE.legalEntity}). GST inclusive invoice issued upon dispatch.`,
    `${SITE.reply.dispatchLine}`
  ];
}

/**
 * No SMTP/API backend exists on this static site (see docs/PROJECT.md), so the
 * "Place Order (Email)" checkout path must not claim to have sent anything itself.
 * Instead it opens a pre-filled mailto: to the business, mirroring the WhatsApp
 * order flow, so the order actually reaches the business via the customer's own
 * mail client rather than silently vanishing into localStorage.
 */
export function orderMailtoLink(orderRef: string, items: OrderItem[], totalFormatted: string, customerName: string, customerEmail: string): string {
  const itemsText = items.map(i => `${i.quantity}x ${i.name} ($${i.price} ea)`).join('%0D%0A');
  const subject = encodeURIComponent(`Order ${orderRef} — ${SITE.name}`);
  const body = `Order Reference: ${orderRef}%0D%0ACustomer: ${customerName} (${customerEmail})%0D%0A%0D%0AItems:%0D%0A${itemsText}%0D%0A%0D%0ATotal: ${encodeURIComponent(totalFormatted)}%0D%0A%0D%0APlease confirm stock availability and payment steps.`;
  return `mailto:${SITE.reply.channels.email}?subject=${subject}&body=${body}`;
}

export function paymentTermsHtml(ref: string): string {
  const lines = paymentTermsLines(ref);
  return `<ul style="margin:0; padding-left:20px; color:#334155; font-size:13px; line-height:1.6;">
    ${lines.map(l => `<li style="margin-bottom:6px;">${l}</li>`).join('')}
  </ul>`;
}
