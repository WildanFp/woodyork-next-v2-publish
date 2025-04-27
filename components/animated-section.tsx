"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-in-right" | "slide-in-left" | "scale-in"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
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
  }, [threshold])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "slide-in-left":
        return "animate-slide-in-left"
      case "scale-in":
        return "animate-scale-in"
      default:
        return "animate-fade-in"
    }
  }

  const getDelayClass = () => {
    switch (delay) {
      case 100:
        return "animate-delay-100"
      case 200:
        return "animate-delay-200"
      case 300:
        return "animate-delay-300"
      case 400:
        return "animate-delay-400"
      case 500:
        return "animate-delay-500"
      default:
        return ""
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? `${getAnimationClass()} ${getDelayClass()}` : "opacity-0")}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  )
}
