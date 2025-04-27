import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnimatedSection } from "@/components/animated-section";
import { getProjectById, getRelatedProjects } from "@/lib/projects";

interface ProjectDetailPageProps {
  params: {
    category: string;
    subcategory: string;
    id: string;
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  // Safely access params properties
  const id = params?.id;
  const category = params?.category;
  const subcategory = params?.subcategory;

  if (!id || !category || !subcategory) {
    notFound();
  }

  const project = getProjectById(id);

  // If project doesn't exist or category/subcategory don't match, return 404
  if (
    !project ||
    project.category !== category ||
    project.subcategory !== subcategory
  ) {
    notFound();
  }

  // Get related projects
  const relatedProjects = getRelatedProjects(project.id);

  // Format subcategory for display
  const formattedSubcategory = project.subcategory
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-black text-white min-h-screen">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Navigation */}
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
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-amber-300 hover:text-amber-200 transition-colors duration-300"
          >
            projects
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            services
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt={project.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <AnimatedSection
          animation="fade-in"
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="mb-4">
            <span className="text-amber-300 text-lg md:text-xl uppercase tracking-wider">
              {formattedSubcategory}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">{project.subtitle}</p>
        </AnimatedSection>
      </section>

      {/* Breadcrumbs */}
      <section className="py-6 px-4 md:px-8 lg:px-16 border-b border-zinc-900">
        <div className="flex items-center text-sm md:text-base text-gray-400">
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/projects?category=${project.category}`}
            className="hover:text-white transition-colors"
          >
            {project.category === "residential" ? "Residential" : "Commercial"}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/projects?category=${project.category}&subcategory=${project.subcategory}`}
            className="hover:text-white transition-colors"
          >
            {formattedSubcategory}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-amber-300">{project.title}</span>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <AnimatedSection animation="fade-in" className="mb-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Transformation
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection animation="slide-in-left" className="relative">
            <div className="absolute top-6 left-6 bg-black/70 text-base px-3 py-1 z-10">
              Design
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src={project.designImage || "/placeholder.svg"}
                alt="Design concept"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" className="relative">
            <div className="absolute top-6 left-6 bg-black/70 text-base px-3 py-1 z-10">
              Reality
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src={project.realityImage || "/placeholder.svg"}
                alt="Final result"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-in" className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Project Overview
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {project.description.map((paragraph, i) => (
                <AnimatedSection key={i} animation="fade-in" delay={i * 100}>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <AnimatedSection
              animation="slide-in-right"
              className="bg-zinc-900 p-8 rounded-sm"
            >
              <h3 className="text-xl md:text-2xl font-light mb-8">
                Project Information
              </h3>
              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Category</span>
                  <span className="text-base">
                    {project.category === "residential"
                      ? "Residential"
                      : "Commercial"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Type</span>
                  <span className="text-base">{formattedSubcategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Client</span>
                  <span className="text-base">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Location</span>
                  <span className="text-base">{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Area</span>
                  <span className="text-base">{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Duration</span>
                  <span className="text-base">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base text-gray-400">Completed</span>
                  <span className="text-base">{project.completed}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features & Materials */}
      {(project.features || project.materials) && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.features && (
              <AnimatedSection animation="fade-in">
                <h3 className="text-2xl md:text-3xl font-light mb-6">
                  Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-base md:text-lg text-gray-300 flex items-start"
                    >
                      <span className="text-amber-300 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            )}

            {project.materials && (
              <AnimatedSection animation="fade-in" delay={200}>
                <h3 className="text-2xl md:text-3xl font-light mb-6">
                  Materials
                </h3>
                <ul className="space-y-3">
                  {project.materials.map((material, i) => (
                    <li
                      key={i}
                      className="text-base md:text-lg text-gray-300 flex items-start"
                    >
                      <span className="text-amber-300 mr-2">•</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950">
        <AnimatedSection animation="fade-in" className="mb-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Project Gallery
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, i) => (
            <AnimatedSection
              key={i}
              animation="fade-in"
              delay={i * 100}
              className="hover-lift"
            >
              <div className="relative h-64 md:h-72 overflow-hidden rounded-sm">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Related Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <AnimatedSection
                key={relatedProject.id}
                animation="fade-in"
                className="hover-lift"
              >
                <div className="bg-zinc-950 overflow-hidden group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-xs md:text-sm px-3 py-1 rounded-sm">
                      {relatedProject.subcategory
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 text-center">
                      {relatedProject.title}
                    </h3>
                    <Link
                      href={`/projects/${relatedProject.category}/${relatedProject.subcategory}/${relatedProject.id}`}
                      className="border border-white/30 text-sm md:text-base px-5 py-2 hover:bg-white/10 transition-colors"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950 border-t border-zinc-900">
        <AnimatedSection
          animation="fade-in"
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            Let's create an exceptional space together. Contact us to discuss
            your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-amber-300 text-amber-300 text-base md:text-lg px-8 py-3 hover:bg-amber-300 hover:text-black transition-colors"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
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
