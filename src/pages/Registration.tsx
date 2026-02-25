import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Calendar, MessageCircle, Share2, Twitter, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sheetDB } from '@/src/services/sheetDB';

export const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await sheetDB.register(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full glass-card p-12 text-center"
        >
          <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">YOU'RE IN.</h1>
          <p className="font-mono text-zinc-500 uppercase tracking-widest mb-12">Welcome to The New Age X</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <a href="#" className="btn-primary flex items-center justify-center space-x-2">
              <MessageCircle size={18} />
              <span>Join WhatsApp</span>
            </a>
            <button className="btn-outline flex items-center justify-center space-x-2">
              <Calendar size={18} />
              <span>Add to Calendar</span>
            </button>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="font-mono text-[10px] uppercase text-zinc-500 mb-6 tracking-[0.2em]">Share The Vibe</p>
            <div className="flex justify-center space-x-4">
              <button className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:border-brand-green hover:text-brand-green transition-all">
                <Twitter size={20} />
              </button>
              <button className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:border-brand-green hover:text-brand-green transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Event Details */}
        <div className="space-y-12">
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-brand-green transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
              <ArrowLeft size={14} />
              <span>Back to Mission Control</span>
            </Link>
            <h1 className="text-5xl md:text-7xl mb-6">JOIN THE<br /><span className="text-brand-green">SUMMIT</span> WAITLIST</h1>
            <p className="text-xl text-zinc-400 max-w-lg">
              Secure your spot for the monthly Live Build Summit series (March – December). Registration requires a commitment fee of <span className="text-brand-green font-bold">₦10,000</span>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0">01</div>
              <div>
                <h4 className="text-white uppercase mb-1">Priority Access</h4>
                <p className="text-sm text-zinc-500">Waitlist members get first dibs on limited spots for each monthly session.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0">02</div>
              <div>
                <h4 className="text-white uppercase mb-1">Resource Vault</h4>
                <p className="text-sm text-zinc-500">Immediate access to previous session recordings and build templates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0">03</div>
              <div>
                <h4 className="text-white uppercase mb-1">Commitment Fee</h4>
                <p className="text-sm text-zinc-500">The ₦10k fee ensures we only have serious builders in the room.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div className="lg:sticky lg:top-32">
          <div className="glass-card p-8 md:p-12 border-brand-green/20 shadow-neon relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-green/20">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-brand-green"
              />
            </div>

            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl uppercase tracking-tighter">Waitlist Entry</h3>
              <div className="px-3 py-1 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-[10px] uppercase tracking-widest">
                ₦10,000
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="JOHN DOE"
                  className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white font-mono focus:border-brand-green outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="JOHN@EXAMPLE.COM"
                  className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white font-mono focus:border-brand-green outline-none transition-colors"
                />
              </div>

              {error && <p className="text-red-500 font-mono text-xs uppercase">{error}</p>}

              <button
                disabled={isLoading}
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2 glitch-hover"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Submit Registration</span>
                )}
              </button>
            </form>

            <p className="mt-8 font-mono text-[10px] text-zinc-600 uppercase text-center tracking-widest">
              By registering, you agree to our community guidelines and execution-first philosophy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
