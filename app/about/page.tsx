import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function AboutPage() {
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Alexander Wright",
  //     position: "Founder & Principal Designer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Alexander brings over 15 years of experience in interior and architectural design. With a background in fine arts and architecture from the Royal College of Art, he founded woodyork with a vision to create spaces that blend functionality with artistic expression.",
  //     social: {
  //       instagram: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Sophia Chen",
  //     position: "Senior Interior Designer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Sophia specializes in creating harmonious living spaces that reflect the personality and lifestyle of each client. Her approach combines minimalist principles with warm, inviting elements that make spaces feel like home.",
  //     social: {
  //       instagram: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "Marcus Johnson",
  //     position: "Architectural Designer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Marcus focuses on the structural and spatial aspects of design, ensuring that every project is not only beautiful but also structurally sound and optimally functional. His background in engineering brings a technical precision to the creative process.",
  //     social: {
  //       instagram: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: "Olivia Patel",
  //     position: "Project Manager",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Olivia oversees the execution of projects from concept to completion, ensuring that every detail is perfectly implemented. Her meticulous attention to detail and excellent communication skills keep projects running smoothly and on schedule.",
  //     social: {
  //       instagram: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //   },
  // ]

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
            className="text-amber-300 hover:text-amber-200 transition"
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
            className="text-gray-400 hover:text-white transition"
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
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dec19xsoi/image/upload/v1745780247/DSC01402_f4lehw.jpg?height=800&width=1600"
            alt="Interior design studio"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="italic">About</span>{" "}
            <span className="font-normal">Us</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Karya yang Baik Dimulai dari Proses yang Dihargai
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-light mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Woodyork berdiri dengan komitmen untuk menghadirkan solusi
                  desain interior yang terintegrasi menggabungkan kreativitas
                  perancangan ruang dengan keahlian dalam pembuatan furnitur
                  custom. Kami memahami bahwa setiap ruang memiliki cerita, dan
                  tugas kami adalah menerjemahkan cerita tersebut menjadi desain
                  yang fungsional, estetis, dan sesuai dengan karakter klien.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Didirikan di Malang, Woodyork memulai perjalanannya dari skala
                  lokal, dengan fokus pada detail, kualitas, dan pendekatan yang
                  personal. Seiring waktu, kami berkembang menjadi studio yang
                  dipercaya menangani berbagai proyek, mulai dari hunian pribadi
                  hingga ruang komersial, di berbagai kota.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Keunggulan Woodyork terletak pada pendekatan desain yang
                  menyeluruh dimulai dari proses perencanaan ruang, visualisasi,
                  hingga pembuatan furnitur yang dirancang secara spesifik untuk
                  kebutuhan setiap proyek. Dengan tim desainer dan pengrajin
                  berpengalaman, kami memastikan bahwa setiap hasil akhir tidak
                  hanya menarik secara visual, tetapi juga nyaman dan fungsional
                  dalam jangka panjang.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <div className="overflow-hidden rounded-sm">
                <video width="780" height="480" controls>
                  <source
                    src="https://res.cloudinary.com/dec19xsoi/video/upload/v1745782420/CPC_wcel9f.mp4"
                    type="video/mp4"
                  />
                  Browser kamu tidak mendukung format video ini.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-normal mb-1 text-center ">
            “Karya yang Baik Dimulai dari Proses yang Dihargai”
          </h2>
          <h2 className="text-sm font-light mb-12 text-center">
            Motto ini mencerminkan filosofi kerja Woodyork: bahwa keindahan dan
            kualitas sebuah desain interior maupun furnitur tidak datang secara
            instan. Dibalik setiap karya yang memuaskan, ada proses panjang yang
            penuh pertimbangan, diskusi, revisi, dan perhatian terhadap detail.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-full border border-amber-300 flex items-center justify-center mb-6">
                <span className="text-amber-300 text-xl">1</span>
              </div>
              <h3 className="text-lg font-medium mb-4">
                Menghargai proses = menghargai klien.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Setiap proyek adalah perjalanan yang harus benar-benar mewakili
                kebutuhan dan keinginan klien.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-full border border-amber-300 flex items-center justify-center mb-6">
                <span className="text-amber-300 text-xl">2</span>
              </div>
              <h3 className="text-lg font-medium mb-4">
                Detail menentukan segalanya.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ukuran, material, tekstur, hingga pencahayaan semua diperhatikan
                dengan seksama.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-full border border-amber-300 flex items-center justify-center mb-6">
                <span className="text-amber-300 text-xl">3</span>
              </div>
              <h3 className="text-lg font-medium mb-4">
                Kualitas bukan kebetulan.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Hasil yang baik lahir dari proses yang matang, bukan dari
                sesuatu yang instan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-light mb-2">134</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-light mb-2">65</h3>
              <p className="text-sm text-gray-400">Projects in Progress</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-light mb-2">12</h3>
              <p className="text-sm text-gray-400">Design Awards</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-light mb-2">24</h3>
              <p className="text-sm text-gray-400">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-zinc-900 rounded-sm overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex gap-4 mb-4">
                      <Link href={member.social.instagram} className="text-white hover:text-amber-300 transition">
                        <Instagram className="w-5 h-5" />
                      </Link>
                      <Link href={member.social.linkedin} className="text-white hover:text-amber-300 transition">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link href={member.social.twitter} className="text-white hover:text-amber-300 transition">
                        <Twitter className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-200">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to redesign a single room or undertake a
            complete renovation, our team is ready to bring your vision to life.
            Let's create something exceptional together.
          </p>
          <Link
            href="/contact"
            className="border border-amber-300 text-amber-300 text-sm px-8 py-3 hover:bg-amber-300 hover:text-black transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center">Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-sm flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 mb-4 text-amber-300" />
              <h3 className="text-lg font-medium mb-2">Visit Our Studio</h3>
              <p className="text-sm text-gray-300">
                Perumahan Graha Pakis Permai, Blok C20, Malang, Jawa Timur
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-sm flex flex-col items-center text-center">
              <Phone className="w-8 h-8 mb-4 text-amber-300" />
              <h3 className="text-lg font-medium mb-2">Call Us</h3>
              <p className="text-sm text-gray-300"> +62 812 3095 2808</p>
              <p className="text-sm text-gray-300 mt-2">
                Monday - Friday: 9am - 6pm
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-sm flex flex-col items-center text-center">
              <Mail className="w-8 h-8 mb-4 text-amber-300" />
              <h3 className="text-lg font-medium mb-2">Email Us</h3>
              <p className="text-sm text-gray-300">woodyork.id@gmail.com</p>
              <p className="text-sm text-gray-300 mt-2">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 lg:px-16 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="uppercase text-sm mb-4">woodyork.</h3>
            <p className="text-xs text-gray-400 mb-2">
              We're welcoming you always.
            </p>
          </div>

          <div>
            <h3 className="text-sm mb-4">Quick links</h3>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4">Services</h3>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>
                <Link
                  href="/services#houses"
                  className="hover:text-white transition"
                >
                  Design of Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/services#interior"
                  className="hover:text-white transition"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#exterior"
                  className="hover:text-white transition"
                >
                  Exterior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#furniture"
                  className="hover:text-white transition"
                >
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/services#public"
                  className="hover:text-white transition"
                >
                  Design of Public Objects
                </Link>
              </li>
              <li>
                <Link
                  href="/services#construction"
                  className="hover:text-white transition"
                >
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600">
          ©2025 woodyork. All rights reserved - Produced by Voxlabs
        </div>
      </footer>
    </main>
  );
}
