"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-zinc-900">
        <Link href="/" className="text-xl font-light" onClick={onClose}>
          woodwork
        </Link>
        <button
          onClick={onClose}
          className="text-white p-2"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6">
        <nav className="space-y-8">
          <AnimatedSection animation="fade-in" delay={100}>
            <Link
              href="/about"
              className="block text-2xl font-light hover:text-amber-300 transition-colors duration-300"
              onClick={onClose}
            >
              about
            </Link>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <Link
              href="/projects"
              className="block text-2xl font-light hover:text-amber-300 transition-colors duration-300"
              onClick={onClose}
            >
              projects
            </Link>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={300}>
            <Link
              href="/services"
              className="block text-2xl font-light hover:text-amber-300 transition-colors duration-300"
              onClick={onClose}
            >
              services
            </Link>
          </AnimatedSection>
        </nav>
      </div>

      <div className="p-6 border-t border-zinc-900">
        <AnimatedSection animation="fade-in" delay={500}>
          <p className="text-gray-400 text-sm">We're welcoming you always.</p>
        </AnimatedSection>
      </div>
    </div>
  );
}
