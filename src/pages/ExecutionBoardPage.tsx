import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Terminal, Zap, ExternalLink, MessageSquare, Twitter, Lock } from 'lucide-react';

interface Mission {
  id: string;
  category: string;
  name: string;
  description: string;
  impact: string;
  prompt: string;
}

const missions: Mission[] = [
  {
    id: '1',
    category: 'Healthcare & Wellness',
    name: 'PHC First-Response Triage',
    description: 'A simple web page where a patient types in their symptoms, and the AI outputs a categorized summary (e.g., "Normal," "See a Doctor," or "Emergency") along with basic home-care advice.',
    impact: 'Perfect for nurses at Primary Health Care (PHC) centers to pre-screen patients, saving time and prioritizing critical cases before they reach General Hospitals.',
    prompt: 'Act as a senior medical triage specialist in a Nigerian context. Create a logic for a web app where a user inputs symptoms. Output a structured JSON response with: 1) Urgency Level (Normal, Urgent, Emergency), 2) Categorized Summary, 3) 3-5 Actionable Home-care tips using locally available remedies where safe, 4) A clear "Next Step" instruction (e.g., "Visit the nearest PHC").',
  },
  {
    id: '2',
    category: 'Media, Creative Arts & Design',
    name: 'Nollywood Storyboard & Pitch Pro',
    description: 'The user inputs a basic idea for a video, graphic, or PR campaign. The AI instantly generates a scene-by-scene storyboard, camera angle suggestions, or a professional email pitch to send to a client.',
    impact: 'Helps Nigerian filmmakers and skit makers instantly turn a rough script idea into a professional storyboard to pitch to investors or brands.',
    prompt: 'You are a world-class Creative Director familiar with the Nollywood and Nigerian advertising industry. Given a rough creative concept, generate: 1) A 5-scene storyboard with visual descriptions and camera angles, 2) A professional 200-word email pitch for a high-ticket client or brand sponsor, 3) A list of 3 unique visual metaphors that resonate with Nigerian culture.',
  },
  {
    id: '3',
    category: 'Engineering, Hardware & Energy',
    name: 'Solar Load & Inverter Sizing Tool',
    description: 'A dashboard where a user inputs the appliances they want to run (e.g., 2 fans, 1 TV, 5 bulbs). The AI calculates the exact inverter size and battery capacity they need to buy.',
    impact: 'With the instability of the national grid, this helps engineers quickly calculate the exact inverter and battery capacity needed for Nigerian homes and offices.',
    prompt: 'Act as a Nigerian Renewable Energy Engineer. Create a calculation engine for a web app. Input: List of appliances, their wattage, and daily usage hours. Output: 1) Total Daily Energy Demand (kWh), 2) Required Inverter Size (kVA) with a 20% safety margin for local power surges, 3) Battery Bank Capacity (Ah) for 24h autonomy, 4) Recommended Solar Array size.',
  },
  {
    id: '4',
    category: 'Software, AI & Automation',
    name: 'Local Payment Integration Helper',
    description: 'A personalized dashboard where the user types what they want an automation to do (e.g., "Connect Gmail to Google Sheets"), and the AI generates the exact N8N webhook setup or code snippet required.',
    impact: 'Simplifies the process for Nigerian developers to generate code snippets for Paystack, Flutterwave, and automated business workflows.',
    prompt: 'You are an Automation Architect. Design a tool that takes a natural language description of a workflow (e.g., "Send a WhatsApp notification when a Paystack payment is received") and outputs: 1) The step-by-step logic, 2) The exact JSON configuration for an N8N node or a Python/Node.js code snippet, 3) A list of required API permissions.',
  },
  {
    id: '5',
    category: 'Business, Operations & Finance',
    name: 'Market Trader Inventory Predictor',
    description: 'A clean form where the store manager logs the items sold that day. The AI analyzes the list and outputs a "Restock Warning," highlighting exactly what needs to be ordered from suppliers tomorrow.',
    impact: 'Designed for SMEs and traders in markets like Alaba or Idumota to track stock and predict restock needs amidst fluctuating market prices.',
    prompt: 'Act as a Supply Chain Consultant for Nigerian SMEs. Create a restock prediction logic. Input: Daily sales log and current stock levels. Output: 1) A "Restock Warning" list for items below threshold, 2) Predicted "Out-of-Stock" dates for all items, 3) Recommended order quantities based on a 3-day supplier lead time, considering local logistics delays.',
  },
  {
    id: '6',
    category: 'Education & EdTech',
    name: 'WAEC/JAMB Lesson & Quiz Creator',
    description: 'A teacher inputs a topic (e.g., "Algebra for JSS2") and the duration of the class. The AI generates a structured 45-minute lesson plan, plus a 5-question printable quiz with an answer key.',
    impact: 'Saves Nigerian teachers hours of prep by generating lesson plans and quizzes aligned with WAEC, JAMB, and NECO standards.',
    prompt: 'You are an Expert Pedagogy Specialist familiar with the Nigerian NERDC curriculum. Given a topic and class duration, generate: 1) A timed lesson plan (Introduction, Core Content, Activity, Conclusion), 2) 3 Clear Learning Objectives aligned with WAEC/JAMB standards, 3) A 5-question multiple-choice quiz, 4) An Answer Key with brief explanations.',
  },
  {
    id: '7',
    category: 'Agriculture & Culinary Arts',
    name: 'Agro-Commodity Profit Calculator',
    description: 'A caterer or farmer inputs the current market price of their raw materials. The AI calculates exactly how much they need to charge for the final product to maintain a 30% profit margin.',
    impact: 'Prices of raw materials fluctuate daily in Nigeria due to logistics and fuel costs. This ensures business owners never sell at a loss.',
    prompt: 'Act as a Business Accountant for Nigerian small-scale producers. Create a pricing engine. Input: Cost of raw materials (e.g., bags of rice, liters of oil), labor hours, and overheads. Output: 1) Total Cost of Production, 2) Break-even Price, 3) Recommended Selling Price for 30%, 40%, and 50% profit margins, 4) A warning if the margin is too thin due to recent inflation.',
  },
  {
    id: '8',
    category: 'Writing & Communications',
    name: 'Corporate & Religious Speech Pro',
    description: 'A writer or speaker inputs their core message and the type of audience. The AI generates a 3-act speech outline, including suggestions for where to insert a personal story or a joke.',
    impact: 'A structured skeleton for public speakers, religious leaders, and corporate execs to craft powerful messages for the Nigerian audience.',
    prompt: 'You are a Professional Speechwriter for the Nigerian context. Given a core message and audience type (e.g., Church congregation, Corporate board, Youth summit), generate: 1) A 3-Act Speech Structure (Hook, The Meat, The Call to Action), 2) 3 Specific "Story Beats" that resonate locally, 3) 2 Audience Engagement prompts, 4) A powerful closing statement.',
  },
  {
    id: '9',
    category: 'Applied Sciences (Biotechnology)',
    name: 'Diagnostic Lab Protocol Summarizer',
    description: 'A student pastes a messy, complex research paper or lab manual into the app. The AI outputs a simple, step-by-step experiment checklist and highlights all safety hazards.',
    impact: 'Standardizes procedures for local diagnostic centers and university labs, making complex research actionable for Nigerian scientists.',
    prompt: 'Act as a Laboratory Safety Officer in a Nigerian research setting. Given a complex scientific protocol, output: 1) A simplified 10-step experiment checklist, 2) A "Safety First" section highlighting chemical/biological hazards, 3) Required Personal Protective Equipment (PPE) available locally, 4) Proper disposal instructions for waste materials.',
  },
];

