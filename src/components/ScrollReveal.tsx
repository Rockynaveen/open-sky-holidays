import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.05, // trigger when 5% of the element is visible
        rootMargin: "0px 0px -40px 0px" // offset to trigger slightly before entering viewport
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      case "down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      case "left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      case "right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      case "fade":
      default:
        return isVisible ? "opacity-100" : "opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  )
}
