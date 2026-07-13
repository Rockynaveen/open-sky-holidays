import React, { useState, useEffect, useRef } from 'react'
import { Calendar, Heart, Compass, Users } from 'lucide-react'

const STATS_DATA = [
  {
    icon: Calendar,
    count: '12+',
    label: 'Years Experience',
    desc: 'Crafting dream tours since 2014'
  },
  {
    icon: Heart,
    count: '97%',
    label: 'Client Retention',
    desc: 'Top-rated client satisfaction'
  },
  {
    icon: Compass,
    count: '8k+',
    label: 'Tours Completed',
    desc: 'Successful custom voyages'
  },
  {
    icon: Users,
    count: '19k+',
    label: 'Happy Travellers',
    desc: 'Trusting us with their stories'
  }
]

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  // Parse target number and suffix (e.g. '12+' -> 12 and '+', '19k+' -> 19 and 'k+')
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let start = 0
    const end = target
    if (start === end) {
      setCount(end)
      return
    }

    const duration = 2000 // duration of animation in ms
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress)
      
      const currentCount = Math.floor(easeProgress * (end - start) + start)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target])

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="relative bg-brand-950 py-8 px-4 overflow-hidden text-white">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-brand-950 to-brand-950 z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.03]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-500/20 text-accent-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 block">
                  <AnimatedCounter value={stat.count} />
                </span>
                <span className="font-sans font-bold text-xs md:text-sm text-accent-300 uppercase tracking-widest block">
                  {stat.label}
                </span>
                <span className="font-sans text-[10px] md:text-xs text-slate-400 mt-1 block">
                  {stat.desc}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
