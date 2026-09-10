import React, { useState, useEffect } from 'react';
import {
  Heart,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users,
  QrCode,
  Download,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WeddingData } from '../types';
import { FloralDivider } from './FloralMotifs';

interface RSVPFormProps {
  weddingData: WeddingData;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ weddingData }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState<'both' | 'mehndi' | 'barat' | 'declined'>('both');
  const [guestsCount, setGuestsCount] = useState(2);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('my_simple_wedding_rsvp');
      if (saved) {
        const parsed = JSON.parse(saved);
        setName(parsed.name || '');
        setPhone(parsed.phone || '');
        setAttending(parsed.attending || 'both');
        setGuestsCount(parsed.guestsCount || 2);
        setIsSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const submission = {
      name,
      phone,
      attending,
      guestsCount: attending === 'declined' ? 0 : guestsCount,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem('my_simple_wedding_rsvp', JSON.stringify(submission));
      // Trigger celebration confetti
      if (attending !== 'declined') {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E87722', '#C89B3C', '#609888', '#FAF7F2'],
        });
      }
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-12 md:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722]/10 text-[#E87722] text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#E87722]" />
            <span>Kindly Respond</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
            RSVP Invitation
          </h2>
          <p className="text-xs sm:text-sm text-[#5A534B] mt-1">
            Please let the family know if you can join us by October 10th, 2026.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation Pass Card */
          <div className="bg-[#FFFDF9] border-2 border-[#C89B3C]/50 rounded-3xl p-6 sm:p-8 shadow-lg text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#609888]/20 text-[#2D5D4E] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E87722]">
              Digital Guest Pass
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2D2A26] mt-1">
              Thank You, {name}!
            </h3>

            <p className="text-xs text-[#5A534B] mt-1 mb-4">
              {attending === 'declined'
                ? 'We will miss you dearly and appreciate your warm thoughts and prayers.'
                : `Your RSVP for ${guestsCount} guest(s) has been recorded with the host family.`}
            </p>

            {attending !== 'declined' && (
              <div className="max-w-xs mx-auto p-4 rounded-2xl bg-[#FFF8EE] border border-[#E87722]/30 text-xs text-left space-y-2 mb-4">
                <div className="flex justify-between border-b border-[#E87722]/15 pb-1.5">
                  <span className="text-[#7C756B]">Attending:</span>
                  <span className="font-bold text-[#E87722] capitalize">
                    {attending === 'both' ? 'Mehndi & Barat' : `${attending} Only`}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#E87722]/15 pb-1.5">
                  <span className="text-[#7C756B]">Party Size:</span>
                  <span className="font-bold text-[#2D2A26]">{guestsCount} Person(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C756B]">Host:</span>
                  <span className="font-medium text-[#2D2A26]">Mahmood Family</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-[#7C756B] hover:text-[#2D2A26] underline font-medium"
            >
              Update or Edit My RSVP
            </button>
          </div>
        ) : (
          /* Simple Clean Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFFDF9] border-2 border-[#C89B3C]/35 rounded-3xl p-6 sm:p-8 shadow-md space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Salman Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#C89B3C]/40 bg-white focus:outline-none focus:border-[#E87722]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1">
                Mobile Number (for updates)
              </label>
              <input
                type="tel"
                placeholder="e.g. +92 300 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#C89B3C]/40 bg-white focus:outline-none focus:border-[#E87722]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1.5">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: 'both', label: 'Both Events' },
                  { key: 'mehndi', label: 'Mehndi Only' },
                  { key: 'barat', label: 'Barat Only' },
                  { key: 'declined', label: 'Can\'t Attend' },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setAttending(opt.key as any)}
                    className={`py-2 px-2 rounded-xl border text-xs font-semibold transition-all ${
                      attending === opt.key
                        ? 'bg-[#9A721C] text-white border-[#9A721C]'
                        : 'bg-white text-[#5A534B] border-[#C89B3C]/30 hover:border-[#9A721C]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {attending !== 'declined' && (
              <div>
                <label className="block text-xs font-semibold text-[#2D2A26] mb-1">
                  Total Guests Attending
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`w-9 h-9 rounded-xl border text-xs font-bold transition-all ${
                        guestsCount === num
                          ? 'bg-[#E87722] text-white border-[#E87722]'
                          : 'bg-white text-[#5A534B] border-[#C89B3C]/30 hover:bg-[#FAF7F2]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-xs text-[#7C756B]">person(s)</span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1">
                Warm Wish or Note for Bride & Groom
              </label>
              <textarea
                rows={2}
                placeholder="May Allah bless this union with infinite joy..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#C89B3C]/40 bg-white focus:outline-none focus:border-[#E87722]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#E87722] hover:bg-[#D46B18] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Confirm RSVP Response</span>
            </button>
          </form>
        )}

        <FloralDivider className="my-8" />
      </div>
    </section>
  );
};
