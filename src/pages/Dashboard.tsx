import React from 'react';
import { LayoutDashboard, BookOpen, TrendingUp, Bell, Settings, LogOut, Terminal } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="glass-card p-6 space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 bg-brand-green/10 text-brand-green border border-brand-green/20">
              <LayoutDashboard size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">Overview</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 text-zinc-500 hover:bg-white/5 transition-colors">
              <BookOpen size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">Sessions</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 text-zinc-500 hover:bg-white/5 transition-colors">
              <TrendingUp size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">Milestones</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 text-zinc-500 hover:bg-white/5 transition-colors">
              <Bell size={18} />
              <span className="font-mono text-xs uppercase tracking-widest">Updates</span>
            </button>
            <div className="pt-4 mt-4 border-t border-zinc-800">
              <button className="w-full flex items-center space-x-3 p-3 text-zinc-500 hover:bg-white/5 transition-colors">
                <Settings size={18} />
                <span className="font-mono text-xs uppercase tracking-widest">Settings</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-red-500/50 hover:text-red-500 hover:bg-red-500/5 transition-colors">
                <LogOut size={18} />
                <span className="font-mono text-xs uppercase tracking-widest">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl mb-2">COMMAND CENTER</h1>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">User: BUILDER_042 // Level: Standard</p>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
              Last Sync: 2026-02-23 03:56:09
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <p className="font-mono text-[10px] uppercase text-zinc-500 mb-4">Booked Sessions</p>
              <p className="text-4xl font-display text-white">03</p>
            </div>
            <div className="glass-card p-6">
              <p className="font-mono text-[10px] uppercase text-zinc-500 mb-4">Active Projects</p>
              <p className="text-4xl font-display text-white">01</p>
            </div>
            <div className="glass-card p-6">
              <p className="font-mono text-[10px] uppercase text-zinc-500 mb-4">Milestones Met</p>
              <p className="text-4xl font-display text-brand-green">12</p>
            </div>
          </div>

          {/* Placeholder Content */}
          <div className="glass-card p-12 flex flex-col items-center justify-center text-center border-dashed border-zinc-800">
            <Terminal size={48} className="text-zinc-800 mb-6" />
            <h3 className="text-2xl mb-4 text-zinc-600">NO ACTIVE SESSIONS</h3>
            <p className="text-zinc-700 max-w-sm mb-8">
              You haven't booked any execution sessions yet. Start your journey by booking a Technical Strategy session.
            </p>
            <button className="btn-outline">Book First Session</button>
          </div>
        </main>
      </div>
    </div>
  );
};
