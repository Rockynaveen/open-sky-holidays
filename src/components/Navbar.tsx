import React, { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

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


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Explore World', href: '#explore-world' },
    { name: 'Explore India', href: '#explore-india' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Guides', href: '#guides' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-brand-950 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center hover:text-accent-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-accent-400" />
              +1 (234) 567-890
            </a>
            <a href="mailto:info@openskyholidays.com" className="flex items-center hover:text-accent-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-accent-400" />
              info@openskyholidays.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Follow Us:</span>
            <a href="#" className="hover:text-accent-400 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-accent-400 transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-accent-400 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-accent-400 transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-0 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="Open Sky Holidays"
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-8 items-center font-sans font-medium text-sm text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand-600 relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <a href="#contact">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-full px-6 transition-all hover:scale-105 shadow-md shadow-brand-200 cursor-pointer">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5 duration-300 z-50">
            <ul className="flex flex-col space-y-4 font-medium text-slate-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 rounded-md hover:bg-slate-50 hover:text-brand-600 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full">
              <Button
                className="bg-brand-600 hover:bg-brand-700 text-white font-medium w-full py-6 rounded-xl shadow-lg cursor-pointer"
              >
                Book Now
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
