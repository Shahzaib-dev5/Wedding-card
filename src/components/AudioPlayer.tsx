import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  triggerPlay?: boolean;
}

/**
 * Ambient Traditional Sitar & Santoor Audio Synth
 * Uses the Web Audio API to synthesize a serene, meditative Indian/Pakistani wedding raga melody
 * (Raag Yaman / Bhupali harmonics: D, E, F#, A, B)
 * Completely self-contained, no external audio loading issues or expired URLs!
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ triggerPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(0.25);
  const [isMuted, setIsMuted] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  // Notes in Raag Yaman / Bhupali (D major pentatonic / Kalyan scale notes in Hz)
  const notes = [
    293.66, // D4
    329.63, // E4
    369.99, // F#4
    440.0,  // A4
    493.88, // B4
    587.33, // D5
    659.25, // E5
    739.99, // F#5
    880.0,  // A5
  ];

  const playNote = (freq: number, duration: number, delay = 0) => {
    if (!audioCtxRef.current || !gainNodeRef.current || isMuted) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime + delay;

    // Dual oscillator for rich resonant sitar/santoor string warmth
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now);

    // Pluck envelope (fast attack, gentle resonant decay like a sitar/santoor string)
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.18, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
  };

  const startMelody = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (!gainNodeRef.current) {
        gainNodeRef.current = audioCtxRef.current.createGain();
        gainNodeRef.current.gain.value = volume;
        gainNodeRef.current.connect(audioCtxRef.current.destination);
      }

      // Play continuous serene arpeggios
      const phrase = [
        { note: notes[0], dur: 1.2, delay: 0 },
        { note: notes[1], dur: 0.8, delay: 0.5 },
        { note: notes[2], dur: 1.0, delay: 1.0 },
        { note: notes[3], dur: 1.4, delay: 1.6 },
        { note: notes[4], dur: 0.9, delay: 2.2 },
        { note: notes[5], dur: 2.0, delay: 2.8 },
        { note: notes[4], dur: 0.8, delay: 4.2 },
        { note: notes[3], dur: 1.0, delay: 4.8 },
        { note: notes[2], dur: 1.2, delay: 5.4 },
        { note: notes[1], dur: 1.4, delay: 6.2 },
        { note: notes[0], dur: 2.5, delay: 7.0 },
      ];

      const playPhrase = () => {
        phrase.forEach((item) => {
          playNote(item.note, item.dur, item.delay);
        });

        timerRef.current = window.setTimeout(playPhrase, 9500);
      };

      playPhrase();
    } catch {
      // Audio autoplay restrictions
    }
  };

  const stopMelody = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMelody();
      setIsPlaying(false);
    } else {
      startMelody();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current) {
      if (isMuted) {
        gainNodeRef.current.gain.value = volume;
        setIsMuted(false);
      } else {
        gainNodeRef.current.gain.value = 0;
        setIsMuted(true);
      }
    } else {
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (triggerPlay && !isPlaying) {
      startMelody();
      setIsPlaying(true);
    }
  }, [triggerPlay]);

  useEffect(() => {
    return () => {
      stopMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div
      id="wedding-ambient-player"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#C89B3C]/40 shadow-lg text-[#2D2A26] transition-all hover:border-[#C89B3C]"
    >
      <button
        id="btn-toggle-wedding-music"
        onClick={togglePlay}
        className="flex items-center gap-2 text-xs font-medium text-[#9A721C] hover:text-[#E87722] transition-colors focus:outline-none"
        title={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      >
        <span className="relative flex h-2.5 w-2.5">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87722] opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-[#E87722]' : 'bg-[#C89B3C]/50'}`}></span>
        </span>
        {isPlaying ? (
          <span className="flex items-center gap-1">
            <Pause className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Music Playing</span>
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Play className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Festive Music</span>
          </span>
        )}
      </button>

      {isPlaying && (
        <button
          id="btn-mute-wedding-music"
          onClick={toggleMute}
          className="text-[#9A721C] hover:text-[#E87722] p-1 rounded-full transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};
