import Image from "next/image"
import Link from "next/link"
import { WorkflowSection } from "@/components/workflow-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Navigation */}
      <header className="p-6 flex justify-between items-center">
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
            className="text-gray-400 hover:text-white transition"
          >
            projects
          </Link>
          <Link
            href="/services"
            className="text-amber-300 hover:text-amber-200 transition"
          >
            services
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            contact
          </Link>
        </nav>
        <div className="md:hidden text-xs">menu</div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services.jpg?height=800&width=1600"
            alt="Interior design showcase"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <AnimatedSection
          animation="fade-in"
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            We <span className="font-normal">Create</span>
            <br />
            <span className="italic">Exceptional Spaces</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover our comprehensive range of interior design services
            <br />
            tailored to your needs
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Design Of Houses",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
            {
              title: "Interior Design",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
            {
              title: "Exterior Design",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
            {
              title: "Custom Furniture",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
            {
              title: "Design Of Public Objects",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
            {
              title: "Construction",
              image: "/placeholder.svg?height=300&width=400",
              description:
                "Transform your space with our comprehensive interior design services. We create harmonious environments that reflect your personality and lifestyle.",
            },
          ].map((service, i) => (
            <AnimatedSection
              key={i}
              animation="fade-in"
              delay={i * 100}
              className="hover-lift"
            >
              <div className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden h-full">
                <div className="relative h-56 md:h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <WorkflowSection />

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
