import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus('Sending...');
      // Placeholder submit — backend can be wired later
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Mail className="h-6 w-6 text-cyan-400" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
              placeholder="Tell me about your project or idea..."
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="text-sm text-slate-400">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
