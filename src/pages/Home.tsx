import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { sheetDB } from '@/src/services/sheetDB';
import { ExecutionBoard } from '@/src/components/ExecutionBoard';

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
            IDEAS ARE CHEAP.<br />
            <span className="text-brand-green">EXECUTION</span> IS EVERYTHING.
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-mono uppercase tracking-tight">
            Stop watching tutorials. Start shipping products. The New Age X is the terminal for high-velocity builders.
          </p>

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

      {/* Execution Board Section */}
      <ExecutionBoard />

      {/* Testimonials / Social Proof */}
      <section className="py-24 px-4 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 uppercase tracking-tighter">VOICES FROM THE TRENCHES</h2>
            <p className="font-mono text-zinc-500 uppercase tracking-widest">Beta Tester Feedback // Early Adopters</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I spent 6 months 'learning' React. In one Elite Session, we built a working SaaS. The speed is terrifying.",
                author: "David O.",
                role: "Fullstack Developer"
              },
              {
                quote: "The New Age X isn't a course. It's a factory. You don't leave with notes; you leave with a URL.",
                author: "Sarah J.",
                role: "AI Automation Specialist"
              },
              {
                quote: "Finally, a place that values shipping over syntax. The Vibe Coding philosophy changed how I think about money.",
                author: "Emmanuel K.",
                role: "Product Engineer"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-zinc-800/50"
              >
                <div className="text-brand-green mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="text-white font-bold uppercase tracking-tight">{t.author}</p>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl uppercase tracking-tighter leading-none">
              TUTORIAL HELL IS A <span className="text-zinc-800">PRISON.</span><br />
              <span className="text-brand-green">WE ARE THE ESCAPE.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-12">
              <div className="space-y-4">
                <h4 className="text-brand-green font-mono uppercase tracking-widest text-sm">The Problem</h4>
                <p className="text-zinc-400 leading-relaxed">
                  You've watched 100 hours of YouTube. You've bought 5 Udemy courses. Yet, when you open a blank editor, you freeze. You are addicted to consumption, not creation.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-green font-mono uppercase tracking-widest text-sm">The Solution</h4>
                <p className="text-zinc-400 leading-relaxed">
                  The New Age X forces you into the trenches. We don't teach you how to code; we show you how to build. We value shipping a "messy" product over a "perfect" idea that never launches.
                </p>
              </div>
            </div>

            <div className="pt-12">
              <Link to="/register" className="btn-primary px-16 py-6 text-xl glitch-hover">
                Join The Resistance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl mb-16 uppercase tracking-tighter text-center">INTEL / FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Is this for absolute beginners?",
                a: "No. You should have a basic understanding of what code is. We are for builders who want to move from 'knowing' to 'doing' at an elite level."
              },
              {
                q: "What is 'Vibe Coding'?",
                a: "It's the art of using AI and high-level abstractions to build complex systems at 10x speed. It's about focusing on the product vibe and logic rather than fighting with syntax."
              },
              {
                q: "Is the ₦10k Waitlist fee refundable?",
                a: "No. The fee is a commitment filter. It ensures that every person in the room is serious about execution. It also grants you immediate access to our resource vault."
              },
              {
                q: "Do I need a high-end PC?",
                a: "If you can run a browser and VS Code, you're ready. Most of our tools are cloud-based and AI-driven."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 border-zinc-800/30">
                <h4 className="text-white uppercase mb-4 tracking-tight flex items-center">
                  <span className="text-brand-green mr-4 font-mono">0{i+1}</span>
                  {item.q}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed pl-10">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
