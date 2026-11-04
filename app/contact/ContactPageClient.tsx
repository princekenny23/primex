'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormData = { name: '', email: '', company: '', phone: '', message: '' };

export default function ContactPageClient({ initialMessage, enquiryContext }: { initialMessage: string; enquiryContext: string }) {
  const [formData, setFormData] = useState({ ...initialForm, message: initialMessage });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const message = [
      'Hello Primex Technologies, I would like to get in touch.',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company ? `Company: ${formData.company}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      '',
      `Message: ${formData.message}`,
    ].filter(Boolean).join('\n');

    const popup = window.open(`https://wa.me/265997575865?text=${encodeURIComponent(message)}`, '_blank');

    if (popup) {
      popup.opener = null;
      setStatus('success');
      setFormData(initialForm);
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-intro">
          <div>
            <p className="eyebrow">Talk to Primex</p>
            <h1>Good things start<br /><span>with a conversation.</span></h1>
          </div>
          <p>Tell us what your business needs. We’ll help you explore the right software, pricing approach or custom solution.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <span className="contact-detail-kicker">WE’RE HERE TO HELP</span>
            <h2>Let’s find a solution<br />that fits your work.</h2>
            <p>Whether you’re looking for a product demo, pricing information or a tailored system, we’d love to hear from you.</p>
            {enquiryContext && <div className="contact-context"><span>YOUR ENQUIRY</span><strong>{enquiryContext}</strong></div>}
            <div className="contact-methods">
              <a href="mailto:primexltd876@gmail.com" className="contact-method"><span className="contact-method-icon">@</span><span><small>Email us</small><strong>primexltd876@gmail.com</strong></span><span className="contact-method-arrow">↗</span></a>
              <a href="https://wa.me/265997575865" className="contact-method"><span className="contact-method-icon">↗</span><span><small>WhatsApp</small><strong>+265 997 575 865</strong></span><span className="contact-method-arrow">↗</span></a>
              <div className="contact-method"><span className="contact-method-icon">⌖</span><span><small>Based in</small><strong>Lilongwe, Malawi</strong></span></div>
            </div>
          </div>
          <div className="contact-form-card" id="contact-form">
            <div className="contact-form-heading"><div><p className="eyebrow">Start here</p><h2>Send us a message</h2></div><span className="contact-form-mark">P</span></div>
            <p className="contact-form-subtitle">Share a few details and we’ll take it from there.</p>
            {status === 'success' && <div className="contact-alert contact-alert-success">WhatsApp opened with your message. Send it there to complete your enquiry.</div>}
            {status === 'error' && <div className="contact-alert contact-alert-error">We couldn’t open WhatsApp. Please allow popups or email us directly.</div>}
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Full name<input name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="Your name" /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" /></label>
              <label>Company name (optional)<input name="company" autoComplete="organization" value={formData.company} onChange={handleChange} placeholder="Your business" /></label>
              <label>Phone number (optional)<input name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="+265" /></label>
              <label className="contact-message-field">How can we help?<textarea name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Tell us what you’re looking for..." /></label>
              <button type="submit" className="button button-primary contact-submit" disabled={status === 'loading'}>{status === 'loading' ? 'Opening WhatsApp…' : 'Send your enquiry'}<span aria-hidden="true">↗</span></button>
              <p className="contact-form-note">Submitting opens WhatsApp with your message ready to send.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
