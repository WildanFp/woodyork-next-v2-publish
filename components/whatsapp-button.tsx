"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // Show button immediately on mobile
    if (window.innerWidth < 768) {
      setIsVisible(true)
    }

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleWhatsAppClick = () => {
    // Phone number and pre-filled message
    const phoneNumber = "6281234567890" // Replace with actual number (no + or spaces)
    const message = "Hello, I'm interested in your design services. Can you provide more information?"

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Open in new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:scale-105 hover:shadow-xl`}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-base font-medium">Contact via WhatsApp</span>
    </button>
  )
}
