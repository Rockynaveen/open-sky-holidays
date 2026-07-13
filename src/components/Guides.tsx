import React from "react"

const Facebook = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const Twitter = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const Instagram = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Linkedin = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)


const GUIDES_DATA = [
  {
    name: "Jenny Wilson",
    role: "Tourist Guide",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Jacob Jones",
    role: "Tourist Guide",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Jane Cooper",
    role: "Tourist Guide",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Guy Hawkins",
    role: "Tourist Guide",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
]

export default function Guides() {
  return (
    <section id="guides" className="relative overflow-hidden bg-[#eefdff] px-4 py-8">
      {/* background pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[radial-gradient(circle,#20a9c9_1px,transparent_1px)] bg-[length:28px_28px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-serif text-3xl italic text-[#0d4b5a]">
            Meet with Guide
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0d4b5a] md:text-5xl">
            Meet with expert guide
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES_DATA.map((guide, index) => (
            <div key={index} className="group relative pt-24">
              {/* image */}
              <div className="absolute left-1/2 top-0 z-20 h-44 w-44 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* card */}
              <div className="rounded-2xl bg-white px-4 pb-5 pt-32 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl bg-[#e9f8fb] px-5 py-6 text-center transition-colors duration-500">
                  {/* blue hover fill from top */}
                  <div className="absolute left-0 top-0 h-0 w-full bg-[#22a9c9] transition-all duration-500 group-hover:h-full" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-black transition-colors duration-500 group-hover:text-white">
                      {guide.name}
                    </h3>

                    <p className="mt-1 text-base text-black transition-colors duration-500 group-hover:text-white">
                      {guide.role}
                    </p>

                    <div className="mt-5 flex justify-center gap-3">
                      {[Facebook, Twitter, Instagram, Linkedin].map(
                        (Icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22a9c9] text-[#22a9c9] transition duration-500 group-hover:border-white group-hover:text-white"
                          >
                            <Icon size={15} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}