import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Mission Control', path: '/' },
  { name: 'Execution Board', path: '/execution-board' },
  { name: 'Live Meet', path: '/live-meet' },
  { name: 'Membership', path: '/membership' },
  { name: 'Services', path: '/services' },
  { name: 'Philosophy', path: '/about' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="w-10 h-10 text-brand-green group-hover:scale-110 transition-transform" />
            <span className="font-display text-2xl text-white tracking-tighter">
              THE NEW AGE <span className="text-brand-green">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-colors hover:text-brand-green",
                  location.pathname === link.path ? "text-brand-green" : "text-zinc-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register" className="btn-primary py-2 px-4 text-xs">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-zinc-800 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block font-mono text-sm uppercase tracking-widest py-2",
                location.pathname === link.path ? "text-brand-green" : "text-zinc-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="btn-primary block text-center"
          >
            Join Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
