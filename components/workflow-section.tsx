"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

const workflowSteps = [
  {
    id: 1,
    title: "Konsultasi",
    description: [
      "Di tahap awal ini, kami ingin mengenal cerita ruang yang ingin klien bangun. Kami akan menyesuaikan dengan gaya hidup, selera desain, hingga fungsi ruang yang klien butuhkan. Semua agar konsep yang kami rancang nanti benar-benar terasa personal dan sesuai ekspetasi klien. Proses ini biasanya dilengkapi juga dengan survei lokasi agar kami punya gambaran akurat soal dimensi dan karakter ruang.",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745898490/DSC01486_cvq12x.jpg?height=400&width=600",
  },
  {
    id: 2,
    title: "Design",
    description: [
      "Setelah informasi pada tahap awal sudah kami dapatkan, kami akan proses ke dalam konsep visual. Mulai dari moodboard, pemilihan warna, material, hingga tata letak ruang. Desain kami buat agar tidak hanya enak dipandang, tapi juga nyaman digunakan setiap hari. Estetika, fungsi, dan personalitas klien jadi satu kesatuan yang selaras.",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745762879/16_ucexo5.png?height=400&width=600",
  },
  {
    id: 3,
    title: "Gambar Kerja",
    description: [
      "Desain yang sudah disetujui akan kami olah jadi gambar teknis yang detail, dari denah, potongan, hingga visualisasi 3D. Gambar kerja ini jadi acuan penting saat tim konstruksi bekerja di lapangan, supaya hasil akhirnya sesuai ekspektasi dan tidak ada elemen yang terlewat.",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745899279/COMPANY_PROFILE_WOODYORK_2024_page-0014_gwbael.jpg?height=400&width=600",
  },
  {
    id: 4,
    title: "RAB",
    description: [
      "Sebelum pengerjaan dimulai, kami susun rencana anggaran secara transparan dan realistis. Semua biaya mulai dari jasa desain interior atau eksterior, bahan material, pembuatan furnitur custom, sampai pemasangan kami rinci jelas. Supaya klien bisa tenang dan leluasa menentukan pilihan yang paling cocok dengan perencanaan. ",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745898871/closeup-shot-entrepreneur-working-from-home-his-personal-finances-savings_rwtmkj.jpg?height=400&width=600",
  },
  {
    id: 5,
    title: "Konstruksi & Instalasi",
    description: [
      "Pada tahap ini, tim kami mulai membangun atau memproduksi hingga memasang tiap elemen sesuai gambar kerja. Proses ini kami jalankan dengan teliti, karena setiap detail akan membentuk suasana yang klien impikan. Mulai dari struktur dasar, finishing, hingga instalasi akhir. ",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745762852/RK5_nrzvkh.png?height=400&width=600",
  },
  {
    id: 6,
    title: "Serah Terima",
    description: [
      "Setelah semua tahapan selesai, kami akan melakukan final check untuk memastikan semuanya berjalan sesuai rencana. Ruang yang dulu hanya jadi gambaran, sekarang hadir nyata dan siap digunakan.",
    ],
    image:
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745898488/DSC01487_vrcptr.jpg?height=400&width=600",
  },
];

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            <span className="font-medium">Proses </span>
            <span className="font-light">dan Alur Kerja</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            berikut beberapa tahap yang akan team woodyork
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
                  className={`text-1xl md:text-3xl ${
                    activeStep === step.id ? "text-amber-300" : "text-white"
                  } transition-colors duration-300`}
                >
                  {step.id}
                </span>
                <div className="absolute -bottom-10 text-center w-full">
                  <span
                    className={`text-base md:text-ls ${
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
