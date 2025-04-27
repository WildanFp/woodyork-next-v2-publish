"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverContent: React.ReactNode
  hoverContentClassName?: string
}

export function HoverCard({ children, className, hoverContent, hoverContentClassName }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("relative group overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="transition-all duration-500 ease-in-out transform group-hover:scale-105">{children}</div>
      <div
        className={cn(
          "absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-500 ease-in-out",
          isHovered ? "opacity-100" : "opacity-0",
          hoverContentClassName,
        )}
      >
        {hoverContent}
      </div>
    </div>
  )
}
