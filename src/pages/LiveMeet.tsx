import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Users, Shield, Share2, Radio, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const LiveMeet = () => {
  const [step, setStep] = useState<'welcome' | 'link'>('welcome');
  const meetUrl = 'https://meet.google.com/qbn-whky-ans';

  const handleContinue = () => {
    setStep('link');
  };

  const handleJoin = () => {
    window.open(meetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(meetUrl);
    alert('Meeting link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 blur-[120px] rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        {step === 'welcome' ? (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl w-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-12 text-center space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Sparkles className="text-brand-green" size={32} />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-display text-white tracking-tight leading-tight">
                WELCOME TO <br />
                <span className="text-brand-green">THE LIVE BUILD SUMMIT</span>
              </h1>
              
              <p className="text-zinc-400 font-mono text-sm uppercase tracking-[0.2em] max-w-md mx-auto leading-relaxed">
                Architecting Ideas to Solution
              </p>
            </div>

            <div className="pt-8">
              <button 
                onClick={handleContinue}
                className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-brand-green text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all overflow-hidden"
              >
                <span>Continue to Meeting</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-12 border-t border-zinc-800/50 flex justify-center space-x-8">
              <div className="flex items-center space-x-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                <Shield size={12} />
                <span>Secure Access</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                <Users size={12} />
                <span>Collaborative Space</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="link"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-10 space-y-8 relative z-10"
          >
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center">
                  <Video className="text-brand-green" size={28} />
                </div>
              </div>
              <h2 className="text-2xl font-display text-white tracking-tight uppercase">Access Mission Control</h2>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Google Meet Integration</p>
            </div>

            <div className="space-y-4">
              <div className="bg-black border border-zinc-800 p-4 rounded-sm flex items-center justify-between group">
                <code className="text-brand-green font-mono text-xs truncate mr-4">
                  qbn-whky-ans
                </code>
                <button 
                  onClick={handleCopyLink}
                  className="text-zinc-500 hover:text-white transition-colors"
                  title="Copy Link"
                >
                  <Share2 size={16} />
                </button>
              </div>

              <button 
                onClick={handleJoin}
                className="w-full py-5 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-green transition-all flex items-center justify-center space-x-3"
              >
                <span>Join Google Meet</span>
                <ExternalLink size={16} />
              </button>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <p className="text-[10px] text-zinc-500 font-mono text-center leading-relaxed uppercase tracking-widest">
                Please ensure your camera and microphone are ready before joining the transmission.
              </p>
              
              <button 
                onClick={() => setStep('welcome')}
                className="w-full text-zinc-600 hover:text-zinc-400 font-mono text-[10px] uppercase tracking-widest transition-colors"
              >
                ← Back to Welcome
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
