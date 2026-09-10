import React, { useState } from 'react';
import { X, Check, RotateCcw, Sliders, Sparkles } from 'lucide-react';
import { WeddingData } from '../types';

interface FamilyCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  weddingData: WeddingData;
  onSave: (updated: WeddingData) => void;
  onReset: () => void;
}

export const FamilyCustomizerModal: React.FC<FamilyCustomizerModalProps> = ({
  isOpen,
  onClose,
  weddingData,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<WeddingData>(weddingData);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border-2 border-[#C89B3C]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5A534B] hover:text-[#2D2A26] p-1.5 rounded-full hover:bg-[#C89B3C]/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 border-b border-[#C89B3C]/20 pb-4">
          <div className="flex items-center gap-2 text-[#9A721C] mb-1">
            <Sliders className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Family Personalization Studio
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">
            Customize Invitation Names & Dates
          </h3>
          <p className="text-xs text-[#5A534B] mt-0.5">
            Personalize the invitation for your family. All changes will instantly update the countdown timer, ceremony timeline, and RSVP pass.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
          {/* Couple & Parents Section */}
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#C89B3C]/30 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#9A721C]">
              1. The Couple & Host Parents (Girl's Side)
            </h4>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Bride's First Name
                </label>
                <input
                  type="text"
                  value={formData.bride.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bride: { ...formData.bride, name: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Groom's First Name
                </label>
                <input
                  type="text"
                  value={formData.groom.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      groom: { ...formData.groom, name: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#2D2A26] mb-1">
                Bride's Parents (Inviting Hosts)
              </label>
              <input
                type="text"
                value={formData.hosts.parentsNames}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hosts: { ...formData.hosts, parentsNames: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Wedding Hashtag
                </label>
                <input
                  type="text"
                  value={formData.hashtag}
                  onChange={(e) =>
                    setFormData({ ...formData, hashtag: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) =>
                    setFormData({ ...formData, tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Mehndi Event Details */}
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#E87722]/30 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#E87722]">
              2. Mehndi Celebration Details
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Mehndi Date (ISO / YYYY-MM-DDTHH:MM)
                </label>
                <input
                  type="text"
                  value={formData.events.mehndi.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      events: {
                        ...formData.events,
                        mehndi: { ...formData.events.mehndi, date: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E87722]/40 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Mehndi Venue Name
                </label>
                <input
                  type="text"
                  value={formData.events.mehndi.venueName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      events: {
                        ...formData.events,
                        mehndi: { ...formData.events.mehndi, venueName: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#E87722]/40 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Barat Event Details */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C89B3C]/40 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#9A721C]">
              3. Barat Ceremony Details
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Barat Date (ISO / YYYY-MM-DDTHH:MM)
                </label>
                <input
                  type="text"
                  value={formData.events.barat.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      events: {
                        ...formData.events,
                        barat: { ...formData.events.barat, date: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">
                  Barat Venue Name
                </label>
                <input
                  type="text"
                  value={formData.events.barat.venueName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      events: {
                        ...formData.events,
                        barat: { ...formData.events.barat, venueName: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#C89B3C]/40 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[#C89B3C]/20">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-gray-500 hover:bg-gray-100 font-semibold"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#9A721C] hover:bg-[#78530C] text-white font-bold flex items-center gap-1.5 shadow-xs"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Save Invitation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
