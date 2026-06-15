import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { ProjectFilter } from "@/components/project-filter"
import { getProjectsBySubcategory } from "@/lib/projects"
import type { ProjectCategory, ProjectSubcategory } from "@/lib/projects"
import { Header } from "@/components/header"

interface SubcategoryPageProps {
  params: Promise<{
    category: string
    subcategory: string
  }>
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category, subcategory } = await params

  if (!category || (category !== "commercial" && category !== "residential")) {
    notFound()
  }

  // Convert URL subcategory back to hyphenated format for data lookup
  const convertUrlToHyphenated = (urlSubcategory: string): string => {
    // Common mappings for compound words
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

    // Check if we have a direct mapping
    if (mappings[urlSubcategory.toLowerCase()]) {
      return mappings[urlSubcategory.toLowerCase()]
    }

    // Otherwise, try to add hyphens before capital letters and convert to lowercase
    return urlSubcategory.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  }

  const subcategoryWithHyphens = convertUrlToHyphenated(subcategory)

  const categoryTyped = category as ProjectCategory
  const filteredProjects = getProjectsBySubcategory(categoryTyped, subcategoryWithHyphens as ProjectSubcategory)

  const formattedSubcategory = subcategoryWithHyphens.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main className="bg-black text-white min-h-screen">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dec19xsoi/image/upload/v1745772490/C24_qd9rq5.png"
            alt="Modern interior design showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <AnimatedSection animation="fade-in" className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            <span className="italic">Our</span> <span className="font-normal">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore our portfolio of innovative designs and creative solutions
          </p>
        </AnimatedSection>
      </section>

      {/* Project Filters */}
      <ProjectFilter initialCategory={category} initialSubcategory={subcategoryWithHyphens} />

      {/* Projects Grid or No Projects Message */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <AnimatedSection animation="fade-in">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-zinc-800 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4">No Projects Found</h3>
                <p className="text-gray-400 mb-6">
                  We don't have any projects in the {formattedSubcategory} category yet. Check back soon for new
                  projects!
                </p>
                <Link
                  href="/projects"
                  className="border border-amber-300 text-amber-300 px-6 py-2 hover:bg-amber-300 hover:text-black transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </AnimatedSection>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id} animation="fade-in" className="hover-lift">
                <div className="bg-zinc-950 overflow-hidden group h-full">
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-xs md:text-sm px-3 py-1 rounded-sm">
                      {project.category === "residential" ? "Residential" : "Commercial"}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-start h-[calc(100%-18rem)]">
                    <div className="mb-2">
                      <span className="text-amber-300 text-sm md:text-base">
                        {project.subcategory.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4">{project.location}</p>
                    <Link
                      href={`/projects/${project.category}/${project.subcategory.replace(/-/g, "")}/${project.id}`}
                      className="mt-auto border border-white/30 text-sm md:text-base px-5 py-2 hover:bg-white/10 transition-colors"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-8 lg:px-16 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <AnimatedSection animation="fade-in">
            <h3 className="uppercase text-lg md:text-xl mb-6 tracking-wider">woodyork.</h3>
            <p className="text-base text-gray-400 mb-3">We're welcoming you always.</p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={100}>
            <h3 className="text-lg md:text-xl mb-6">Quick links</h3>
            <ul className="text-base text-gray-400 space-y-3">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <h3 className="text-lg md:text-xl mb-6">Services</h3>
            <ul className="text-base text-gray-400 space-y-3">
              <li>
                <Link href="/services#houses" className="hover:text-white transition-colors duration-300">
                  Design of Houses
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="hover:text-white transition-colors duration-300">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services#exterior" className="hover:text-white transition-colors duration-300">
                  Exterior Design
                </Link>
              </li>
              <li>
                <Link href="/services#furniture" className="hover:text-white transition-colors duration-300">
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link href="/services#public" className="hover:text-white transition-colors duration-300">
                  Design of Public Objects
                </Link>
              </li>
              <li>
                <Link href="/services#construction" className="hover:text-white transition-colors duration-300">
                  Construction
                </Link>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <h3 className="text-lg md:text-xl mb-6">Follow Us</h3>
          </AnimatedSection>
        </div>

        <div className="text-center text-base text-gray-600">
          <AnimatedSection animation="fade-in" delay={400}>
            ©2025 woodyork. All rights reserved - Produced by voxlabs
          </AnimatedSection>
        </div>
      </footer>
    </main>
  )
}
