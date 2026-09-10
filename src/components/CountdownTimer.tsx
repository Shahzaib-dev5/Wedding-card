import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { WeddingData } from '../types';
import { FloralDivider } from './FloralMotifs';

interface CountdownTimerProps {
  weddingData: WeddingData;
  onOpenCalendarModal: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  weddingData,
  onOpenCalendarModal,
}) => {
  const [activeEvent, setActiveEvent] = useState<'mehndi' | 'barat'>('mehndi');
  const targetEvent = weddingData.events[activeEvent];

  const calculateTime = (targetIso: string): TimeRemaining => {
    const diff = new Date(targetIso).getTime() - new Date().getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() =>
    calculateTime(targetEvent.date)
  );

  useEffect(() => {
    setTimeLeft(calculateTime(targetEvent.date));
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(targetEvent.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [activeEvent, targetEvent.date]);

  return (
    <section id="countdown" className="py-12 bg-[#F5EFEB]/70 relative border-y border-[#C89B3C]/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722]/10 text-[#E87722] text-xs font-semibold uppercase tracking-wider mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>Wedding Countdown</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26] mb-4">
          Counting Down The Blessed Days
        </h2>

        {/* Event Switcher */}
        <div className="inline-flex p-1 rounded-full bg-[#FAF7F2] border border-[#C89B3C]/30 shadow-xs mb-6">
          <button
            onClick={() => setActiveEvent('mehndi')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeEvent === 'mehndi'
                ? 'bg-[#E87722] text-white shadow-xs'
                : 'text-[#5A534B] hover:text-[#E87722]'
            }`}
          >
            Mehndi (Oct 23)
          </button>
          <button
            onClick={() => setActiveEvent('barat')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeEvent === 'barat'
                ? 'bg-[#9A721C] text-white shadow-xs'
                : 'text-[#5A534B] hover:text-[#9A721C]'
            }`}
          >
            Barat (Oct 25)
          </button>
        </div>

        {/* 4 Numbers Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto mb-6">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-[#FAF7F2] border border-[#C89B3C]/35 shadow-xs flex flex-col items-center justify-center"
            >
              <span className="text-2xl sm:text-4xl font-serif font-bold text-[#9A721C] tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#7C756B] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenCalendarModal}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-white text-[#9A721C] border border-[#C89B3C]/40 text-xs font-semibold shadow-xs transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Add to Calendar / Save the Date</span>
        </button>
      </div>
    </section>
  );
};
