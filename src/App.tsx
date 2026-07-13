import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import StatsCounter from './components/StatsCounter'
import Gallery from './components/Gallery'
import Guides from './components/Guides'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import DomesticTours from './components/Domestic-tours'
import InternationalTours from './components/internation-tours'
import TravelOfferCTA from './components/cta'
import ContactForm from './components/ContactForm'
import Packages from './components/Packages'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col font-sans select-none antialiased scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <ScrollReveal direction="up">
          <AboutUs />
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal direction="up" delay={50}>
          <Services />
        </ScrollReveal>

        {/* Popular Holiday Packages */}
        <ScrollReveal direction="up" delay={50}>
          <Packages />
        </ScrollReveal>

        {/* Explore Destinations Grid (India & World) */}
        <ScrollReveal direction="up">
          <DomesticTours />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <InternationalTours />
        </ScrollReveal>

        {/* Stats Counter Section */}
        <ScrollReveal direction="up">
          <StatsCounter />
        </ScrollReveal>

        {/* Popular Destinations Gallery Section */}
        <ScrollReveal direction="up">
          <Gallery />
        </ScrollReveal>

        {/* Tour Guides Section */}
        <ScrollReveal direction="up">
          <Guides />
        </ScrollReveal>

        {/* Testimonials & Reviews Section */}
        <ScrollReveal direction="up">
          <Testimonials />
        </ScrollReveal>

        {/* Travel Offer CTA Banner */}
        <ScrollReveal direction="up">
          <TravelOfferCTA />
        </ScrollReveal>

        {/* Booking Inquiry Contact Form */}
        <ScrollReveal direction="up">
          <ContactForm />
        </ScrollReveal>
      </main>

      {/* Footer & Newsletter Section */}
      <Footer />
    </div>
  )
}
