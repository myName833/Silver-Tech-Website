"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import About from "./components/about"
import Experiences from "./components/experiences"
import Contact from "./components/contact"
import Footer from "./components/footer"
import PastEvents from "./components/past-events"
import StartChapter from "./components/start-chapter"
import FAQ from "./components/faq"
import ScrollReveal from "./components/scroll-reveal"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <StartChapter />
        </ScrollReveal>
        <ScrollReveal>
          <PastEvents />
        </ScrollReveal>
        <ScrollReveal>
          <Experiences />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#2F4F4F] text-white rounded-full shadow-lg hover:bg-[#708090] transition-all duration-300 z-50 animate-bounce"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

