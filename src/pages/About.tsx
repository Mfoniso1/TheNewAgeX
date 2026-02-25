import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '150+' },
  { label: 'Builders Mentored', value: '500+' },
  { label: 'Live Sessions', value: '2.4k' },
  { label: 'Success Rate', value: '98%' },
];

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Manifesto */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl mb-8">EXECUTION <span className="text-brand-green">OVER</span> EDUCATION.</h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              The New Age X was founded on a simple realization: the world doesn't need more tutorials. It needs more products.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              We've created an ecosystem where building is the only currency that matters. We don't just teach you how to code; we show you how to ship, how to lead, and how to earn.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card p-12 flex flex-col justify-center items-center text-center border-brand-green/20 shadow-neon">
              <h2 className="text-4xl md:text-6xl mb-6">WE BUILD.<br />WE SHIP.<br /><span className="text-brand-green">WE EARN.</span></h2>
              <div className="w-24 h-1 bg-brand-green/30" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-green/30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-green/30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-5xl md:text-7xl mb-2">{stat.value}</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="glass-card p-12">
          <Target className="text-brand-green mb-8" size={40} />
          <h3 className="text-3xl mb-4">OUR MISSION</h3>
          <p className="text-zinc-400 leading-relaxed">
            To accelerate the transition from "learner" to "builder" for 10,000 engineers globally. We provide the structure, accountability, and technical strategy required to ship world-class products.
          </p>
        </div>
        <div className="glass-card p-12">
          <Zap className="text-brand-green mb-8" size={40} />
          <h3 className="text-3xl mb-4">WHY BUILDING?</h3>
          <p className="text-zinc-400 leading-relaxed">
            Learning alone is dead. The market only rewards execution. By focusing on building real assets, you develop skills that are immediately applicable and monetizable.
          </p>
        </div>
        <div className="glass-card p-12">
          <Users className="text-brand-green mb-8" size={40} />
          <h3 className="text-3xl mb-4">COMMUNITY FIRST</h3>
          <p className="text-zinc-400 leading-relaxed">
            Execution is hard. Doing it alone is harder. Our community provides the peer pressure and support needed to maintain high-velocity shipping.
          </p>
        </div>
        <div className="glass-card p-12">
          <Award className="text-brand-green mb-8" size={40} />
          <h3 className="text-3xl mb-4">FOUNDER VISION</h3>
          <p className="text-zinc-400 leading-relaxed">
            "The New Age X isn't a school. It's a lab. It's where the next generation of technical founders are forged through the fire of actual production."
          </p>
        </div>
      </section>
    </div>
  );
};
