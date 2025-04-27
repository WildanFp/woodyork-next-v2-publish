"use client"

import { useRef, useEffect, useState } from "react"

interface TextRevealProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TextReveal({ text, className = "", speed = 50, delay = 0 }: TextRevealProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, text, speed, delay])

  return (
    <div ref={ref} className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