export const ExecutionBoardPage = () => {
  const [activeTier, setActiveTier] = useState<'tier1' | 'tier2'>('tier1');
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [copied, setCopied] = useState(false);
  const [notes, setNotes] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-green/30 bg-brand-green/5 mb-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
              Mission Control // Active Operations
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-4 uppercase tracking-tighter">Execution Board</h1>
          <p className="font-mono text-zinc-500 uppercase tracking-widest max-w-2xl mx-auto">
            Select a mission. Build the solution. Join the elite.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTier('tier1')}
              className={`px-8 py-3 font-mono text-xs uppercase tracking-widest transition-all ${
                activeTier === 'tier1' 
                  ? 'bg-brand-green text-black font-bold' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Tier 1 Practice
            </button>
            <button
              onClick={() => setActiveTier('tier2')}
              className={`px-8 py-3 font-mono text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTier === 'tier2' 
                  ? 'bg-brand-green text-black font-bold' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Tier 2
              <Lock size={12} />
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTier === 'tier1' ? (
            <motion.div
              key="tier1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-8 flex flex-col justify-between group hover:border-brand-green/40 transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-green px-2 py-1 bg-brand-green/10 border border-brand-green/20">
                        {mission.category}
                      </span>
                      <Terminal size={16} className="text-zinc-700 group-hover:text-brand-green transition-colors" />
                    </div>
                    <h3 className="text-2xl mb-4 group-hover:text-brand-green transition-colors">{mission.name}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                      {mission.description}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedMission(mission)}
                    className="w-full py-4 bg-brand-green text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Zap size={14} />
                    <span>Accept This Mission</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="tier2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-32 glass-card border-dashed border-zinc-800"
            >
              <Lock size={48} className="text-zinc-700 mb-6" />
              <h3 className="text-3xl uppercase tracking-tighter mb-2">Coming Soon</h3>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                Tier 2 Advanced Missions are currently under development.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Overlay (Same as before) */}
        <AnimatePresence>
          {selectedMission && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMission(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-900/50">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-brand-green mb-1">Mission Accepted</p>
                    <h3 className="text-xl md:text-2xl uppercase tracking-tight">{selectedMission.name}</h3>
                    <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-1 italic">{selectedMission.impact}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedMission(null)}
                    className="p-2 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {/* Step 1 */}
                  <div className="mb-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-black flex items-center justify-center font-bold text-sm">1</div>
                      <h4 className="text-lg uppercase tracking-tight">The Starter Prompt</h4>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute -inset-px bg-gradient-to-r from-brand-green/20 to-transparent opacity-50" />
                      <div className="relative bg-black p-6 font-mono text-sm text-zinc-400 leading-relaxed border border-zinc-800">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-900">
                          <span className="text-[10px] text-zinc-600 uppercase">System Prompt // Industry: {selectedMission.category}</span>
                          <button 
                            onClick={() => copyToClipboard(selectedMission.prompt)}
                            className="flex items-center space-x-2 text-brand-green hover:text-white transition-colors"
                          >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            <span className="text-[10px] uppercase tracking-widest">{copied ? 'Copied' : 'Copy Prompt'}</span>
                          </button>
                        </div>
                        {selectedMission.prompt}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest flex items-center">
                        <ExternalLink size={10} className="mr-2" />
                        Paste this into Google AI Studio to begin building.
                      </p>
                      <a 
                        href="https://aistudio.google.com/apps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[10px] uppercase tracking-widest flex items-center transition-colors"
                      >
                        <ExternalLink size={12} className="mr-2" />
                        Open AI Studio
                      </a>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-black flex items-center justify-center font-bold text-sm">2</div>
                      <h4 className="text-lg uppercase tracking-tight">Prepare for the Summit</h4>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="glass-card p-6 border-brand-green/10 bg-brand-green/5">
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          <span className="text-white font-bold">Next Step:</span> Paste this prompt into your AI builder. Test the output. If you get stuck or want to know how to deploy this to the web, write down your exact errors right now. Bring these questions to our Live Q&A session so we can debug it together.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Mission Notes / Error Logs</label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Type your errors or questions here..."
                          className="w-full h-32 bg-black border border-zinc-800 p-4 text-zinc-300 text-sm focus:border-brand-green outline-none transition-colors resize-none font-mono"
                        />
                        <p className="text-[10px] text-zinc-700 font-mono uppercase">Notes are saved locally in your browser session.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mt-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-black flex items-center justify-center font-bold text-sm">3</div>
                      <h4 className="text-lg uppercase tracking-tight">Broadcast Your Win</h4>
                    </div>
                    
                    <div className="glass-card p-6 border-brand-green/10 bg-brand-green/5 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex-1">
                        <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                          Built something impressive? Share your progress with the community and inspire others.
                        </p>
                        <p className="text-brand-green font-mono text-xs uppercase tracking-widest">
                          #BuildWithGeminiNG #GoogleAIStudioNigeria
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          const text = encodeURIComponent(`I just accepted the "${selectedMission.name}" mission on the Google AI Studio Nigeria Execution Board! 🚀\n\nBuilding solutions for ${selectedMission.category} using Gemini. #BuildWithGeminiNG #GoogleAIStudioNigeria`);
                          window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
                        }}
                        className="whitespace-nowrap px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[10px] uppercase tracking-widest flex items-center transition-colors border border-zinc-700"
                      >
                        <Twitter size={14} className="mr-2" />
                        Share on X
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-zinc-900 bg-zinc-900/30 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setSelectedMission(null)}
                    className="flex-1 py-4 border border-zinc-800 text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all"
                  >
                    Close Mission
                  </button>
                  <a 
                    href="https://wa.me/2348123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 border border-brand-green/30 text-brand-green font-bold uppercase tracking-widest text-xs hover:bg-brand-green/10 transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <MessageSquare size={14} />
                    <span>Reach Lead Supervision</span>
                  </a>
                  <a 
                    href="/register"
                    className="flex-1 py-4 bg-brand-green text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all text-center"
                  >
                    Join the Q&A Session
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
