"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header className="p-6 md:p-8 lg:p-10 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-light tracking-wider"
        >
          woodyork
        </Link>
        <nav className="hidden md:flex space-x-10 text-base">
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-amber-300" : "text-gray-400"
            } hover:text-white transition-colors duration-300`}
          >
            about
          </Link>
          <Link
            href="/projects"
            className={`${
              isActive("/projects") ? "text-amber-300" : "text-gray-400"
            } hover:text-white transition-colors duration-300`}
          >
            projects
          </Link>
          <Link
            href="/services"
            className={`${
              isActive("/services") ? "text-amber-300" : "text-gray-400"
            } hover:text-white transition-colors duration-300`}
          >
            services
          </Link>
        </nav>
        <button
          className="md:hidden text-base flex items-center"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
