"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  speed?: number
}

export function ParallaxImage({ src, alt, width, height, className = "", speed = 0.1 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const elementTop = ref.current.getBoundingClientRect().top + scrollY
      const elementHeight = ref.current.offsetHeight
      const windowHeight = window.innerHeight

      // Only apply parallax when the element is in view
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const offset = (scrollY - elementTop) * speed
        ref.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-300"
      />
    </div>
  )
}
