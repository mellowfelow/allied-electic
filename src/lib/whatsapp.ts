import { SITE } from '../config/site';

export const WA_HEADER = `*${SITE.name}*`;

export function toWhatsAppNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Customer originated greeting opener rule:
 * "Hi ALLIED ELECTRIC VEHICLES,"
 */
export function waCustomerGreeting(): string {
  return `Hi ${SITE.name}, `;
}

/**
 * Link for customer to open WhatsApp chat with ALLIED ELECTRIC VEHICLES
 */
export function waLink(message: string): string {
  const number = toWhatsAppNumber(SITE.reply.channels.whatsapp);
  const text = encodeURIComponent(`${waCustomerGreeting()}${message}`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Creates structured order message from customer
 */
export function waOrderLink(orderRef: string, itemsText: string, totalFormatted: string, customerName: string): string {
  const number = toWhatsAppNumber(SITE.reply.channels.whatsapp);
  const body = `I would like to place an order (Ref: ${orderRef}).\n\nCustomer: ${customerName}\nOrder Items:\n${itemsText}\n\nTotal: ${totalFormatted}\n\nPlease confirm stock availability and payment steps.`;
  const text = encodeURIComponent(`${waCustomerGreeting()}${body}`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Customer payment confirmation link
 */
export function waPaymentConfirmationLink(ref: string): string {
  const number = toWhatsAppNumber(SITE.reply.channels.whatsapp);
  const body = `I have transferred payment for Order Ref: ${ref}. Please check remittance advice.`;
  const text = encodeURIComponent(`${waCustomerGreeting()}${body}`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Admin to customer WhatsApp link (uses bold header)
 */
export function waLinkTo(phone: string, body: string): string {
  const cleanPhone = toWhatsAppNumber(phone);
  const text = encodeURIComponent(`${WA_HEADER}\n\n${body}`);
  return `https://wa.me/${cleanPhone}?text=${text}`;
}

export function waMessageText(body: string): string {
  return `${WA_HEADER}\n\n${body}`;
}

export function waPaymentDetailsMessage(opts: { customerName: string; orderRef: string; fields: { label: string; value: string }[] }): string {
  const fieldsText = opts.fields.map(f => `${f.label}: ${f.value}`).join('\n');
  return `Hi ${opts.customerName}, here are your payment details for order ${opts.orderRef}:\n\n${fieldsText}`;
}

