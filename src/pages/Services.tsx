import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Lightbulb, ShieldCheck, Cpu, Code, Bug, BarChart3, ListChecks, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'AI Masterclass: Web + Backend + DB',
    problem: 'You want to build full-stack web applications but are overwhelmed by backend and database complexity.',
    whatHappens: 'A deep-dive into building complete web apps with integrated backends and databases at 10x speed using AI.',
    leaveWith: [
      'Complete Web App + Backend + DB',
      'Save cost of Supabase & Premium Platforms',
      'Mastery of AI-assisted development',
      'Prompt engineering for complex systems',
      'Database architecture & security'
    ],
    outcomePositioning: 'Build production-ready web systems at the speed of thought.',
    who: 'Builders ready to ship complete web products.',
    price: '₦24,999',
    originalPrice: '₦50,000'
  },
  {
    icon: Cpu,
    title: 'AI Masterclass: Mobile Apps',
    problem: 'You want to launch on App Store and Play Store but mobile development feels like a mountain.',
    whatHappens: 'Master the workflow of building high-performance Android and iOS apps using AI-driven cross-platform tools.',
    leaveWith: [
      'Functional Mobile App (Android & iOS)',
      'App Store & Play Store readiness',
      'Mobile-specific AI workflows',
      'Native feature integration',
      'Performance optimization for mobile'
    ],
    outcomePositioning: 'Dominate the mobile market with AI-powered speed.',
    who: 'Developers aiming for the mobile ecosystem.',
    price: '₦49,999',
    originalPrice: '₦100,000'
  },
  {
    icon: Code,
    title: 'AI Masterclass: Desktop Apps',
    problem: 'You need to build powerful software for Windows, Mac, or Linux without spending months on native code.',
    whatHappens: 'Learn to build and package professional desktop applications for all major platforms using AI-accelerated frameworks.',
    leaveWith: [
      'Desktop Apps (Win, Mac, Linux)',
      'Cross-platform packaging & distribution',
      'System-level integration mastery',
      'Offline-first architecture',
      'Professional software deployment'
    ],
    outcomePositioning: 'Build professional software for every desktop platform.',
    who: 'Engineers building enterprise or utility desktop tools.',
    price: '₦99,999',
    originalPrice: '₦200,000'
  },
  {
    icon: Lightbulb,
    title: 'Market-Ready Product Design',
    problem: 'You have too many ideas or none at all, and you\'re stuck in analysis paralysis.',
    whatHappens: 'We strip away the noise and validate your concept through a rigorous market-fit lens. We focus on what people actually pay for.',
    leaveWith: [
      'A validated project idea (Global Standard)',
      'Clear target audience definition',
      'Defined core problem & solution statement',
      'Basic feature list (MVP breakdown)',
      'Suggested tech stack for speed',
      'Execution roadmap (next 30 days)'
    ],
    outcomePositioning: 'Build products that look, feel, and scale like Silicon Valley.',
    who: 'Builders ready to stop "playing" and start "shipping".',
    price: '₦15,000',
  },
  {
    icon: ShieldCheck,
    title: 'Global Portfolio Supervision',
    problem: 'You start projects but lose momentum or direction halfway through.',
    whatHappens: 'We provide the structural oversight needed to build a portfolio that stands out to US/UK recruiters.',
    leaveWith: [
      'Structured project plan',
      'Milestone breakdown',
      'Architecture direction',
      'Risk identification',
      'Clear next-step execution strategy',
      'Accountability checkpoint plan'
    ],
    outcomePositioning: 'Stop building blindly. Build for the global market.',
    who: 'Teams or individuals aiming for international roles.',
    price: '₦15,000',
  },
  {
    icon: Cpu,
    title: 'Technical Strategy & Stack',
    problem: 'You\'re worried about making costly technical mistakes or picking the wrong stack.',
    whatHappens: 'We deep-dive into your architecture to ensure it\'s robust, scalable, and efficient for modern standards.',
    leaveWith: [
      'Correct tool & stack selection',
      'Scalability advice',
      'System architecture overview',
      'Integration recommendations (APIs, AI, automation tools)',
      'Performance improvement suggestions'
    ],
    outcomePositioning: 'Avoid costly technical mistakes early.',
    who: 'Engineers building complex systems.',
    price: '₦16,000',
  },
  {
    icon: Code,
    title: 'Live Build Support',
    problem: 'You\'re stuck on a specific feature or bug that\'s halting your progress.',
    whatHappens: 'We jump into the trenches with you, writing code and solving problems in real-time. No fluff.',
    leaveWith: [
      'Code implemented during session',
      'Bugs resolved',
      'Feature completed or significantly advanced',
      'Clear explanation of what was done',
      'Independent continuation strategy'
    ],
    outcomePositioning: 'Don’t just talk — progress visibly.',
    who: 'Developers stuck on specific features.',
    price: '₦18,000',
  },
  {
    icon: Bug,
    title: 'Production Readiness Audit',
    problem: 'Your project works, but it feels "messy" or you\'re unsure of its production readiness.',
    whatHappens: 'We perform a comprehensive audit of your codebase, UX, and security to ensure it\'s deployment-ready.',
    leaveWith: [
      'Identified technical flaws',
      'Performance improvement suggestions',
      'Code optimization guidance',
      'UX improvement feedback',
      'Security & structure check',
      'Prioritized improvement checklist'
    ],
    outcomePositioning: 'Your project becomes sharper and more professional.',
    who: 'Builders ready for production.',
    price: '₦16,000',
  },
  {
    icon: BarChart3,
    title: 'Build to Earn: Revenue Strategy',
    problem: 'You\'re building great tools but have no idea how to turn them into a business.',
    whatHappens: 'We design a revenue model and go-to-market strategy tailored to your product. Focus on USD earnings.',
    leaveWith: [
      'Clear monetization model (SaaS, Freemium, etc.)',
      'Pricing strategy draft',
      'Revenue projection framework',
      'Go-to-market strategy',
      'Customer acquisition ideas',
      'Funnel structure overview'
    ],
    outcomePositioning: 'Stop building for fun. Build to earn in USD.',
    who: 'SaaS and tool builders.',
    price: '₦18,000',
  },
  {
    icon: ListChecks,
    title: 'High-Impact Accountability',
    problem: 'You\'ve lost clarity and the "why" behind your execution has faded.',
    whatHappens: 'We diagnose your bottlenecks and refocus your energy on high-impact tasks. No time wasting.',
    leaveWith: [
      'Progress review',
      'Bottleneck diagnosis',
      'Refocused execution plan',
      'Productivity framework',
      'Clear 7–14 day sprint target'
    ],
    outcomePositioning: 'Regain clarity and momentum.',
    who: 'Long-term project owners.',
    price: '₦15,000',
  },
];

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl mb-6">OUR <span className="text-brand-green">SERVICES</span></h1>
        <p className="font-mono text-sm text-zinc-500 uppercase tracking-[0.3em] max-w-2xl mb-12">
          Precision-engineered support for every stage of your build journey.
        </p>
        
        <div className="border-l-2 border-brand-green pl-8 py-4">
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
            "You don’t pay for time.<br />
            You pay for <span className="text-brand-green">clarity</span>, <span className="text-brand-green">execution</span>, and <span className="text-brand-green">momentum</span>."
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Elite Execution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-brand-green/30 shadow-neon relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Zap size={300} className="text-brand-green" />
          </div>
          
          <div className="relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
              <div>
                <div className="inline-block px-3 py-1 bg-brand-green text-black font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                  Exclusive Access // Build Mode
                </div>
                <h2 className="text-4xl md:text-7xl mb-4 uppercase">ELITE EXECUTION SESSION</h2>
                <p className="text-xl text-brand-green font-mono uppercase tracking-widest">₦20,000 | 3 Hours Intensive</p>
              </div>
              <Link 
                to={`/register?service=${encodeURIComponent('Elite Execution Session')}&price=20000`}
                className="btn-primary px-12 py-4 text-lg w-full lg:w-auto glitch-hover text-center"
              >
                Book Elite Now
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-zinc-800 pt-12">
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">The Difference</h4>
                <p className="text-white text-lg leading-relaxed">
                  This is not advisory. This is <span className="text-brand-green">build mode</span>. We don't just talk about the architecture; we implement it. Zero fluff, 100% shipping.
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">What You Walk Away With</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    'Deep architectural structure implemented',
                    'Major feature completed',
                    'Core system logic built',
                    'Real-time debugging done',
                    'Monetization model integrated',
                    'Deployment guidance',
                    'Long-term scaling advice',
                    'Strategic growth roadmap'
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-brand-green/5 border border-brand-green/20 rounded-lg">
              <p className="text-sm text-brand-green font-mono uppercase text-center tracking-widest">
                Outcome: Tangible progress that would normally take weeks alone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Standard Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col group hover:border-brand-green/50 transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Investment</p>
                  <div className="flex flex-col items-end">
                    {service.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through font-mono">{service.originalPrice}</span>
                    )}
                    <p className="text-2xl font-display text-white">{service.price}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl mb-6 uppercase tracking-tight">{service.title}</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest mb-2">The Problem</p>
                  <p className="text-sm text-zinc-400 italic">"{service.problem}"</p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest mb-2">What Happens</p>
                  <p className="text-sm text-zinc-300">{service.whatHappens}</p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest mb-2">What You Leave With</p>
                  <div className="space-y-2">
                    {service.leaveWith.map((item) => (
                      <div key={item} className="flex items-start space-x-2 text-xs text-zinc-400">
                        <CheckCircle2 size={12} className="text-brand-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/50">
                  <p className="font-mono text-[10px] uppercase text-zinc-600 tracking-widest mb-2">Who It's For</p>
                  <p className="text-xs text-white">{service.who}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-4">
                <p className="text-[10px] text-brand-green font-mono uppercase tracking-widest text-center">
                  {service.outcomePositioning}
                </p>
                <Link 
                  to={`/register?service=${encodeURIComponent(service.title)}&price=${service.price.replace(/[^0-9]/g, '')}`}
                  className="btn-primary w-full flex items-center justify-center space-x-2 py-2 text-xs glitch-hover"
                >
                  <span>Book Session</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why The New Age X? Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 py-24 border-t border-zinc-900"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6 uppercase tracking-tighter">WHY THE NEW AGE X?</h2>
            <p className="font-mono text-zinc-500 uppercase tracking-widest">The ROI of Execution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Standards",
                desc: "Stop building 'local' projects. We help you build products that look, feel, and scale like they were made in Silicon Valley."
              },
              {
                title: "Dollar Earnings",
                desc: "We don't just build for fun. We build to earn. Our monetization strategies are focused on helping you capture global value."
              },
              {
                title: "Senior Mentorship",
                desc: "Learn from execution partners who have actually shipped products to thousands of users. No theoretical fluff."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border-zinc-800/50">
                <h4 className="text-brand-green font-mono uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom / Enterprise Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-brand-green/30 bg-brand-green/5 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
                Enterprise Execution // Done-For-You
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-6 uppercase tracking-tighter">
              We Build It For You.<br />
              <span className="text-brand-green">You Lead The Vision.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From university projects to enterprise-grade apps, from AI & Blockchain integration to full research execution — our team turns your idea into a fully functional, high-quality product.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 border-zinc-800 bg-zinc-950/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="space-y-6">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">The Positioning</h4>
                <p className="text-white text-lg leading-relaxed">
                  This is not mentorship — it’s <span className="text-brand-green font-bold">execution on demand</span>. 
                  Clients get end-to-end delivery: planning → design → development → deployment → optimization.
                </p>
              </div>
              <div className="lg:col-span-2">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Ideal For</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Companies wanting apps (web, mobile, desktop)',
                    'Startups needing fintech or AI/Blockchain solutions',
                    'University or PhD researchers requiring implementation',
                    'Any serious builder who wants a done-for-you solution'
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-4 bg-white/5 border border-zinc-800 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                      <span className="text-xs text-zinc-300 uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/50">
                    <th className="p-6 uppercase tracking-widest text-zinc-500">Service Category</th>
                    <th className="p-6 uppercase tracking-widest text-zinc-500">What We Do</th>
                    <th className="p-6 uppercase tracking-widest text-zinc-500">Client Walk-Away / Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {[
                    { cat: 'Web Applications', do: 'Full-stack web app built to spec', out: 'Production-ready web solution; scalable and secure' },
                    { cat: 'Mobile Applications', do: 'Android/iOS or cross-platform', out: 'Deployable mobile app with UX/UI aligned to brand' },
                    { cat: 'Desktop Applications', do: 'Windows, Mac, or Linux apps', out: 'Ready-to-install software for desktop platforms' },
                    { cat: 'Fintech Solutions', do: 'Payment gateways, wallets, blockchain integration', out: 'Secure, compliant, and functional financial platform' },
                    { cat: 'University / PhD Projects', do: 'AI research, blockchain experiments, robotics integration', out: 'Fully developed project with documentation ready for submission' },
                    { cat: 'End-to-End Research & Prototyping', do: 'Technical research + practical execution', out: 'Complete solution with results, data insights, and working prototype' },
                  ].map((row) => (
                    <tr key={row.cat} className="hover:bg-brand-green/5 transition-colors group">
                      <td className="p-6 text-white font-bold group-hover:text-brand-green">{row.cat}</td>
                      <td className="p-6 text-zinc-400">{row.do}</td>
                      <td className="p-6 text-brand-green/80">{row.out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-800">
              <div className="max-w-xl">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Pricing Narrative</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Pricing is project-specific, factoring scope complexity, technologies involved (AI, Blockchain, Fintech, etc.), time commitment, and deployment requirements.
                </p>
                <div className="flex gap-4 mt-4 text-[10px] font-mono uppercase text-zinc-600">
                  <span>Scope</span> • <span>Tech Stack</span> • <span>Timeline</span> • <span>Maintenance</span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">Starting From</p>
                <p className="text-4xl font-display text-white mb-6">CUSTOM QUOTE</p>
                <button className="btn-primary px-12 py-4 text-lg flex items-center justify-center space-x-3 glitch-hover">
                  <span>Request Consultation</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
