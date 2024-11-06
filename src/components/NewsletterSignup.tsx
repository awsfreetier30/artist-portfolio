import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-gray-300 mb-6">
        Subscribe to my newsletter for updates on new projects and upcoming events.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-grow">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          <Mail className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}