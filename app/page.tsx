"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Facebook, Bean as Behance } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingShapes from "@/components/floating-shapes"
import ProjectGallery from "@/components/project-gallery"
import WorkflowProcess from "@/components/workflow-process"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-50 cursor-default">
      <CustomCursor />
      <FloatingShapes />

      <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Khalil
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Graphics</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#work" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              Work
            </Link>
            <Link href="#expertise" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              Expertise
            </Link>
            <Link href="#about" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <a href="https://www.linkedin.com/in/khalilgraphics/" target="_blank" rel="noopener noreferrer">
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="md:hidden relative z-50">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer block p-2 rounded-md hover:bg-zinc-800">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </label>
            <div className="fixed inset-0 bg-zinc-900/95 translate-x-full peer-checked:translate-x-0 transition-transform duration-300 flex flex-col items-center justify-center">
              <label htmlFor="menu-toggle" className="absolute top-4 right-4 p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </label>
              <div className="flex flex-col items-center gap-8 text-xl">
                <Link
                  href="#work"
                  className="text-zinc-200 hover:text-white transition-colors"
                  onClick={() => ((document.getElementById("menu-toggle") as HTMLInputElement).checked = false)}
                >
                  Work
                </Link>
                <Link
                  href="#expertise"
                  className="text-zinc-200 hover:text-white transition-colors"
                  onClick={() => ((document.getElementById("menu-toggle") as HTMLInputElement).checked = false)}
                >
                  Expertise
                </Link>
                <Link
                  href="#about"
                  className="text-zinc-200 hover:text-white transition-colors"
                  onClick={() => ((document.getElementById("menu-toggle") as HTMLInputElement).checked = false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-zinc-200 hover:text-white transition-colors"
                  onClick={() => ((document.getElementById("menu-toggle") as HTMLInputElement).checked = false)}
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <a href="https://www.linkedin.com/in/khalilgraphics/" target="_blank" rel="noopener noreferrer">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="relative pt-32 md:pt-40 lg:pt-48 pb-24">
          <motion.div
            className="container relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                MD Ibrahim
                <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Khalil
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-zinc-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Visual Identity Specialist | Turning Your Business Ideas into Professional Print and Digital Assets |
                700+ Happy Clients Worldwide | 6yrs Exp
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <Link href="#work">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <a href="https://www.linkedin.com/in/khalilgraphics/" target="_blank" rel="noopener noreferrer">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="expertise" className="py-24 relative">
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Specialized in creating impactful visual solutions for brands and businesses.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Social Media Design",
                  description:
                    "Developing eye-catching content for social platforms that drives engagement and brand awareness.",
                },
                {
                  title: "Brand Identity",
                  description:
                    "Creating memorable brand identities through logo design, visual systems, and brand guidelines.",
                },
                {
                  title: "Print Design",
                  description: "Designing impactful print materials from business cards to marketing collateral.",
                },
                {
                  title: "Visual Design",
                  description: "Communicating brand narratives through compelling visual content and storytelling.",
                },
                {
                  title: "Digital Graphics",
                  description: "Creating engaging visuals for web and digital marketing campaigns.",
                },
                {
                  title: "Video Editing",
                  description: "Crafting compelling video content that captures attention and delivers your message.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 relative">
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                A selection of my latest design projects and creative solutions.
              </p>
            </motion.div>
            <ProjectGallery />
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container relative z-10">
            <WorkflowProcess />
          </div>
        </section>

        <section id="about" className="py-24 relative">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center"
              >
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px]">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-[10px] gradient-border"></div>

                  {/* Image container */}
                  <div className="absolute inset-[3px] rounded-[8px] overflow-hidden bg-zinc-900">
                    <Image
                      src="/images/md-ibrahim-khalil-portrait.png"
                      alt="About Me - MD Ibrahim Khalil"
                      fill
                      className="object-cover scale-110"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-zinc-400 mb-6">
                  I'm a passionate graphic designer with a focus on creating impactful visual solutions that help brands
                  connect with their audience. With expertise in brand identity, UI/UX design, and visual storytelling,
                  I bring creativity and strategic thinking to every project.
                </p>
                <div className="grid gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Adobe Creative Suite (Photoshop, Illustrator, XD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>UI/UX Design (Figma, Sketch)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Social Media Design & Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>Brand Strategy & Visual Identity Design</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <a href="https://www.linkedin.com/in/khalilgraphics/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 relative">
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-zinc-400">ik360designer@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/khalilgraphics.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.behance.net/khalilgraphics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                  >
                    <Behance className="w-6 h-6" />
                    <span className="sr-only">Behance</span>
                  </Link>
                  <Link
                    href="https://wa.me/8801537342454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center gap-6 p-4 md:p-8"
              >
                <div className="p-8 md:p-12 rounded-lg border border-green-600/50 bg-green-900/10 text-center space-y-4">
                  <h3 className="text-lg md:text-xl font-bold">Quick Contact</h3>
                  <p className="text-zinc-400">Message me directly on WhatsApp for faster response</p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-base"
                  >
                    <a href="https://wa.me/8801537342454" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      </svg>
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} KhalilGraphics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-zinc-400 hover:text-zinc-50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
