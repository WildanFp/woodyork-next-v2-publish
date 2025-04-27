"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";

interface ProjectFilterProps {
  initialCategory?: string;
  initialSubcategory?: string;
}

export function ProjectFilter({
  initialCategory = "all",
  initialSubcategory = "",
}: ProjectFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeSubcategory, setActiveSubcategory] =
    useState(initialSubcategory);

  // Initialize state from URL params
  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const subcategory = searchParams.get("subcategory") || "";

    setActiveCategory(category);
    setActiveSubcategory(subcategory);
  }, [searchParams]);

  // Update URL when filters change without scrolling to top
  const updateFilters = (category: string, subcategory = "") => {
    const params = new URLSearchParams(searchParams.toString());

    // Clear existing params if switching to "all"
    if (category === "all") {
      params.delete("category");
      params.delete("subcategory");
    } else {
      params.set("category", category);

      if (subcategory) {
        params.set("subcategory", subcategory);
      } else {
        params.delete("subcategory");
      }
    }

    const newUrl = `/projects${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    // Use the replace option to update URL without adding to history stack
    // Use scroll: false to prevent scrolling to top
    router.push(newUrl, { scroll: false });

    setActiveCategory(category);
    setActiveSubcategory(subcategory);
  };

  // Commercial subcategories
  const commercialSubcategories = [
    { id: "coffee-shop", label: "Coffee Shop" },
    { id: "boarding", label: "Boarding" },
    { id: "office", label: "Office" },
    { id: "store", label: "Store" },
  ];

  // Residential subcategories
  const residentialSubcategories = [
    { id: "bathroom", label: "Bathroom" },
    { id: "bedroom", label: "Bedroom" },
    { id: "family-room", label: "Family Room" },
    { id: "facade", label: "Facade" },
    { id: "kids-bedroom", label: "Kids Bedroom" },
    { id: "kitchen-set", label: "Kitchen Set" },
    { id: "living-room", label: "Living Room" },
    { id: "arabic-majlis", label: "Arabic Majlis" },
    { id: "musholla", label: "Musholla" },
    { id: "rooftop", label: "Rooftop" },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <AnimatedSection animation="fade-in">
        {/* Main Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-6 py-3 text-base md:text-lg rounded-sm transition-colors ${
              activeCategory === "all"
                ? "bg-white text-black"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
            onClick={() => updateFilters("all")}
          >
            All Projects
          </button>
          <button
            className={`px-6 py-3 text-base md:text-lg rounded-sm transition-colors ${
              activeCategory === "commercial"
                ? "bg-white text-black"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
            onClick={() => updateFilters("commercial")}
          >
            Commercial Projects
          </button>
          <button
            className={`px-6 py-3 text-base md:text-lg rounded-sm transition-colors ${
              activeCategory === "residential"
                ? "bg-white text-black"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
            onClick={() => updateFilters("residential")}
          >
            Residential Projects
          </button>
        </div>

        {/* Subcategories - only show if a main category is selected */}
        {activeCategory === "commercial" && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {commercialSubcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className={`px-4 py-2 text-sm md:text-base rounded-sm transition-colors ${
                  activeSubcategory === subcategory.id
                    ? "bg-amber-300 text-black"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
                onClick={() => updateFilters("commercial", subcategory.id)}
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}

        {activeCategory === "residential" && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {residentialSubcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className={`px-4 py-2 text-sm md:text-base rounded-sm transition-colors ${
                  activeSubcategory === subcategory.id
                    ? "bg-amber-300 text-black"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
                onClick={() => updateFilters("residential", subcategory.id)}
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}
      </AnimatedSection>
    </section>
  );
}
