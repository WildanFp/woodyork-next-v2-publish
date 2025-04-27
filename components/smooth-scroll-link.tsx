"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  duration?: number
}

export function SmoothScrollLink({ href, children, className = "", duration = 800 }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace(/.*#/, "")
    const targetElement = document.getElementById(targetId)

    if (!targetElement) return

    const startPosition = window.pageYOffset
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3)
    }

    requestAnimationFrame(animation)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
