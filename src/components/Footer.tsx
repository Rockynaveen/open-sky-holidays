import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)


export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-10 pb-6 px-4 overflow-hidden border-t border-slate-900 mt-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 text-left relative z-10">

        {/* Col 1: About */}
        <div className="space-y-3">
          <a href="#home" className="inline-block">
            <img
              src="/images/logo.png"
              alt="Open Sky Holidays"
              className="h-14 w-auto object-contain"
            />
          </a>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Open Sky Holidays designs exceptional journeys customized to match your timeline, budget, and travel desires. The world is waiting.
          </p>
          <div className="flex space-x-4 pt-1">
            <a href="#" className="hover:text-[#026fc5] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#026fc5] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#026fc5] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#026fc5] transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-1.5 text-xs text-white/90 font-sans">
            <li><a href="#home" className="hover:text-[#026fc5] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#026fc5] transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-[#026fc5] transition-colors">Services</a></li>
            <li><a href="#explore-world" className="hover:text-[#026fc5] transition-colors">Explore World</a></li>
            <li><a href="#explore-india" className="hover:text-[#026fc5] transition-colors">Explore India</a></li>
          </ul>
        </div>

        {/* Col 3: Company Services */}
        <div className="space-y-3">
          <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Support & Help
          </h4>
          <ul className="space-y-1.5 text-xs text-white/90 font-sans">
            <li><a href="#gallery" className="hover:text-[#026fc5] transition-colors">Gallery</a></li>
            <li><a href="#guides" className="hover:text-[#026fc5] transition-colors">Tour Guides</a></li>
            <li><a href="#testimonials" className="hover:text-[#026fc5] transition-colors">Reviews & Testimonials</a></li>
            <li><a href="#" className="hover:text-[#026fc5] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#026fc5] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="space-y-3">
          <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Get In Touch
          </h4>
          <ul className="space-y-2 text-xs text-white/90 font-sans">
            <li className="flex items-start">
              <MapPin className="w-3.5 h-3.5 text-[#026fc5] mr-2 shrink-0 mt-0.5" />
              <span>102 Skyline Avenue, Near Marine Drive, Mumbai, MH - 400001, India</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-3.5 h-3.5 text-[#026fc5] mr-2 shrink-0" />
              <a href="tel:+1234567890" className="hover:text-[#026fc5] transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-3.5 h-3.5 text-[#026fc5] mr-2 shrink-0" />
              <a href="mailto:info@openskyholidays.com" className="hover:text-[#026fc5] transition-colors">info@openskyholidays.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-10 pt-5 text-center text-xs text-slate-500 font-sans">
        <p>&copy; {new Date().getFullYear()} Open Sky Holidays. All rights reserved. The world is waiting.</p>
      </div>

    </footer>
  )
}
