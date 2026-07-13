import React from "react"
import {
    ArrowRight,
    BadgePercent,
    CalendarCheck,
    CheckCircle2,
    Headphones,
    MapPin,
    Plane,
} from "lucide-react"

const benefits = [
    "Customised tour packages",
    "Affordable travel plans",
    "24/7 customer support",
]

export default function TravelOfferCTA() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="relative w-full overflow-hidden bg-[#073f70]">
                {/* Decorative Background */}
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#026fc5]/60 blur-2xl" />
                <div className="absolute -bottom-32 right-[28%] h-80 w-80 rounded-full bg-[#ffbd2e]/20 blur-3xl" />

                <div className="relative grid min-h-[440px] w-full grid-cols-1 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="relative z-20 flex flex-col justify-center px-6 py-8 md:px-10 lg:pl-12">
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                            <BadgePercent className="h-4 w-4 text-[#ffbd2e]" />
                            Exclusive Seasonal Offer
                        </div>

                        <h2 className="max-w-xl text-2xl font-black leading-[1.2] text-white sm:text-3xl md:text-4xl">
                            Your Dream Holiday
                            <span className="block text-[#ffbd2e]">
                                Is Now 30% Off
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-xs leading-6 text-white/75 md:text-sm">
                            Explore breathtaking domestic and international destinations with carefully planned packages, comfortable stays and unforgettable experiences.
                        </p>

                        {/* Benefits */}
                        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-2 text-xs font-medium text-white/90"
                                >
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ffbd2e]" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#ffbd2e] px-5 py-2.5 text-xs font-bold text-[#073f70] transition duration-300 hover:bg-white"
                            >
                                Plan Your Trip
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#packages"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#073f70]"
                            >
                                View Packages
                                <Plane className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Bottom Information */}
                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4">
                            <div className="flex items-center gap-1.5 text-[11px] text-white/75">
                                <CalendarCheck className="h-3.5 w-3.5 text-[#ffbd2e]" />
                                Flexible travel dates
                            </div>

                            <div className="flex items-center gap-1.5 text-[11px] text-white/75">
                                <Headphones className="h-3.5 w-3.5 text-[#ffbd2e]" />
                                Travel assistance
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative min-h-[380px] overflow-hidden lg:min-h-[440px]">
                        <img
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90"
                            alt="Beautiful travel destination"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#073f70]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#073f70] lg:via-[#073f70]/20 lg:to-transparent" />

                        {/* Discount Card */}
                        <div className="absolute right-4 top-4 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:right-6 sm:top-6">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#026fc5]">
                                Save up to
                            </p>

                            <div className="mt-0.5 flex items-end gap-0.5">
                                <span className="text-4xl font-black leading-none text-[#073f70]">
                                    30
                                </span>

                                <div className="pb-0.5">
                                    <span className="block text-base font-black leading-none text-[#ff9d00]">
                                        %
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-500">
                                        OFF
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Plane Icon */}
                        <div className="absolute left-6 top-8 hidden h-10 w-10 rotate-12 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md sm:flex lg:left-10 lg:top-8">
                            <Plane className="h-5 w-5" />
                        </div>

                        {/* Destination Card */}
                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/90 p-3 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-6 sm:w-[280px]">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#026fc5]">
                                        <MapPin className="h-3.5 w-3.5" />
                                        Popular Destination
                                    </div>

                                    <h3 className="mt-0.5 text-base font-black text-[#073f70]">
                                        Explore Maldives
                                    </h3>

                                    <p className="text-[10px] text-gray-500">
                                        4 Nights and 5 Days
                                    </p>
                                </div>

                                <div className="shrink-0 rounded-xl bg-[#073f70] px-3 py-2 text-center">
                                    <p className="text-[9px] font-medium text-white/70">
                                        From
                                    </p>

                                    <p className="text-xs font-black text-[#ffbd2e]">
                                        ₹19,999
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}