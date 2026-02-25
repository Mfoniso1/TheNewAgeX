import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Star, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  'Project Idea Brainstorm Session',
  'Project Leadership & Supervision',
  'Technical Strategy Session',
  'Live Build Support',
  'Project Review & Debugging',
  'Monetization Strategy Session',
  'Accountability & Execution Tracking',
];

export const Membership = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl mb-6">MEMBERSHIP <span className="text-brand-green">TIERS</span></h1>
        <p className="font-mono text-sm text-zinc-500 uppercase tracking-[0.3em]">Choose your level of execution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Tier */}
        <motion.div
          whileHover={{ y: -10 }}
          className="glass-card p-8 flex flex-col"
        >
          <div className="mb-8">
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mb-6">
              <Zap size={24} className="text-zinc-400" />
            </div>
            <h3 className="text-2xl mb-2">FREE TIER</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display text-white">₦0</span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase">/ Forever</span>
            </div>
          </div>

          <div className="flex-grow space-y-4 mb-12">
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Community Access</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Monthly Public Sessions</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Resource Library</span>
            </div>
          </div>

          <Link to="/register" className="btn-outline w-full text-center py-2 text-xs">
            Join Community
          </Link>
        </motion.div>

        {/* Standard Tier */}
        <motion.div
          whileHover={{ y: -10 }}
          className="glass-card p-8 flex flex-col border-zinc-800 relative overflow-hidden"
        >
          <div className="mb-8">
            <div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6">
              <Star size={24} className="text-brand-green" />
            </div>
            <h3 className="text-2xl mb-2 uppercase">Standard</h3>
            <p className="font-mono text-[10px] text-zinc-500 mb-4 uppercase tracking-widest">(Waitlist Access)</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display text-white">₦5k - ₦7k</span>
            </div>
            <p className="font-mono text-[10px] text-brand-green mt-2 uppercase tracking-widest">1hr 30min Session</p>
          </div>

          <div className="flex-grow space-y-4 mb-12">
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Live Advisory Session</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Waitlist Based Booking</span>
            </div>
            <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-[10px] text-yellow-500 font-mono uppercase leading-relaxed">
                ⚠️ Controlled waitlist to maintain quality and prevent burnout.
              </p>
            </div>
          </div>

          <button className="btn-outline w-full py-2 text-xs">
            Join Waitlist
          </button>
        </motion.div>

        {/* Elite Tier */}
        <motion.div
          whileHover={{ y: -10 }}
          className="glass-card p-8 flex flex-col border-brand-green/30 shadow-neon relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-brand-green text-black font-mono text-[10px] font-bold px-4 py-1 uppercase tracking-widest rotate-45 translate-x-8 translate-y-4">
            Exclusive
          </div>

          <div className="mb-8">
            <div className="w-12 h-12 bg-brand-green/20 flex items-center justify-center mb-6">
              <Shield size={24} className="text-brand-green" />
            </div>
            <h3 className="text-2xl mb-2 uppercase">Elite Execution</h3>
            <p className="font-mono text-[10px] text-brand-green mb-4 uppercase tracking-widest">(Exclusive Access)</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display text-white">₦20,000</span>
            </div>
            <p className="font-mono text-[10px] text-brand-green mt-2 uppercase tracking-widest">3 Hours Intensive</p>
          </div>

          <div className="flex-grow space-y-4 mb-12">
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Priority Booking (No Waitlist)</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Deep Execution Focus</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Check size={14} className="text-brand-green" />
              <span>Hands-on Build Mode</span>
            </div>
            <div className="p-3 bg-brand-green/5 border border-brand-green/20 rounded-lg">
              <p className="text-[10px] text-brand-green font-mono uppercase leading-relaxed">
                🎯 This is not advisory. This is hands-on build mode.
              </p>
            </div>
          </div>

          <button className="btn-primary w-full py-2 text-xs flex items-center justify-center space-x-2 glitch-hover">
            <span>Book Elite Session</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>

      {/* Live Build Summit Waitlist Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 glass-card p-8 md:p-12 border-brand-green/30 bg-brand-green/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-brand-green/30 bg-brand-green/10 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
                Monthly Event Series // March – Dec
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6 uppercase tracking-tighter">
              Live Build <span className="text-brand-green">Summit</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              A high-intensity monthly summit where we build real products live. Starting March through December. Join the elite waitlist to secure your spot in the next build cycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-sm text-zinc-300">
                <Check size={16} className="text-brand-green" />
                <span>Monthly Intensive Sessions</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-300">
                <Check size={16} className="text-brand-green" />
                <span>Priority Access to Resources</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-300">
                <Check size={16} className="text-brand-green" />
                <span>Networking with Top Builders</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-300">
                <Check size={16} className="text-brand-green" />
                <span>Live Q&A and Debugging</span>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right shrink-0">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">Waitlist Commitment</p>
            <p className="text-5xl font-display text-white mb-8">₦10,000</p>
            <Link to="/register" className="btn-primary px-12 py-4 text-lg flex items-center justify-center space-x-3 glitch-hover">
              <span>Join Summit Waitlist</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Comparison Section */}
      <div className="mt-32">
        <h2 className="text-4xl mb-12 text-center uppercase tracking-tighter">Service Breakdown</h2>
        <div className="glass-card overflow-hidden">
          <table className="w-full text-left font-mono text-[10px]">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/50">
                <th className="p-6 uppercase tracking-widest text-zinc-500">Service Category</th>
                <th className="p-6 uppercase tracking-widest text-zinc-500 text-center">Duration</th>
                <th className="p-6 uppercase tracking-widest text-zinc-500 text-center">Price</th>
                <th className="p-6 uppercase tracking-widest text-zinc-500 text-center">Access Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Project Idea Brainstorm</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦5,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Project Leadership & Supervision</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦5,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Technical Strategy Session</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦5,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Live Build Support</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦6,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Project Review & Debugging</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦6,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Monetization Strategy</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦7,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 text-white">Accountability Session</td>
                <td className="p-6 text-center text-zinc-400">1hr 30min</td>
                <td className="p-6 text-center text-brand-green">₦5,000</td>
                <td className="p-6 text-center text-zinc-500">Waitlist</td>
              </tr>
              <tr className="bg-brand-green/5 hover:bg-brand-green/10 transition-colors">
                <td className="p-6 text-brand-green font-bold">ELITE EXECUTION SESSION</td>
                <td className="p-6 text-center text-brand-green">3 HRS</td>
                <td className="p-6 text-center text-brand-green font-bold">₦20,000</td>
                <td className="p-6 text-center text-brand-green">PRIORITY</td>
              </tr>
              <tr className="bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <td className="p-6 text-white font-bold">LIVE BUILD SUMMIT (WAITLIST)</td>
                <td className="p-6 text-center text-zinc-400">MONTHLY</td>
                <td className="p-6 text-center text-brand-green font-bold">₦10,000</td>
                <td className="p-6 text-center text-zinc-500 uppercase">Waitlist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
