import React, { useState } from 'react';
import { X, Crown, Check, ShieldCheck } from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [estateName, setEstateName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [contactName, setContactName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl border border-[#dbc0c2]/50 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f0eee8] text-[#470013] hover:bg-[#661426] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#7f5700] mb-1">
          <Crown className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Estate Membership Portfolio
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#470013]">
          The Royal Dining Crest Club
        </h3>

        <p className="text-xs text-[#554243] mt-1 mb-6">
          Privileged tier admission by peer reference, embassy credentials, or direct equerry sponsorship.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-[#f0eee8] rounded-xl p-6 border border-[#dbc0c2]/30">
            <div className="w-12 h-12 rounded-full bg-[#661426] text-[#ffdeae] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#470013]">
              Application Logged in Private Chancery
            </h4>
            <p className="text-xs text-[#554243]">
              Our Chancellor of Admissions will review your estate credentials under strict non-disclosure.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                Lordship / Principal Name
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Duke of Westminster / Ambassador"
                className="w-full bg-[#ffffff] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                  Estate Residence Name
                </label>
                <input
                  type="text"
                  required
                  value={estateName}
                  onChange={(e) => setEstateName(e.target.value)}
                  placeholder="e.g. Carlton Gardens Estate"
                  className="w-full bg-[#ffffff] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#554243] block mb-1">
                  Estate Postcode
                </label>
                <input
                  type="text"
                  required
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="e.g. SW1A 1AA"
                  className="w-full bg-[#ffffff] px-3 py-2 rounded-lg text-xs text-[#1c1c18] border border-[#dbc0c2]/40 focus:outline-none focus:border-[#7f5700]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f0eee8] space-y-2 border border-[#dbc0c2]/30">
              <div className="flex items-center gap-2 text-[#7f5700]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">
                  Guaranteed Privileges
                </span>
              </div>
              <ul className="text-xs text-[#554243] space-y-1 list-disc list-inside">
                <li>Immediate 24/7 WhatsApp Equerry Direct</li>
                <li>Guaranteed allocation from private DRC &amp; Krug cellars</li>
                <li>Exclusive master chef kitchen residencies</li>
                <li>Complimentary Christofle tableware deployment</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#470013] hover:bg-[#661426] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              Submit Confidential Membership Inquiry
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
