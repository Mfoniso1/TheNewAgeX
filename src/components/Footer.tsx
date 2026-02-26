import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-zinc-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-6 h-6 text-brand-green" />
            <span className="font-display text-xl text-white tracking-tighter">
              THE NEW AGE <span className="text-brand-green">X</span>
            </span>
          </Link>
          <p className="text-sm text-zinc-500 max-w-xs">
            A high-performance execution ecosystem for the next generation of builders.
            We build. We ship. We earn.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-green transition-colors">Mission Control</Link></li>
            <li><Link to="/membership" className="hover:text-brand-green transition-colors">Membership</Link></li>
            <li><Link to="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-green transition-colors">Philosophy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Community</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-green transition-colors">WhatsApp Group</a></li>
            <li><a href="#" className="hover:text-brand-green transition-colors">Discord Server</a></li>
            <li><a href="#" className="hover:text-brand-green transition-colors">Events Calendar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-brand-green hover:text-brand-green transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-brand-green hover:text-brand-green transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-brand-green hover:text-brand-green transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
        <p>© 2026 THE NEW AGE X. ALL RIGHTS RESERVED.</p>
        <p>SYSTEM STATUS: <span className="text-brand-green">OPERATIONAL</span></p>
      </div>
    </footer>
  );
};
