import React, { useState } from 'react';
import { Heart, MessageSquareHeart, Send } from 'lucide-react';
import { GuestbookEntry } from '../types';
import { FloralDivider } from './FloralMotifs';

interface GuestbookWishesProps {
  entries: GuestbookEntry[];
  onAddWish: (entry: GuestbookEntry) => void;
}

export const GuestbookWishes: React.FC<GuestbookWishesProps> = ({ entries, onAddWish }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `wish-${Date.now()}`,
      name,
      relation: 'Well-wisher',
      message,
      timestamp: 'Just now',
      event: 'General',
    };

    onAddWish(newEntry);
    setName('');
    setMessage('');
  };

  return (
    <section id="wishes" className="py-12 md:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722]/10 text-[#E87722] text-xs font-semibold uppercase tracking-wider mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Prayers & Duas</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26]">
            Blessings for the Couple
          </h2>
          <p className="text-xs sm:text-sm text-[#5A534B] mt-1">
            Leave a loving prayer or dua for Aiman & Daniyal.
          </p>
        </div>

        {/* Form to leave wish */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFDF9] border-2 border-[#C89B3C]/35 rounded-3xl p-5 shadow-xs mb-6 space-y-3"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3.5 py-2 text-xs rounded-xl border border-[#C89B3C]/40 bg-white focus:outline-none focus:border-[#E87722]"
            />
            <button
              type="submit"
              className="py-2 px-4 rounded-xl bg-[#9A721C] hover:bg-[#78530C] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Dua / Blessing</span>
            </button>
          </div>
          <textarea
            required
            rows={2}
            placeholder="BarakAllahu lakuma wa baraka alaykuma..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#C89B3C]/40 bg-white focus:outline-none focus:border-[#E87722]"
          />
        </form>

        {/* Display Wishes */}
        <div className="space-y-3">
          {entries.slice(0, 3).map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#C89B3C]/25 text-xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-bold text-sm text-[#2D2A26]">{entry.name}</span>
                <span className="text-[10px] text-[#7C756B]">{entry.timestamp}</span>
              </div>
              <p className="font-serif italic text-[#4A453E]">"{entry.message}"</p>
            </div>
          ))}
        </div>

        <FloralDivider className="my-8" />
      </div>
    </section>
  );
};
