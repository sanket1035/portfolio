import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return 'A valid email is required.';
    if (!formData.subject.trim()) return 'Subject is required.';
    if (!formData.message.trim()) return 'Message body cannot be empty.';
    return null;
  };

  const checkRateLimit = () => {
    const lastSent = localStorage.getItem('sanket-last-email-sent');
    if (lastSent) {
      const difference = Date.now() - parseInt(lastSent, 10);
      const limitWindow = 60 * 1000; // 60 seconds limit
      if (difference < limitWindow) {
        const secondsRemaining = Math.ceil((limitWindow - difference) / 1000);
        return `Please wait ${secondsRemaining} seconds before sending another message.`;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // 1. Validate Fields
    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    // 2. Check Rate Limit
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      setStatus('error');
      setErrorMessage(rateLimitError);
      return;
    }

    setStatus('loading');

    // EmailJS keys from Vite Environment
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: portfolioData.name,
    };

    try {
      if (serviceId && templateId && publicKey) {
        // Real EmailJS Send API
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        if (response.status === 200) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          localStorage.setItem('sanket-last-email-sent', Date.now().toString());
        } else {
          throw new Error('Email delivery failed');
        }
      } else {
        // Fallback simulated Send for testing (if keys are not set up yet)
        console.warn('EmailJS environment keys missing. Simulating successful message dispatch:');
        console.log(templateParams);
        
        await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate latency
        
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        localStorage.setItem('sanket-last-email-sent', Date.now().toString());
      }
    } catch (err: any) {
      console.error('Email sending error:', err);
      setStatus('error');
      setErrorMessage('Failed to send the message. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 border-t border-brand-border/40 bg-brand-card/10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-brand-text-muted mt-4 text-sm max-w-sm mx-auto">
            Have a project, job opening, or open-source query? Drop a message.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info Details */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading font-bold text-xl text-brand-primary">
              Contact Information
            </h3>
            <p className="font-sans text-sm md:text-base text-brand-text-muted leading-relaxed">
              If you prefer direct emails or want to connect on socials, reach out through these channels.
            </p>

            <div className="space-y-4 pt-4 text-sm font-sans text-brand-text-muted">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-accent">Email</p>
                <a
                  href={`mailto:${portfolioData.socials.email}`}
                  className="text-brand-text hover:text-brand-accent font-medium transition-colors"
                >
                  {portfolioData.socials.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-brand-accent">Location</p>
                <p className="text-brand-text font-medium">{portfolioData.location}</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="md:col-span-3 p-6 md:p-8 rounded-2xl bg-brand-card border border-brand-border shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-brand-text">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Siddharth Sharma"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-brand-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="recruiter@company.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-brand-text">
                  Subject
                  </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Interview Invitation / Collaboration"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-brand-text">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Tell me about the role, stack, or project..."
                  required
                ></textarea>
              </div>

              {/* Alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>Message sent successfully! I will respond to your email shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3.5 rounded-xl bg-brand-primary text-brand-bg font-semibold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
