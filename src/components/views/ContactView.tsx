import React, { useState } from 'react';
import { CONTACT, SITE } from '../../config/site';
import { saveEnquiry } from '../../lib/enquiryStore';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    saveEnquiry({
      id: `ENQ-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      type: 'general',
      subject: 'General Technical & Sales Inquiry',
      message,
      status: 'new'
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Perth Logistics & Technical Hub</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Contact ALLIED ELECTRIC VEHICLES
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Contact our Perth engineering & sales team for technical vehicle specifications, spare parts, or mobile service bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white">Perth Headquarters & Warehouse</h3>
            <p className="text-xs text-slate-400 font-mono">ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377)</p>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 uppercase">Street Address</p>
                <p className="text-white font-semibold font-sans text-sm">{CONTACT.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 uppercase">Phone Contact</p>
                <a href={`tel:${CONTACT.phone}`} className="text-sky-400 font-bold text-sm hover:underline">{CONTACT.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 uppercase">Sales & Tender Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-sky-400 font-semibold hover:underline font-sans text-xs">{CONTACT.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 uppercase">Perth Operating Hours</p>
                <p className="text-white font-sans text-xs">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
            Direct Perth Freight & Express Spare Parts Dispatch across WA, SA, NT, QLD, NSW, VIC, TAS & ACT.
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white">Send Technical Inquiry</h3>
            <p className="text-xs text-slate-400">Direct transmission to Perth sales engineering desk</p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-lg text-white">Message Dispatched!</h4>
              <p className="text-xs text-slate-300">
                Thank you {name}. An ALLIED specialist will review your request and respond via email or phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@company.com.au"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="0400 000 000"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Message / Question *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Ask about forklift lithium specs, utility cart accessories, delivery times..."
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
