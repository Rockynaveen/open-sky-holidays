import React, { useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Star,
  Users,
} from "lucide-react"

type PackageItem = {
  id: number
  title: string
  location: string
  image: string
  duration: string
  groupSize: string
  rating: number
  reviews: number
  oldPrice: string
  price: string
  category: string
  badge?: string
}

const packages: PackageItem[] = [
  // --- International (4 items) ---
  {
    id: 1,
    title: "Magical Maldives Escape",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 6 People",
    rating: 4.9,
    reviews: 128,
    oldPrice: "₹29,999",
    price: "₹19,999",
    category: "International",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Dubai Luxury Holiday",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 8 People",
    rating: 4.8,
    reviews: 96,
    oldPrice: "₹49,999",
    price: "₹34,999",
    category: "International",
    badge: "30% Off",
  },
  {
    id: 3,
    title: "Singapore City Adventure",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 8 People",
    rating: 4.8,
    reviews: 104,
    oldPrice: "₹52,999",
    price: "₹37,999",
    category: "International",
    badge: "Trending",
  },
  {
    id: 4,
    title: "Amazing Thailand Explorer",
    location: "Bangkok & Phuket",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 6 People",
    rating: 4.7,
    reviews: 79,
    oldPrice: "₹34,999",
    price: "₹22,999",
    category: "International",
    badge: "Special Deal",
  },

  // --- Domestic (4 items) ---
  {
    id: 5,
    title: "Kashmir Paradise Tour",
    location: "Kashmir, India",
    image: "https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 10 People",
    rating: 4.9,
    reviews: 154,
    oldPrice: "₹24,999",
    price: "₹16,999",
    category: "Domestic",
    badge: "Popular",
  },
  {
    id: 6,
    title: "Kerala Backwaters Retreat",
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 8 People",
    rating: 4.8,
    reviews: 116,
    oldPrice: "₹21,999",
    price: "₹14,999",
    category: "Domestic",
    badge: "Best Seller",
  },
  {
    id: 7,
    title: "Goa Beach Romance Vacation",
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    duration: "4 Days / 3 Nights",
    groupSize: "2 - 12 People",
    rating: 4.7,
    reviews: 142,
    oldPrice: "₹14,999",
    price: "₹9,999",
    category: "Domestic",
    badge: "Super Saver",
  },
  {
    id: 8,
    title: "Golden Triangle Heritage Tour",
    location: "Delhi-Agra-Jaipur",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 8 People",
    rating: 4.8,
    reviews: 83,
    oldPrice: "₹19,999",
    price: "₹12,499",
    category: "Domestic",
    badge: "Cultural",
  },

  // --- Honeymoon (4 items) ---
  {
    id: 9,
    title: "Bali Couple Romance Getaway",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    duration: "7 Days / 6 Nights",
    groupSize: "2 People Only",
    rating: 4.9,
    reviews: 87,
    oldPrice: "₹44,999",
    price: "₹31,999",
    category: "Honeymoon",
    badge: "Couple Special",
  },
  {
    id: 10,
    title: "Romantic Paris Discovery",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "2 People Only",
    rating: 5.0,
    reviews: 62,
    oldPrice: "₹79,999",
    price: "₹59,999",
    category: "Honeymoon",
    badge: "Premium Love",
  },
  {
    id: 11,
    title: "Switzerland Alpine Romance",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    duration: "7 Days / 6 Nights",
    groupSize: "2 People Only",
    rating: 4.9,
    reviews: 43,
    oldPrice: "₹89,999",
    price: "₹64,999",
    category: "Honeymoon",
    badge: "Scenic Luxury",
  },
  {
    id: 12,
    title: "Maldives Private Romance Villa",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 People Only",
    rating: 4.9,
    reviews: 51,
    oldPrice: "₹39,999",
    price: "₹29,999",
    category: "Honeymoon",
    badge: "Water Villa",
  },

  // --- Family (4 items) ---
  {
    id: 13,
    title: "Himachal Family Holidays",
    location: "Shimla & Manali",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "4 - 10 People",
    rating: 4.8,
    reviews: 94,
    oldPrice: "₹18,999",
    price: "₹11,999",
    category: "Family",
    badge: "Family Choice",
  },
  {
    id: 14,
    title: "Royal Rajasthan Heritage Tour",
    location: "Udaipur & Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "4 - 12 People",
    rating: 4.9,
    reviews: 108,
    oldPrice: "₹22,999",
    price: "₹15,499",
    category: "Family",
    badge: "Royal Stay",
  },
  {
    id: 15,
    title: "Ooty & Mysore Family Escape",
    location: "Ooty, India",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 8 People",
    rating: 4.7,
    reviews: 76,
    oldPrice: "₹12,999",
    price: "₹8,999",
    category: "Family",
    badge: "Kids Friendly",
  },
  {
    id: 16,
    title: "Singapore Family Adventure",
    location: "Sentosa, Singapore",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    duration: "5 Days / 4 Nights",
    groupSize: "3 - 8 People",
    rating: 4.8,
    reviews: 82,
    oldPrice: "₹54,999",
    price: "₹39,999",
    category: "Family",
    badge: "Theme Parks",
  }
]

