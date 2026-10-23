/**
 * Transactional email templates — light shell (white card, dark brand header
 * band, near-black text, brand colour as accent only). Never a dark body:
 * Zoho/Gmail dark mode force-inverts those with no opt-out. All brand specifics
 * come from SITE.reply — nothing hardcoded here.
 */
import { SITE } from '../../src/config/site.js';

const { primary, headerDark } = SITE.reply.brand;

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shell(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
        <tr>
          <td style="background:${headerDark};padding:20px 28px;">
            <span style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:0.02em;">${escapeHtml(SITE.name)}</span>
            <div style="color:#94a3b8;font-size:11px;margin-top:2px;">${escapeHtml(SITE.reply.headerTagline)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;">
            <h1 style="margin:0 0 16px;color:#0f172a;font-size:18px;">${escapeHtml(title)}</h1>
            <div style="color:#334155;font-size:14px;line-height:1.6;">${bodyHtml}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:11px;">
            ${escapeHtml(SITE.legalEntity)} (ABN ${escapeHtml(SITE.abn)}) · ${escapeHtml(SITE.reply.channels.email)}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function button(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:20px 0;"><tr><td style="background:${primary};border-radius:8px;">
    <a href="${href}" style="display:inline-block;padding:12px 24px;color:#ffffff;font-weight:700;font-size:13px;text-decoration:none;">${escapeHtml(label)}</a>
  </td></tr></table>`;
}

function field(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;width:40%;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13px;font-weight:600;">${escapeHtml(value)}</td>
  </tr>`;
}

function itemsTable(items: { name: string; price: number; quantity: number }[]): string {
  const rows = items
    .map(
      (i) =>
        `<tr><td style="padding:6px 0;color:#334155;font-size:13px;">${escapeHtml(i.quantity + 'x ' + i.name)}</td><td style="padding:6px 0;text-align:right;color:#334155;font-size:13px;">$${(i.price * i.quantity).toFixed(2)}</td></tr>`
    )
    .join('');
  return `<table role="presentation" width="100%" style="margin:12px 0;">${rows}</table>`;
}

// ---- Order confirmation (customer, every channel, unconditional) ----

export function orderConfirmationEmail(order: {
  id: string;
  customerName: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
}): { subject: string; html: string } {
  const body = `
    <p>Thanks for your order, ${escapeHtml(order.customerName)} — we've received it and will be in touch shortly.</p>
    <table role="presentation" width="100%" style="margin:16px 0;">
      ${field('Order Reference', order.id)}
      ${field('Total', `$${order.total.toFixed(2)} AUD`)}
    </table>
    <p style="color:#64748b;font-size:13px;">Items:</p>
    ${itemsTable(order.items)}
    <p>We'll send a follow-up email shortly with your payment details. Keep your order reference (<strong>${escapeHtml(order.id)}</strong>) handy — quote it on all transfers and communications.</p>
  `;
  return { subject: `Order ${order.id} received — ${SITE.name}`, html: shell('Order received', body) };
}

// ---- Order notification (admin) ----

export function orderNotificationEmail(order: {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  channel: string;
  total: number;
}): { subject: string; html: string } {
  const adminUrl = `https://${SITE.domain}/admin/`;
  const body = `
    <p>New order via ${escapeHtml(order.channel)}.</p>
    <table role="presentation" width="100%" style="margin:16px 0;">
      ${field('Order Reference', order.id)}
      ${field('Customer', order.customerName)}
      ${field('Email', order.email)}
      ${field('Phone', order.phone)}
      ${field('Total', `$${order.total.toFixed(2)} AUD`)}
    </table>
    ${button('Reply in Dashboard →', adminUrl)}
  `;
  return { subject: `New order ${order.id} — ${order.customerName}`, html: shell('New order received', body) };
}

// ---- Payment details (customer, sent from the admin composer) ----

export function paymentDetailsEmail(
  order: { id: string; customerName: string; total: number },
  fields: { label: string; value: string }[],
  termsLines: string[]
): { subject: string; html: string } {
  const detailRows = fields.map((f) => field(f.label, f.value)).join('');
  const terms = termsLines.map((l) => `<li style="margin-bottom:6px;">${escapeHtml(l)}</li>`).join('');
  const paymentUrl = `https://${SITE.domain}/order/payment-details/?id=${encodeURIComponent(order.id)}`;
  const body = `
    <p>Hi ${escapeHtml(order.customerName)}, here are your payment details for order <strong>${escapeHtml(order.id)}</strong> (total $${order.total.toFixed(2)} AUD):</p>
    <table role="presentation" width="100%" style="margin:16px 0;">${detailRows}</table>
    <ul style="margin:0 0 16px;padding-left:20px;color:#334155;font-size:13px;line-height:1.6;">${terms}</ul>
    ${button('View & copy payment details →', paymentUrl)}
  `;
  return { subject: `Payment details for order ${order.id} — ${SITE.name}`, html: shell('Your payment details', body) };
}

// ---- Enquiry notification (admin) ----

export function enquiryNotificationEmail(enquiry: {
  id: string;
  name: string;
  email: string;
  phone?: string;
  type: string;
  subject: string;
  message: string;
}): { subject: string; html: string } {
  const adminUrl = `https://${SITE.domain}/admin/`;
  const body = `
    <table role="presentation" width="100%" style="margin:16px 0;">
      ${field('Type', enquiry.type)}
      ${field('Name', enquiry.name)}
      ${field('Email', enquiry.email)}
      ${field('Phone', enquiry.phone || '—')}
      ${field('Subject', enquiry.subject)}
    </table>
    <p style="color:#334155;font-size:13px;white-space:pre-wrap;">${escapeHtml(enquiry.message)}</p>
    ${button('Reply in Dashboard →', adminUrl)}
  `;
  return { subject: `New enquiry — ${enquiry.name} (${enquiry.type})`, html: shell('New enquiry received', body) };
}

// ---- Enquiry reply (customer) ----

export function enquiryReplyEmail(enquiry: { name: string; subject: string }, replyText: string): { subject: string; html: string } {
  const body = `
    <p>Hi ${escapeHtml(enquiry.name)},</p>
    <p style="white-space:pre-wrap;">${escapeHtml(replyText)}</p>
  `;
  return { subject: `Re: ${enquiry.subject} — ${SITE.name}`, html: shell('Reply from ' + SITE.name, body) };
}
