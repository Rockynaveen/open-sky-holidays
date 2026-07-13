"use client"

import React, { useState } from "react"
import { Plane, Star } from "lucide-react"

type Review = {
  name: string
  role: string
  image: string
  quote: string
  rating: number
  left: string
  top: string
}

const reviews: Review[] = [
  {
    name: "Andrew Simon",
    role: "Traveller",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Open Sky Holidays made our family trip stress-free and memorable. Everything was planned perfectly.",
    rating: 5,
    left: "62%",
    top: "66%",
  },
  {
    name: "Sarah Jenkins",
    role: "Adventure Lover",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "Our honeymoon trip was planned beautifully. Hotels, transfers and sightseeing were perfectly managed.",
    rating: 5,
    left: "28%",
    top: "44%",
  },
  {
    name: "Michael Chen",
    role: "Explorer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Very professional service. Every detail was handled smoothly and our family enjoyed the tour.",
    rating: 5,
    left: "50%",
    top: "55%",
  },
  {
    name: "Emily Rose",
    role: "Tourist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Amazing travel experience. The guide, hotels and itinerary were excellent.",
    rating: 4,
    left: "45%",
    top: "35%",
  },
  {
    name: "David Warner",
    role: "Holiday Maker",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote:
      "The package was well organized and the support team was always available. Great experience.",
    rating: 5,
    left: "76%",
    top: "76%",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState<Review | null>(reviews[0])

  const getBubbleAlignment = (leftStr: string) => {
    const leftVal = parseInt(leftStr)
    if (leftVal < 35) return "left-0 -translate-x-6 sm:left-1/2 sm:-translate-x-1/2"
    if (leftVal > 65) return "right-0 translate-x-6 sm:left-1/2 sm:-translate-x-1/2"
    return "left-1/2 -translate-x-1/2"
  }

  const getArrowAlignment = (leftStr: string) => {
    const leftVal = parseInt(leftStr)
    if (leftVal < 35) return "left-6 sm:left-1/2 sm:-translate-x-1/2"
    if (leftVal > 65) return "right-6 sm:left-1/2 sm:-translate-x-1/2"
    return "left-1/2 -translate-x-1/2"
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-4 py-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] leading-tight">
            What Client Say About us
          </h2>
        </div>

        <div className="relative mx-auto h-[380px] max-w-5xl md:h-[440px] overflow-visible">
          <Plane className="absolute left-4 top-12 z-20 h-12 w-12 -rotate-12 text-[#20b7dd] opacity-80" />

          {/* Dotted World Map */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="h-full w-full opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="dotPattern"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="#22b8df" />
                </pattern>

                <clipPath id="worldMapClip">
                  <path d="M158 152c21-24 68-27 99-21 31 5 61 22 96 18 36-4 58-29 91-29 35 0 58 27 92 31 31 4 59-10 90-8 42 3 74 30 103 58 35 35 67 77 114 86 33 7 68-2 100 8 29 9 48 35 52 64 4 31-12 64-39 79-34 19-77 8-111-11-34-18-65-44-103-53-54-13-109 10-164 15-68 6-136-17-199-43-63-27-124-58-191-68-45-7-93-2-132-25-42-25-56-73-37-101z" />
                  <path d="M80 205c22-33 67-51 106-44 28 5 54 23 84 21 24-2 45-18 69-18 30 1 55 26 58 56 3 34-22 65-52 82-31 18-67 23-100 37-38 17-71 48-113 51-38 3-76-19-96-51-25-41-14-95 44-134z" />
                  <path d="M402 270c36-18 81-15 115 7 37 25 57 69 62 114 3 28 0 58-17 80-20 25-55 34-87 29-31-5-60-22-85-41-32-24-61-55-69-94-8-40 16-78 81-95z" />
                  <path d="M635 190c48-30 112-28 160-2 51 27 87 77 102 132 9 33 9 70-11 98-22 31-63 42-100 35-38-7-70-30-103-50-36-22-76-40-104-72-26-30-39-72-24-109 14-34 49-51 80-32z" />
                  <path d="M721 340c35-13 77 0 99 30 21 28 21 69 1 98-21 31-60 45-95 38-33-7-63-34-70-68-8-38 18-80 65-98z" />
                </clipPath>
              </defs>

              <rect
                width="1000"
                height="500"
                fill="url(#dotPattern)"
                clipPath="url(#worldMapClip)"
              />
            </svg>
          </div>

          {reviews.map((item) => (
            <div
              key={item.name}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
              style={{ left: item.left, top: item.top }}
              onMouseEnter={() => setActive(item)}
              onClick={() => setActive(item)}
            >
              {active?.name === item.name && (
                <div
                  className={`absolute bottom-[86px] z-40 w-[270px] rounded-2xl border border-[#20b7dd] bg-white px-5 py-5 text-center shadow-xl md:w-[420px] transition-all duration-300 ${getBubbleAlignment(item.left)}`}
                >
                  <p className="text-xs font-medium leading-relaxed text-black md:text-sm md:leading-7">
                    “{item.quote}”
                  </p>

                  <div className="mt-3 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-3.5 w-3.5 ${
                          index < item.rating
                            ? "fill-orange-400 text-orange-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className={`absolute -bottom-3 h-6 w-6 rotate-45 border-b border-r border-[#20b7dd] bg-white ${getArrowAlignment(item.left)}`} />
                </div>
              )}

              <button
                type="button"
                className={`relative rounded-full bg-white p-1 shadow-lg transition-all duration-300 cursor-pointer ${
                  active?.name === item.name
                    ? "scale-125 ring-2 ring-[#20b7dd]"
                    : "hover:scale-125 hover:ring-2 hover:ring-[#20b7dd]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover md:h-14 md:w-14"
                />
                <span className="absolute -right-1 top-0 h-4 w-4 rounded-full border-2 border-white bg-[#20b7dd]" />
              </button>

              {active?.name === item.name && (
                <div className="absolute left-1/2 top-[76px] w-[190px] -translate-x-1/2 text-center pointer-events-none">
                  <h3 className="text-base font-bold text-[#0d4b5a] md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 md:text-xs">{item.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}