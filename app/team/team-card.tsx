"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  imagePosition: string;
  bio: string;
  linkedin: string;
  twitter: string;
  qrCode: string;
}

let setters: Array<(v: boolean) => void> = [];

export default function TeamCardClient({ member }: { member: TeamMember }) {
  const [showQR, setShowQR] = useState(false);

  if (!setters.includes(setShowQR)) {
    setters.push(setShowQR);
  }

  const handleOpen = () => {
    setters.forEach((s) => s(false));
    setShowQR(true);
  };

  const handleClose = () => setShowQR(false);

  const linkedinIcon = (
    <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const twitterIcon = (
    <svg className="w-3 h-3 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <>
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleClose}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4 z-10 animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <Image src={member.qrCode} alt={`${member.name} QR Code`} width={180} height={180} className="object-contain" />
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-sm">{member.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">Scan to view profile</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative w-full h-72 bg-gray-100">
          <Image src={member.image} alt={member.name} fill className={`object-cover ${member.imagePosition}`} />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role} · {member.specialty}</p>
            </div>
            <div className="flex gap-1.5 mt-0.5">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className="w-7 h-7 rounded-md bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors group">{linkedinIcon}</a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} X`} className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-colors group">{twitterIcon}</a>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">{member.bio}</p>

          <button
            onClick={handleOpen}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm1 1h3v3H5V5zM14 3h7v7h-7V3zm1 1v5h5V4h-5zm1 1h3v3h-3V5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm1 1h3v3H5v-3zM14 14h3v3h-3v-3zM18 14h3v3h-3v-3zM14 18h3v3h-3v-3zM18 18h3v3h-3v-3z"/>
            </svg>
            View QR Code
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal { animation: modal 0.2s ease-out forwards; }
      `}</style>
    </>
  );
}