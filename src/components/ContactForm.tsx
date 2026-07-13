import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, Calendar, PlaneTakeoff, Users, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        guests: "2",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API request
        setTimeout(() => {
            setSubmitted(true)
            setFormData({
                name: "",
                email: "",
                phone: "",
                destination: "",
                date: "",
                guests: "2",
                message: "",
            })
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000)
        }, 800)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="w-full bg-slate-50 py-8 px-4 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-100/30 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#026fc5]">
                        Plan Your Journey
                    </span>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-[#026fc5] md:text-5xl">
                        Start Booking Your Trip
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 md:text-base">
                        Have a destination in mind? Fill out the form below, and our travel specialists will craft the perfect customized itinerary for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
                    
                    {/* Left: Contact Information Cards */}
                    <div className="space-y-6">
                        <div className="rounded-3xl bg-[#026fc5] p-8 text-white shadow-xl relative overflow-hidden">
                            {/* Decorative design */}
                            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full translate-x-6 translate-y-6" />
                            
                            <h3 className="text-2xl font-black mb-6">Contact Information</h3>
                            <p className="text-white/85 text-sm leading-relaxed mb-8">
                                Reach out to us directly for quick booking assistance, custom planning, or any corporate travel requirements.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#ffbd2e]">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Call Us</p>
                                        <a href="tel:+919876543210" className="text-base font-bold hover:text-[#ffbd2e] transition-colors mt-0.5 block">
                                            +91 (987) 654-3210
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#ffbd2e]">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Email Us</p>
                                        <a href="mailto:booking@openskyholidays.com" className="text-base font-bold hover:text-[#ffbd2e] transition-colors mt-0.5 block">
                                            booking@openskyholidays.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#ffbd2e]">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Our Office</p>
                                        <p className="text-sm font-medium mt-0.5 leading-relaxed text-white/90">
                                            102 Skyline Avenue, Near Marine Drive, Mumbai, MH - 400001, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#ffbd2e]">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Working Hours</p>
                                        <p className="text-sm font-medium mt-0.5 text-white/90">
                                            Mon - Sat: 9:00 AM - 7:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Book with Us Badge */}
                        <div className="rounded-3xl bg-white p-6 shadow-md border border-slate-100 flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 font-bold text-xl">
                                ✓
                            </div>
                            <div>
                                <h4 className="font-bold text-[#073f70] text-sm">100% Personalised Itineraries</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Custom adjustments with zero compromise on luxury.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Interactive Inquiry Form */}
                    <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xl border border-slate-100 relative">
                        {submitted && (
                            <div className="absolute inset-0 bg-white/95 rounded-3xl z-30 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                                <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-black text-[#073f70]">Inquiry Submitted!</h3>
                                <p className="text-sm text-gray-500 mt-2 max-w-sm">
                                    Thank you for choosing Open Sky Holidays. One of our destination experts will get back to you within 24 hours.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <User size={14} className="text-[#026fc5]" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Phone size={14} className="text-[#026fc5]" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Mail size={14} className="text-[#026fc5]" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    />
                                </div>

                                {/* Destination Dropdown */}
                                <div className="space-y-2">
                                    <label htmlFor="destination" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <PlaneTakeoff size={14} className="text-[#026fc5]" />
                                        Destination
                                    </label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        required
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    >
                                        <option value="">Select Destination</option>
                                        <optgroup label="India (Domestic)">
                                            <option value="kashmir">Kashmir</option>
                                            <option value="kerala">Kerala</option>
                                            <option value="goa">Goa</option>
                                            <option value="rajasthan">Rajasthan</option>
                                            <option value="himachal">Himachal Pradesh</option>
                                        </optgroup>
                                        <optgroup label="International">
                                            <option value="maldives">Maldives</option>
                                            <option value="dubai">Dubai</option>
                                            <option value="singapore">Singapore</option>
                                            <option value="bali">Bali</option>
                                            <option value="europe">Europe</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Travel Date */}
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Calendar size={14} className="text-[#026fc5]" />
                                        Travel Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    />
                                </div>

                                {/* Guests / Travellers count */}
                                <div className="space-y-2">
                                    <label htmlFor="guests" className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Users size={14} className="text-[#026fc5]" />
                                        No. of Travellers
                                    </label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        min="1"
                                        max="50"
                                        required
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50"
                                    />
                                </div>
                            </div>

                            {/* Message / Requirements */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Special Notes / Requirements
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your flight preference, hotel category, or specific sightseeing wishes..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#026fc5] focus:outline-none transition-colors font-medium bg-slate-50 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-full bg-[#026fc5] text-white py-4 font-bold transition hover:bg-[#ffbd2e] hover:text-[#073f70] shadow-lg shadow-brand-500/10 hover:shadow-accent-500/10 cursor-pointer"
                            >
                                Send Travel Inquiry
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
