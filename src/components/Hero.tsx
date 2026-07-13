import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80',
    tag: 'Explore the Paradise',
    title: 'Let\'s Make Your Best Trip With Us',
    subtitle: 'The world is waiting',
    desc: 'Indulge in absolute luxury, explore tropical islands, and let the ocean breeze guide you to peace.'
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
    tag: 'Discover New Paths',
    title: 'Explore Majestic Natural Wonders',
    subtitle: 'The world is waiting',
    desc: 'Scale high peaks, row through pristine lakes, and disconnect in nature\'s raw splendor.'
  },
  {
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=80',
    tag: 'Unforgettable Journeys',
    title: 'Your Ultimate Road to Adventure',
    subtitle: 'The world is waiting',
    desc: 'Unearth ancient histories, wander through busy cultures, and capture memorable stories.'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  return (
    <section id="home" className="relative w-full h-[calc(110vh-64px)] lg:h-[calc(110vh-80px)] overflow-hidden bg-slate-900">
      {/* Background Slideshow */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
          } transform duration-[2000ms]`}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/45 z-20" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 flex flex-col justify-center items-start py-20">
        <div className="max-w-2xl text-left text-white animate-in fade-in slide-in-from-left-6 duration-1000">
          <span className="inline-block bg-accent-500/90 text-brand-950 font-sans text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-accent-500/20">
            {HERO_SLIDES[currentSlide].tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tight leading-[1.1] mb-2 drop-shadow-md">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-accent-300 font-semibold mb-4 leading-normal tracking-wide pl-1">
            "{HERO_SLIDES[currentSlide].subtitle}"
          </p>
          <p className="font-sans text-slate-200 text-sm md:text-base leading-relaxed mb-8 max-w-lg pl-1 drop-shadow">
            {HERO_SLIDES[currentSlide].desc}
          </p>
          <div className="flex flex-wrap gap-4 pl-1">
            <a
              href="#explore-india"
              className="bg-[#026fc5] hover:bg-[#073f70] text-white font-bold rounded-full py-3.5 px-8 text-sm md:text-base tracking-wide transition-all shadow-lg shadow-brand-600/30 hover:scale-105 flex items-center justify-center"
            >
              Explore Tours
            </a>
            <a
              href="#services"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-brand-950 font-bold rounded-full py-3.5 px-8 text-sm md:text-base tracking-wide backdrop-blur-sm transition-all hover:scale-105 flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}
