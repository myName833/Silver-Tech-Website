"use client"

import { useEffect, useRef } from "react"

export default function ScrollReveal({ children, threshold = 0.1 }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return (
    <div ref={ref} className="scroll-fade-in">
      {children}
    </div>
  )
}

