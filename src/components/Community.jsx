import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Community() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('loading');
    try {
      // Fake delay to show feedback; in real app, POST to backend/newsletter
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="community" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Join my creator circle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-neutral-700"
        >
          Get weekly insights, templates, and early access to new tools. No spam. Unsubscribe anytime.
        </motion.p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800 disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Subscribe'}
          </button>
        </form>

        <div className="mt-6 text-xs text-neutral-500">
          By subscribing you agree to receive emails from me. No spam, unsubscribe any time.
        </div>
      </div>
    </section>
  );
}
