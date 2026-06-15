import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { ProjectFilter } from "@/components/project-filter"
import { getAllProjects } from "@/lib/projects"
import { Header } from "@/components/header"

interface SearchParams {
  category?: string
  subcategory?: string
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  // Redirect old query-based URLs to new path-based URLs
  const resolvedSearchParams = await searchParams
  const category = resolvedSearchParams?.category
  const subcategory = resolvedSearchParams?.subcategory

  if (category && (category === "commercial" || category === "residential")) {
    if (subcategory) {
      // Convert subcategory with hyphens to match URL format (remove hyphens for compound words)
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
      redirect(`/projects/${category}/${urlSubcategory}`)
    } else {
      redirect(`/projects/${category}`)
    }
  }

  // Show all projects by default
  const filteredProjects = getAllProjects()

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
      <ProjectFilter initialCategory="" initialSubcategory="" />

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
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
