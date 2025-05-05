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
        </nav>
        <div className="md:hidden text-xs">menu</div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dec19xsoi/image/upload/v1745898488/DSC01487_vrcptr.jpg?height=800&width=1600"
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
            Ciptakan <span className="font-normal">Ruang</span>
            <br />
            <span className="italic">Impianmu Sekarang</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Woodyork siap mewujudkan beragam kebutuhan ruang yang dirancang
            khusus untukmu.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Desain Rumah",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885663/mrs._nita_1_alt_2_emx4yl.jpg?height=300&width=400",
              description:
                "Rancangan konsep rumah modern yang disesuaikan dengan desain menyesuaikan kebutuhan dan estetika.",
            },
            {
              title: "Desain Interior",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883926/b4_wsvy8m.png?height=300&width=400",
              description:
                "Tata ruang interior rumah yang harmonis dan nyaman, mencerminan karakter serta kebutuhan klien.",
            },
            {
              title: "Desain Eksterior",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771013/G_dea5di.png?height=300&width=400",
              description:
                "Desain yang memperkuat tampilan eksterior properti secara menyeluruh.",
            },
            {
              title: "Kustom Furnitur",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770474/F2_qbezpq.png?height=300&width=400",
              description:
                "Personalisasi perlengkapan atau perabotan rumah sesuai ukuran, fungsi, dan gaya ruang.",
            },
            {
              title: "Desain Objek Publik",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771560/F11_dlmqfy.png?height=300&width=400",
              description:
                "Desain khusus ruang publik dan area komersial yang estetis, ramah pengguna, dan tahan lama.",
            },
            {
              title: "Konstruksi & Manufaktur",
              image:
                "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771459/J9_e0ctut.png?height=300&width=400",
              description:
                "Konstruksi interior dan eksterior profesional untuk hunian, kantor, hotel, hingga ruang usaha.",
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
