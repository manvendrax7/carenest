import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest updates in home healthcare.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {status === 'success' && (
            <p className="text-white mt-4">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  );
}