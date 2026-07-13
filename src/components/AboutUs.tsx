
import React from 'react'
import { ShieldCheck, Compass, HeartHandshake, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export default function AboutUs() {
  return (
    <section id="about" className="py-8 px-4 max-w-7xl mx-auto bg-grid-pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Dynamic Image Stack */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          {/* Main Large Image */}
          <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 hover:scale-[1.02] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80"
              alt="Travel Planning"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Overlapping Small Image */}
          <div className="absolute bottom-0 right-0 w-[45%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-[1.02] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80"
              alt="Luggage and maps"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Experience Badge */}
          <div className="absolute bottom-10 left-[10%] bg-accent-500 text-brand-950 p-6 rounded-2xl shadow-xl z-30 flex flex-col items-center justify-center border border-accent-400 hover:rotate-3 transition-transform duration-300">
            <span className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">12+</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-900 mt-1">
              Years Experience
            </span>
          </div>
        </div>

        {/* Right Side: Narrative & Value Propositions */}
        <div className="flex flex-col text-left space-y-6">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-widest text-accent-600">
              Get To Know Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] mt-2 leading-tight">
              Plan Your Trip With Open Sky Holidays
            </h2>
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We are dedicated to crafting unique, immersive, and luxurious journeys across India and the globe. With over a decade of designing tailormade vacations, we combine authentic local experiences, exceptional accommodations, and expert guides to unlock the true essence of each destination.
          </p>

          {/* Core Feature Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

            {/* Feature 1 */}
            <div className="flex flex-col space-y-2.5 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-sm text-slate-900">
                Exclusive Trip
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                Carefully customized plans tailored just for you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-2.5 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-sm text-slate-900">
                Professional Guide
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                Certified, multilingual local guides for safety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-2.5 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-sm text-slate-900">
                24/7 Support
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                Always reachable throughout your travel timeline.
              </p>
            </div>

          </div>

          <div className="pt-4">
            <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-full py-5 px-6 shadow-md hover:scale-105 transition-all flex items-center space-x-2">
              <span>Read More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}


