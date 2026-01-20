"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (onSubmit) {
      await onSubmit(formData);
    } else {
      // Default behavior
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Pesan terkirim! Terima kasih telah menghubungi saya.");
    }
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700/50">
      <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Pesan Anda..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500 resize-none"
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Mengirim...
            </span>
          ) : (
            "🚀 Kirim Pesan"
          )}
        </motion.button>
      </div>
    </form>
  );
}
