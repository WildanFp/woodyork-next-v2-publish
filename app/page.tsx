"use client";

import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnimatedSection } from "@/components/animated-section";
import { HoverCard } from "@/components/hover-card";
import BlurText from "./components/BlurText/BlurText";
import ShinyText from "./components/ShinyText/ShinyText";
import CountUp from "./components/CountUp/CountUp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ImageComparison from "@/components/ui/compare";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('DSC01402.jpg')",
        }}
      >
        <header className="p-6 flex justify-between items-center bg-black bg-opacity-90">
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

        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* <AnimatedSection animation="scale-in">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-amber-300 flex items-center justify-center mb-10 shadow-[0_0_15px_rgba(217,119,6,0.3)]">
              <span className="text-amber-300 text-7xl md:text-8xl font-serif">
                W.
              </span>
            </div>
          </AnimatedSection> */}
          <span>
            <BlurText
              text="we're welcoming you always."
              delay={200}
              animateBy="words"
              direction="top"
              className="text-2xl md:text-5xl mb-8"
            />
          </span>

          <AnimatedSection animation="fade-in" delay={0}>
            <Link
              href="/projects"
              className="btn btn-secondary hover-lift text-base py-1 px-3 rounded-lg"
            >
              <ShinyText
                text="Explore Projects"
                disabled={false}
                speed={3}
                className="shiny-text"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <AnimatedSection animation="slide-in-left">
          <h2 className="uppercase text-base md:text-lg mb-10 tracking-widest">
            About <span className="font-medium">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatedSection animation="fade-in">
            <div className="overflow-hidden rounded-sm">
              <video width="780" height="480" controls>
                <source src="/CP.mp4" type="video/mp4" />
                Browser kamu tidak mendukung format video ini.
              </video>
            </div>
          </AnimatedSection>

          <div className="flex flex-col justify-center">
            <AnimatedSection animation="slide-in-right" className="mb-8">
              <h3 className="text-2xl md:text-3xl mb-4">Hello.</h3>
              <p className="text-base md:text-lg text-gray-400 mb-6">
                Welcome to woodyork.
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                woodyork adalah studio desain interior serta eksterior yang
                menghadirkan ruang estetis dan fungsional. Sejak 2018, sebagai
                vendor yang memiliki pengalaman bekerja secara profesional di
                bidang manufaktur furnitur dan konstruksi interior untuk
                perumahan, perkantoran, hotel dan ruang komersial, kami selalu
                mendukung untuk mewujudkan imajinasi klien yang sesuai dengan
                gaya dan kebutuhan. Karena kami percaya bahwa setiap ruang punya
                cerita, dan kami ada untuk membuat cerita itu hidup dengan
                desain yang personal dan harmonis.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="flex gap-16 mt-6">
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-light">
                    <CountUp
                      from={0}
                      to={120}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </h3>
                  <p className="text-base md:text-lg text-gray-500">
                    projects finished
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-light">
                    <CountUp
                      from={0}
                      to={60}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </h3>
                  <p className="text-base md:text-lg text-gray-500">
                    projects in progress
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <AnimatedSection animation="fade-in">
            <h3 className="text-base md:text-lg mb-0 tracking-widest">
              Kata Mereka tentang woodyork:
            </h3>
          </AnimatedSection>
          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-10">
          <h2>
            <span className="uppercase text-base md:text-lg tracking-widest">
              OUR{" "}
            </span>
            <span className="uppercase text-base md:text-lg font-light italic tracking-widest">
              SERVICES
            </span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {[
            "DESIGN OF HOUSES",
            "INTERIOR DESIGN",
            "EXTERIOR DESIGN",
            "CUSTOM FURNITURE",
            "DESIGN OF PUBLIC OBJECTS",
            "CONSTRUCTION",
          ].map((service, i) => (
            <AnimatedSection
              key={i}
              animation="slide-in-right"
              delay={i * 100}
              className="border-b border-zinc-800 py-6 hover:border-zinc-600 transition-colors duration-300"
            >
              <h3 className="text-base md:text-lg font-light uppercase tracking-wider">
                {service}
              </h3>
            </AnimatedSection>
          ))}

          <AnimatedSection
            animation="fade-in"
            delay={600}
            className="flex justify-center mt-10"
          >
            <Link
              href="/services"
              className="btn btn-secondary hover-lift text-base md:text-lg"
            >
              Explore Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2>
            <span className="uppercase text-base md:text-lg font-light italic tracking-widest">
              FEATURED{" "}
            </span>
            <span className="uppercase text-base md:text-lg tracking-widest">
              PROJECT
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection
            animation="slide-in-left"
            className="relative overflow-hidden rounded-sm"
          >
            <div className="absolute top-6 left-6 bg-black/70 text-base px-3 py-1 z-10">
              Design
            </div>
            <Image
              src="https://res.cloudinary.com/dec19xsoi/image/upload/v1745764083/DSC06118_nihkv7.jpg"
              width={500}
              height={300}
              alt="Project before"
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in-right"
            className="relative overflow-hidden rounded-sm"
          >
            <div className="absolute top-6 left-6 bg-black/70 text-base px-3 py-1 z-10">
              Reality
            </div>
            <Image
              src="/DSC01862.jpg?height=200&width=500"
              width={500}
              height={300}
              alt="Project after"
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Modern Luxury", subtitle: "Interior Design" },
            { title: "Modern Minimalist", subtitle: "Interior Design" },
            { title: "Japanese Minimalist", subtitle: "Interior Design" },
          ].map((project, i) => (
            <AnimatedSection key={i} animation="fade-in" delay={i * 200}>
              <HoverCard
                hoverContent={
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-amber-300 flex items-center justify-center">
                    <span className="text-amber-300 text-2xl md:text-3xl font-serif">
                      W.
                    </span>
                  </div>
                }
              >
                <div className="relative cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt={project.title}
                    className="w-full h-auto rounded-sm"
                  />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-lg md:text-xl font-medium">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          animation="fade-in"
          delay={600}
          className="flex justify-center"
        >
          <Link
            href="/projects"
            className="btn btn-secondary hover-lift text-base md:text-lg"
          >
            View All Projects
          </Link>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <AnimatedSection animation="slide-in-left" className="mb-10">
          <h2>
            <span className="uppercase text-base md:text-lg tracking-widest">
              Contact{" "}
            </span>
            <span className="uppercase text-base md:text-lg font-medium tracking-widest">
              Us
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin className="w-8 h-8 mb-5" />,
              title: "Visit Us",
              content: (
                <p className="text-base text-gray-400">
                  Jalan Pemuda Raya
                  <br />
                  Kav. 15 Blok 23A, 203
                  <br />
                  Kelapa Gading, 14240
                </p>
              ),
            },
            {
              icon: <Phone className="w-8 h-8 mb-5" />,
              title: "Call Us",
              content: (
                <p className="text-base text-gray-400">+62 812 3456 7890</p>
              ),
            },
            {
              icon: <Instagram className="w-8 h-8 mb-5" />,
              title: "Our Instagram",
              content: <p className="text-base text-gray-400">@woodyork</p>,
            },
            {
              icon: <Mail className="w-8 h-8 mb-5" />,
              title: "Email Us",
              content: (
                <p className="text-base text-gray-400">woodyork@gmail.com</p>
              ),
            },
          ].map((item, i) => (
            <AnimatedSection key={i} animation="fade-in" delay={i * 150}>
              <div className="card hover-lift card-hover">
                {item.icon}
                <h3 className="text-lg md:text-xl mb-3">{item.title}</h3>
                {item.content}
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
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-7 h-7" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center text-base text-gray-600">
          <AnimatedSection animation="fade-in" delay={400}>
            ©2023 woodyork. All rights reserved - Produced by voxlabs
          </AnimatedSection>
        </div>
      </footer>
    </main>
  );
}

const testimonials = [
  {
    quote:
      "“My favorite interior designer. Always giving the best quality of result”",
    name: "Mrs. Farida (madura)",
    title: "",
  },
  {
    quote:
      "“kak yaampun…gak expect bakal sebagus ini, kenapa kita gakenal dari dulu yaa, gak bayangin kalo interiorku yang lain, kakak yang kerjain dari awal”",
    name: " Mrs. Anggraini (sidoarjo)",
    title: "",
  },
  {
    quote: " “wow…inilah design yang aku mau”",
    name: " Mrs. titiya (surabaya)",
    title: "",
  },
  {
    quote:
      "“ka tencu yaa, that very surprising buat decornya, overal aku suka dari design sama reality gk jauh beda trus make sure disetiap detail furniture hampir gk ada cela, walaupun akunya yg sering rewel but so sorry ya ka”",
    name: " Mrs. kristy (Malang)",
    title: "",
  },
  {
    quote: "“aahh bagus, cek jangan sampai ada yang lecet”",
    name: "Mrs. ocha (Sidoarjo)",
    title: "",
  },
  {
    quote: " “cuaaakep….aaaaa bagus”",
    name: " Mrs. Aghnia (malang)",
    title: "",
  },
];
