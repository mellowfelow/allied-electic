import { SITE } from '../config/site';

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

export function paymentTermsHtml(ref: string): string {
  const lines = paymentTermsLines(ref);
  return `<ul style="margin:0; padding-left:20px; color:#334155; font-size:13px; line-height:1.6;">
    ${lines.map(l => `<li style="margin-bottom:6px;">${l}</li>`).join('')}
  </ul>`;
}
