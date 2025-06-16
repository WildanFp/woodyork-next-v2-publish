"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface ProjectFilterProps {
  initialCategory?: string
  initialSubcategory?: string
}

export function ProjectFilter({ initialCategory = "", initialSubcategory = "" }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(initialSubcategory)
  const router = useRouter()
  const pathname = usePathname()

  const categories = [
    { value: "", label: "All Projects" },
    { value: "commercial", label: "Commercial Projects" },
    { value: "residential", label: "Residential Projects" },
  ]

  const subcategories: Record<string, { value: string; label: string }[]> = {
    residential: [
      { value: "bathroom", label: "Bathroom" },
      { value: "bedroom", label: "Bedroom" },
      { value: "family-room", label: "Family Room" },
      { value: "facade", label: "Facade" },
      { value: "kids-bedroom", label: "Kids Bedroom" },
      { value: "kitchen-set", label: "Kitchen Set" },
      { value: "living-room", label: "Living Room" },
      { value: "arabic-majlis", label: "Arabic Majlis" },
      { value: "musholla", label: "Musholla" },
      { value: "rooftop", label: "Rooftop" },
    ],
    commercial: [
      { value: "coffee-shop", label: "Coffee Shop" },
      { value: "boarding", label: "Boarding" },
      { value: "office", label: "Office" },
      { value: "store", label: "Store" },
    ],
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategory("")

    if (!category) {
      router.push("/projects")
    } else {
      router.push(`/projects/${category}`)
    }
  }

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory)

    if (!selectedCategory) {
      router.push("/projects")
    } else if (!subcategory) {
      router.push(`/projects/${selectedCategory}`)
    } else {
      // Convert subcategory with hyphens to URL format (remove hyphens)
      const convertToUrlFormat = (hyphenatedSubcategory: string): string => {
        const mappings: Record<string, string> = {
          "kids-bedroom": "kidsbedroom",
          "coffee-shop": "coffeeshop",
          "living-room": "livingroom",
          "dining-room": "diningroom",
          "home-office": "homeoffice",
          "family-room": "familyroom",
          "arabic-majlis": "arabicmajlis",
          "kitchen-set": "kitchenset",
        }

        return mappings[hyphenatedSubcategory.toLowerCase()] || hyphenatedSubcategory.replace(/-/g, "")
      }

      const urlSubcategory = convertToUrlFormat(subcategory)
      router.push(`/projects/${selectedCategory}/${urlSubcategory}`)
    }
  }

  // Update state when URL changes
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean)

    if (pathSegments.length >= 2 && pathSegments[0] === "projects") {
      const categoryFromPath = pathSegments[1]
      const subcategoryFromPath = pathSegments[2]

      if (categoryFromPath && (categoryFromPath === "residential" || categoryFromPath === "commercial")) {
        setSelectedCategory(categoryFromPath)

        if (subcategoryFromPath) {
          // Convert URL subcategory back to hyphenated format
          const convertUrlToHyphenated = (urlSubcategory: string): string => {
            const mappings: Record<string, string> = {
              kidsbedroom: "kids-bedroom",
              coffeeshop: "coffee-shop",
              livingroom: "living-room",
              diningroom: "dining-room",
              homeoffice: "home-office",
              familyroom: "family-room",
              arabicmajlis: "arabic-majlis",
              kitchenset: "kitchen-set",
            }

            return (
              mappings[urlSubcategory.toLowerCase()] || urlSubcategory.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            )
          }

          const hyphenatedSubcategory = convertUrlToHyphenated(subcategoryFromPath)
          setSelectedSubcategory(hyphenatedSubcategory)
        } else {
          setSelectedSubcategory("")
        }
      } else {
        setSelectedCategory("")
        setSelectedSubcategory("")
      }
    } else {
      setSelectedCategory("")
      setSelectedSubcategory("")
    }
  }, [pathname])

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 rounded-full ${
                selectedCategory === category.value ? "bg-white text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Subcategory Tabs */}
        {selectedCategory && subcategories[selectedCategory] && (
          <div className="flex flex-wrap justify-center gap-2">
            {subcategories[selectedCategory].map((subcategory) => (
              <button
                key={subcategory.value}
                onClick={() => handleSubcategoryChange(subcategory.value)}
                className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-full ${
                  selectedSubcategory === subcategory.value
                    ? "bg-amber-400 text-black"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