export default function TravelPackagesSection() {
  const [activeCategory, setActiveCategory] = useState("All Packages")

  const filteredPackages = activeCategory === "All Packages"
    ? packages
    : packages.filter(pkg => pkg.category === activeCategory)

  return (
    <section id="packages" className="w-full bg-[#f6f9fc] py-8">
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Section Header */}
        <div className="mb-8 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-[#026fc5]">
            Trending Deals
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] leading-tight">
            Handpicked Holiday Packages
          </h2>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {[
            "All Packages",
            "International",
            "Domestic",
            "Honeymoon",
            "Family",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 cursor-pointer ${activeCategory === item
                ? "bg-[#026fc5] text-white shadow-md"
                : "border border-gray-200 bg-white text-gray-600 hover:border-[#026fc5] hover:text-[#026fc5]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Package Grid - 4 Columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredPackages.slice(0, 4).map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_15px_45px_rgba(8,43,53,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(8,43,53,0.14)]"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {item.badge && (
                  <div className="absolute left-4 top-4 rounded-full bg-[#ffbd2e] px-3.5 py-1.5 text-[10px] font-bold text-[#0c406d] shadow-lg">
                    {item.badge}
                  </div>
                )}

                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#026fc5] backdrop-blur-md">
                  {item.category}
                </div>

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white">
                  <MapPin className="h-3.5 w-3.5 text-white" />
                  <span className="text-xs font-semibold">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black leading-snug text-[#0c406d] transition duration-300 group-hover:text-[#026fc5]">
                    {item.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#fff7dd] px-2 py-1">
                    <Star className="h-3.5 w-3.5 fill-[#ffbd2e] text-[#ffbd2e]" />
                    <span className="text-[10px] font-bold text-[#0c406d]">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <p className="mt-1 text-[10px] text-gray-400">
                  Based on {item.reviews} reviews
                </p>

                {/* Package Details */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-1.5 rounded-xl bg-[#f6f9fc] px-2.5 py-2">
                    <Clock3 className="h-3.5 w-3.5 shrink-0 text-[#026fc5]" />
                    <span className="text-[10px] font-semibold text-gray-600">
                      {item.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-xl bg-[#f6f9fc] px-2.5 py-2">
                    <Users className="h-3.5 w-3.5 shrink-0 text-[#026fc5]" />
                    <span className="text-[10px] font-semibold text-gray-600">
                      {item.groupSize}
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-medium text-gray-400">
                        Starting from
                      </p>

                      <div className="mt-0.5 flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-gray-400 line-through">
                          {item.oldPrice}
                        </span>

                        <span className="text-xl font-black text-[#026fc5]">
                          {item.price}
                        </span>
                      </div>

                      <p className="mt-0.5 text-[9px] text-gray-400">
                        Per person
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="group/button inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0c406d] text-white transition duration-300 hover:bg-[#ffbd2e] hover:text-[#0c406d]"
                      aria-label={`View ${item.title}`}
                    >
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-[28px] bg-[#0c406d] px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#ffbd2e]">
              <CalendarDays className="h-5 w-5" />
              <span className="text-sm font-bold">
                Need a customised travel plan?
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
              Let us create the perfect holiday package for you.
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#ffbd2e] px-6 py-3.5 text-sm font-bold text-[#0c406d] transition duration-300 hover:bg-white"
          >
            Get Custom Package
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}