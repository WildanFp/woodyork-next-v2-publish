"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

const workflowSteps = [
  {
    id: 1,
    title: "Konsultasi",
    description: [
      "Pada tahap pertama interior design, kami akan mendengarkan kebutuhan client dan menuangkannya ke dalam konsep design serta layout. tidak cuman itu, lalu diperlukan juga survey lapangan untuk pengukuran, supaya memiliki gambaran ruang yang jelas dalam mendesign.",
      "Di tahap ini kami akan mengajukan banyak pertanyaan sesuai ekspektasi klien dan memberikan contoh design untuk memberikan gambaran klien supaya tergambarkan contoh design yang sesuai dengan minat klien.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Design",
    description: [
      "Pada tahap kedua, kami akan membuat konsep desain berdasarkan kebutuhan dan preferensi yang telah diidentifikasi pada tahap konsultasi.",
      "Tim desainer kami akan mengembangkan sketsa awal, mood board, dan visualisasi 3D untuk memberikan gambaran yang jelas tentang proyek. Kami akan melakukan revisi sesuai dengan feedback Anda hingga desain final disetujui.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Gambar Kerja",
    description: [
      "Pada tahap ketiga, kami akan mengembangkan gambar kerja detail yang akan digunakan sebagai panduan konstruksi.",
      "Gambar kerja ini mencakup denah, potongan, detail konstruksi, spesifikasi material, dan informasi teknis lainnya yang diperlukan untuk implementasi yang tepat dari desain yang telah disetujui.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "RAB",
    description: [
      "Pada tahap keempat, kami akan menyusun Rencana Anggaran Biaya (RAB) yang komprehensif untuk proyek Anda.",
      "RAB ini mencakup biaya material, tenaga kerja, dan biaya lainnya yang terkait dengan implementasi desain. Kami akan memastikan transparansi penuh dalam penganggaran dan membantu Anda memahami setiap komponen biaya.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Konstruksi & Instalasi",
    description: [
      "Pada tahap kelima, kami akan melaksanakan konstruksi dan instalasi sesuai dengan desain dan spesifikasi yang telah disetujui.",
      "Tim konstruksi kami yang berpengalaman akan bekerja dengan teliti dan efisien untuk mewujudkan desain Anda. Kami akan melakukan pengawasan ketat untuk memastikan kualitas dan kesesuaian dengan desain original.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Serah Terima",
    description: [
      "Pada tahap final, kami akan melakukan serah terima proyek yang telah selesai.",
      "Kami akan melakukan inspeksi akhir bersama Anda untuk memastikan semua aspek proyek telah sesuai dengan ekspektasi. Kami juga akan memberikan panduan perawatan dan dukungan pasca-proyek untuk memastikan kepuasan jangka panjang Anda.",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
];

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            <span className="font-light">Our </span>
            <span className="font-medium">Workflow</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            berikut beberapa tahap yang akan team woody
            <br />
            lakukan untuk mewujudkan impian kamu.
          </p>
        </AnimatedSection>

        {/* Workflow Steps */}
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-16 mb-20">
          {workflowSteps.map((step) => (
            <AnimatedSection
              key={step.id}
              animation="fade-in"
              delay={(step.id - 1) * 100}
            >
              <button
                onClick={() => setActiveStep(step.id)}
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 ${
                  activeStep === step.id
                    ? "border-amber-300"
                    : "border-zinc-700"
                } flex items-center justify-center transition-all duration-300 hover:border-amber-200`}
              >
                <span
                  className={`text-2xl md:text-3xl ${
                    activeStep === step.id ? "text-amber-300" : "text-white"
                  } transition-colors duration-300`}
                >
                  {step.id}
                </span>
                <div className="absolute -bottom-10 text-center w-full">
                  <span
                    className={`text-base md:text-lg ${
                      activeStep === step.id
                        ? "text-amber-300"
                        : "text-gray-400"
                    } transition-colors duration-300`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-10 mb-16">
          <button
            onClick={() =>
              setActiveStep((prev) =>
                prev === 1 ? workflowSteps.length : prev - 1
              )
            }
            className="w-14 h-14 border border-zinc-700 flex items-center justify-center hover:border-white transition-colors text-xl"
            aria-label="Previous step"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActiveStep((prev) =>
                prev === workflowSteps.length ? 1 : prev + 1
              )
            }
            className="w-14 h-14 border border-zinc-700 flex items-center justify-center hover:border-white transition-colors text-xl"
            aria-label="Next step"
          >
            →
          </button>
        </div>

        {/* Step Content */}
        {workflowSteps
          .filter((step) => step.id === activeStep)
          .map((step) => (
            <div
              key={step.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <AnimatedSection
                animation="slide-in-left"
                className="relative h-80 md:h-96 order-1 md:order-none"
              >
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </AnimatedSection>
              <AnimatedSection animation="slide-in-right" className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  {step.title}
                </h3>
                {step.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </AnimatedSection>
            </div>
          ))}
      </div>
    </section>
  );
}
