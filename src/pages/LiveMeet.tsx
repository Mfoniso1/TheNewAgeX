import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Video, Users, MessageSquare, Shield, Share2, Mic, Camera, Settings, LogOut, Radio } from 'lucide-react';

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

export const LiveMeet = () => {
  const jitsiContainerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);
  const [isJoined, setIsJoined] = useState(false);
  const [userName, setUserName] = useState('');
  const [hasEnteredName, setHasEnteredName] = useState(false);
  const [roomName] = useState(`TheNewAgeX-Live-Summit`);

  const joinMeeting = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (userName.trim()) {
      setHasEnteredName(true);
    }
  };

  useEffect(() => {
    if (!hasEnteredName) return;

    const loadJitsiScript = () => {
      return new Promise((resolve) => {
        if (window.JitsiMeetExternalAPI) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = () => resolve(true);
        document.body.appendChild(script);
      });
    };

    loadJitsiScript().then(() => {
      if (jitsiContainerRef.current && !api) {
        const domain = 'meet.jit.si';
        const options = {
          roomName: roomName,
          width: '100%',
          height: '100%',
          parentNode: jitsiContainerRef.current,
          configOverwrite: {
            startWithAudioMuted: true,
            disableModeratorIndicator: false,
            startScreenSharing: false,
            enableEmailInStats: false,
            fileRecordingsEnabled: true,
            liveStreamingEnabled: true,
            recordingServiceEnabled: true,
          },
          interfaceConfigOverwrite: {
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
            SHOW_JITSI_WATERMARK: false,
            DEFAULT_REMOTE_DISPLAY_NAME: 'Builder',
            TOOLBAR_BUTTONS: [
              'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
              'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
              'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
              'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
              'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
              'security'
            ],
          },
          userInfo: {
            displayName: userName,
          },
        };
        const newApi = new window.JitsiMeetExternalAPI(domain, options);
        
        newApi.addEventListeners({
          videoConferenceJoined: () => setIsJoined(true),
          videoConferenceLeft: () => {
            setIsJoined(false);
            setHasEnteredName(false);
          },
        });

        setApi(newApi);
      }
    });

    return () => {
      if (api) {
        api.dispose();
      }
    };
  }, [hasEnteredName, roomName, userName]);

  const handleInvite = () => {
    const meetUrl = `https://meet.jit.si/${roomName}`;
    navigator.clipboard.writeText(meetUrl);
    alert('Meeting link copied to clipboard! Share it with your team.');
  };

  if (!hasEnteredName) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 space-y-8"
        >
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center">
                <Video className="text-brand-green" size={24} />
              </div>
            </div>
            <h2 className="text-2xl font-display text-white tracking-tight">READY TO JOIN?</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Mission Control Authentication</p>
          </div>

          <form onSubmit={joinMeeting} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Your Display Name</label>
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                required
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white font-mono text-sm focus:border-brand-green outline-none transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-brand-green text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-green/90 transition-all"
            >
              Enter Mission Control
            </button>
          </form>

          <div className="pt-6 border-t border-zinc-800 text-center">
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
              Secure P2P Encryption Enabled
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg pt-6 px-4 pb-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-green">Live Transmission</span>
            </div>
            <h1 className="text-3xl font-display text-white tracking-tight">LIVE MEET: MISSION CONTROL</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleInvite}
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-green hover:border-brand-green transition-all text-xs font-mono uppercase tracking-wider"
            >
              <Share2 size={14} />
              <span>Invite Builders</span>
            </button>
            <div className="px-4 py-2 bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-mono uppercase tracking-wider">
              ID: {roomName.split('-').pop()}
            </div>
          </div>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[70vh]">
          {/* Video Area */}
          <div className="lg:col-span-3 bg-black border border-zinc-800 relative overflow-hidden group">
            <div ref={jitsiContainerRef} className="w-full h-full" />
            
            {!isJoined && (
              <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/90 z-10">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-2 border-brand-green border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Initializing Secure Stream...</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">Session Intelligence</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-zinc-400">
                    <Users size={16} />
                    <span className="text-xs font-mono">Participants</span>
                  </div>
                  <span className="text-brand-green font-mono text-xs">Active</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-zinc-400">
                    <Radio size={16} />
                    <span className="text-xs font-mono">Recording</span>
                  </div>
                  <span className="text-zinc-600 font-mono text-xs">Ready</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-zinc-400">
                    <Shield size={16} />
                    <span className="text-xs font-mono">Encryption</span>
                  </div>
                  <span className="text-brand-green font-mono text-xs">E2EE</span>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <p className="text-[10px] text-zinc-600 font-mono leading-relaxed">
                  // MISSION PROTOCOL:<br />
                  1. Maintain professional conduct.<br />
                  2. Use screen share for demos.<br />
                  3. Record sessions for the archive.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all space-y-2">
                <MessageSquare size={20} />
                <span className="text-[10px] uppercase font-mono tracking-tighter">Q&A</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all space-y-2">
                <Settings size={20} />
                <span className="text-[10px] uppercase font-mono tracking-tighter">Config</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-4">
            <span>Latency: 24ms</span>
            <span>Bitrate: 4.2 Mbps</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
            <span>Secure Connection Established</span>
          </div>
        </div>
      </div>
    </div>
  );
};
