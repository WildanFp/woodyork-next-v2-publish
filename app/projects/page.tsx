import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectFilter } from "@/components/project-filter";
import {
  getAllProjects,
  getProjectsByCategory,
  getProjectsBySubcategory,
} from "@/lib/projects";
import type { ProjectCategory, ProjectSubcategory } from "@/lib/projects";
import { Header } from "@/components/header";

interface SearchParams {
  category?: string;
  subcategory?: string;
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Get filtered projects based on URL parameters
  let filteredProjects = getAllProjects();

  // In Next.js 14+, we need to handle searchParams as a regular object
  // We don't need to await it in this case, but we need to be careful with how we access it
  const category = searchParams?.category || null;
  const subcategory = searchParams?.subcategory || null;

  if (category && (category === "commercial" || category === "residential")) {
    const categoryTyped = category as ProjectCategory;

    if (subcategory) {
      filteredProjects = getProjectsBySubcategory(
        categoryTyped,
        subcategory as ProjectSubcategory
      );
    } else {
      filteredProjects = getProjectsByCategory(categoryTyped);
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Navigation */}
      <Header/>
      {/* <header className="p-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-light">
          woodyork
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-amber-300 hover:text-amber-200 transition"
          >
            projects
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-white transition"
          >
            services
          </Link>
        </nav>
        <div className="md:hidden text-xs">menu</div>
      </header> */}

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/16.png?height=800&width=1600"
            alt="Interior design showcase"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <AnimatedSection
          animation="fade-in"
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            <span className="italic">Our</span>{" "}
            <span className="font-normal">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore our portfolio of innovative designs and creative solutions
          </p>
        </AnimatedSection>
      </section>

      {/* Project Filters */}
      <ProjectFilter
        initialCategory={category || ""}
        initialSubcategory={subcategory || ""}
      />

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimatedSection
              key={project.id}
              animation="fade-in"
              className="hover-lift"
            >
              <div className="bg-zinc-950 overflow-hidden group h-full">
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-xs md:text-sm px-3 py-1 rounded-sm">
                    {project.category === "residential"
                      ? "Residential"
                      : "Commercial"}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col items-start h-[calc(100%-18rem)]">
                  <div className="mb-2">
                    <span className="text-amber-300 text-sm md:text-base">
                      {project.subcategory
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {project.location}
                  </p>
                  <Link
                    href={`/projects/${project.category}/${project.subcategory}/${project.id}`}
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
            <h3 className="uppercase text-lg md:text-xl mb-6 tracking-wider">
              woodyork.
            </h3>
            <p className="text-base text-gray-400 mb-3">
              We're welcoming you always.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={100}>
            <h3 className="text-lg md:text-xl mb-6">Quick links</h3>
            <ul className="text-base text-gray-400 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <h3 className="text-lg md:text-xl mb-6">Services</h3>
            <ul className="text-base text-gray-400 space-y-3">
              <li>
                <Link
                  href="/services#houses"
                  className="hover:text-white transition-colors duration-300"
                >
                  Design of Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/services#interior"
                  className="hover:text-white transition-colors duration-300"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#exterior"
                  className="hover:text-white transition-colors duration-300"
                >
                  Exterior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#furniture"
                  className="hover:text-white transition-colors duration-300"
                >
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/services#public"
                  className="hover:text-white transition-colors duration-300"
                >
                  Design of Public Objects
                </Link>
              </li>
              <li>
                <Link
                  href="/services#construction"
                  className="hover:text-white transition-colors duration-300"
                >
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
  );
}
