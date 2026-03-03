import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { sheetDB } from '@/src/services/sheetDB';

const roles = ['Developer', 'Engineer', 'Automation Specialist', 'AI Specialist'];

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [spots, setSpots] = useState({ taken: 0, total: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    sheetDB.getSpots().then(setSpots);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border border-brand-green/30 bg-brand-green/5 mb-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
              System Status: Operational // v2.0.26
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] tracking-tighter">
            CODE IS DEAD.<br />
            <span className="text-brand-green">VIBE</span> IS THE NEW CASH.
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center mb-12">
            <span className="font-mono text-xl md:text-2xl text-zinc-500 mr-4">I AM A</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-display text-3xl md:text-5xl text-white uppercase"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to={`/register?service=${encodeURIComponent('Summit Waitlist')}&price=10000`}
              className="btn-primary w-full sm:w-auto px-12 glitch-hover text-center"
            >
              Register Now
            </Link>
            <Link to="/membership" className="btn-outline w-full sm:w-auto px-12 text-center">
              Explore Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Event Bento Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl mb-2 uppercase">Monthly Summit Series</h2>
            <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest">March — December 2026 // Live Build & Strategy</p>
          </div>
          <div className="flex items-center space-x-4 font-mono text-xs">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green uppercase tracking-widest">Waitlist Open</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Event Card */}
          <div className="md:col-span-2 glass-card p-8 relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-brand-green" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-brand-green mb-6">
                <Calendar size={18} />
                <span className="font-mono text-sm uppercase tracking-widest">Monthly Execution</span>
              </div>
              <h3 className="text-4xl mb-8">The New Age X:<br />Live Build Summit</h3>
              <p className="text-zinc-400 mb-8 max-w-lg">
                A recurring monthly intensive starting March through December. Join the elite waitlist to secure your spot in the next build cycle.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase text-zinc-500">Registration Fee</p>
                  <div className="flex items-center space-x-2 text-brand-green">
                    <span className="text-xl font-display">₦10,000</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase text-zinc-500">Schedule</p>
                  <div className="flex items-center space-x-2 text-white">
                    <Clock size={14} />
                    <span className="text-sm">Monthly // 10:00 AM GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spot Counter Card */}
          <div className="glass-card p-8 flex flex-col justify-between border-brand-green/20 shadow-neon">
            <div>
              <div className="flex items-center justify-between mb-8">
                <Users className="text-brand-green" />
                <span className="font-mono text-xs text-brand-green uppercase tracking-widest">Availability</span>
              </div>
              <div className="mb-4">
                <span className="text-6xl font-display text-white">{spots.taken}</span>
                <span className="text-2xl font-display text-zinc-600"> / {spots.total}</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8">Spots Taken</p>
            </div>
            
            <div className="space-y-4">
              <div className="h-2 bg-zinc-900 w-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(spots.taken / spots.total) * 100}%` }}
                  className="h-full bg-brand-green"
                />
              </div>
              <Link 
                to={`/register?service=${encodeURIComponent('Summit Waitlist')}&price=10000`}
                className="flex items-center justify-between group text-white hover:text-brand-green transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-widest">Secure Your Spot</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Small Feature Cards */}
          <div className="glass-card p-6 flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-brand-green/10 text-brand-green">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-lg mb-1">Execution First</h4>
              <p className="text-xs text-zinc-500 font-mono uppercase">No fluff, just builds.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-brand-green/10 text-brand-green">
              <Target size={24} />
            </div>
            <div>
              <h4 className="text-lg mb-1">Direct Mentorship</h4>
              <p className="text-xs text-zinc-500 font-mono uppercase">Learn from the best.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-brand-green/10 text-brand-green">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-lg mb-1">Rapid Monetization</h4>
              <p className="text-xs text-zinc-500 font-mono uppercase">Build to earn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-24 border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl mb-8">LEARNING ALONE IS <span className="text-zinc-700 line-through">DEAD</span></h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
            The era of watching tutorials for 100 hours is over. The New Age X is about execution, accountability, and shipping real products.
          </p>
          <Link to="/about" className="btn-outline">
            Read Our Manifesto
          </Link>
        </div>
      </section>
    </div>
  );
};
