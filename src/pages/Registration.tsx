import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Calendar, MessageCircle, Share2, Twitter, ArrowLeft, Loader2, Copy, Upload, Check, FileText } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { sheetDB } from '@/src/services/sheetDB';

type Step = 'details' | 'payment' | 'success';

export const Registration = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [receipt, setReceipt] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const serviceName = searchParams.get('service') || 'Summit Waitlist';
  const servicePrice = searchParams.get('price') || '10000';
  const displayPrice = `₦${Number(servicePrice).toLocaleString()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText('8152104849');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size too large (max 5MB)');
        return;
      }
      setReceipt(file);
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setReceiptPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receipt) {
      setError('Please upload your payment receipt');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      const result = await sheetDB.register({ 
        ...formData, 
        service: serviceName,
        price: displayPrice,
        receiptName: receipt.name 
      });
      if (result.success) {
        setStep('success');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 'success') {
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
          <h1 className="text-4xl md:text-6xl mb-4 uppercase tracking-tighter">REGISTRATION RECEIVED.</h1>
          <p className="font-mono text-zinc-500 uppercase tracking-widest mb-6">Payment Verification in Progress</p>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg mb-12 text-left">
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Once we have verified your payment, we shall send a confirmation mail to your email address. 
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We will also reach out via the WhatsApp number you provided with the next steps.
            </p>
          </div>
          
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
            <h1 className="text-5xl md:text-7xl mb-6 uppercase tracking-tighter">
              {serviceName === 'Summit Waitlist' ? (
                <>JOIN THE<br /><span className="text-brand-green">SUMMIT</span> WAITLIST</>
              ) : (
                <>BOOK YOUR<br /><span className="text-brand-green">{serviceName}</span></>
              )}
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              {serviceName === 'Summit Waitlist' 
                ? 'Secure your spot for the monthly Live Build Summit series (March – December).'
                : `Secure your session for ${serviceName}.`} Registration requires a commitment fee of <span className="text-brand-green font-bold">{displayPrice}</span>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0 font-mono">01</div>
              <div>
                <h4 className="text-white uppercase mb-1 tracking-tight">Priority Access</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Waitlist members get first dibs on limited spots for each monthly session.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0 font-mono">02</div>
              <div>
                <h4 className="text-white uppercase mb-1 tracking-tight">Resource Vault</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Immediate access to previous session recordings and build templates.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-brand-green shrink-0 font-mono">03</div>
              <div>
                <h4 className="text-white uppercase mb-1 tracking-tight">Commitment Fee</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">The ₦10k fee ensures we only have serious builders in the room.</p>
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
              <h3 className="text-2xl uppercase tracking-tighter">
                {step === 'details' ? 'Registration Details' : 'Payment Verification'}
              </h3>
              <div className="px-3 py-1 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-[10px] uppercase tracking-widest">
                {displayPrice}
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {step === 'details' ? (
                <motion.form
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleDetailsSubmit}
                  className="space-y-6"
                >
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

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">WhatsApp Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+234..."
                      className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white font-mono focus:border-brand-green outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2 glitch-hover"
                  >
                    <span>Proceed to Payment</span>
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleFinalSubmit}
                  className="space-y-8"
                >
                  <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] uppercase text-zinc-500">Bank Name</span>
                      <span className="text-white font-bold uppercase tracking-wider">Opay</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] uppercase text-zinc-500">Account Number</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-mono font-bold">8152104849</span>
                        <button 
                          type="button"
                          onClick={handleCopy}
                          className="p-1 hover:text-brand-green transition-colors"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] uppercase text-zinc-500">Account Name</span>
                      <span className="text-white font-bold uppercase tracking-wider">Mfoniso Akpatang</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">Upload Payment Receipt</label>
                    
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed transition-all cursor-pointer p-8 text-center rounded-lg ${
                        receipt ? 'border-brand-green bg-brand-green/5' : 'border-zinc-800 hover:border-brand-green/50 bg-zinc-900/30'
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        className="hidden"
                      />
                      
                      {receipt ? (
                        <div className="space-y-2">
                          <div className="w-12 h-12 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto">
                            <FileText size={24} />
                          </div>
                          <p className="text-sm text-white font-mono truncate max-w-[200px] mx-auto">{receipt.name}</p>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setReceipt(null);
                              setReceiptPreview(null);
                            }}
                            className="text-[10px] text-red-500 uppercase font-mono hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="w-12 h-12 bg-zinc-800 text-zinc-500 rounded-full flex items-center justify-center mx-auto">
                            <Upload size={24} />
                          </div>
                          <p className="text-xs text-zinc-400 font-mono">Click to upload screenshot or PDF</p>
                          <p className="text-[10px] text-zinc-600 font-mono uppercase">Max size: 5MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {error && <p className="text-red-500 font-mono text-xs uppercase">{error}</p>}

                  <div className="p-4 bg-brand-green/5 border border-brand-green/20 rounded-lg">
                    <p className="text-[10px] text-brand-green font-mono uppercase text-center tracking-widest">
                      Note: You will receive an email to confirm your payment once verified.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep('details')}
                      className="btn-outline flex-1 py-4 text-xs flex items-center justify-center space-x-2"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      disabled={isLoading || !receipt}
                      type="submit"
                      className="btn-primary flex-[2] py-4 text-xs flex items-center justify-center space-x-2 glitch-hover disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle size={18} />
                          <span>Complete Registration</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-8 font-mono text-[10px] text-zinc-600 uppercase text-center tracking-widest leading-relaxed">
              By registering, you agree to our community guidelines and execution-first philosophy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
