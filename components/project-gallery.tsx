"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Dutch Bangla Bank Social Media Design",
    description: "DBBL Creatives - Banking sector social media campaign",
    image: "/images/dbbl-project.png",
    url: "https://www.behance.net/gallery/216703447/Dutch-bangla-bank-social-Media-Design-DBBL-Creatives",
    category: "Social Media Design",
  },
  {
    id: 2,
    title: "Ensign T-shirt Social Media Design",
    description: "Product photography and social media creative design",
    image: "/images/ensign-project.png",
    url: "https://www.behance.net/gallery/185527121/Ensign-T-shirt-Social-Media-Design-and-Manipulation",
    category: "Product Design",
  },
  {
    id: 3,
    title: "Biohacking Products Social Media Ads",
    description: "Creative social media ads for Dubai-based biohacking products",
    image: "/images/biohackn-project.png",
    url: "https://www.behance.net/gallery/216017095/Biohacking-Products-Social-media-ads-creative-Dubai",
    category: "Social Media Ads",
  },
  {
    id: 4,
    title: "HireGummy Ads Creative Design",
    description: "Virtual assistant service marketing and promotional materials",
    image: "/images/project-four.png",
    url: "https://www.behance.net/gallery/223619391/HireGummy-Ads-Creative-Design-Virtual-Assistant",
    category: "Digital Advertising",
  },
  {
    id: 5,
    title: "Navita Brand Identity",
    description: "Minimalist logo design and brand identity development",
    image: "/images/project-five.png",
    url: "https://www.behance.net/gallery/148068225/Navita-Brand-Identity",
    category: "Brand Identity",
  },
  {
    id: 6,
    title: "Elite Communication Social Media Design",
    description: "Consistent brand messaging across various social platforms",
    image: "/images/project-six.png",
    url: "https://www.behance.net/gallery/182033387/Elite-Communication-Social-Media-Post-Design",
    category: "Social Media Marketing",
  },
]

export default function ProjectGallery() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="aspect-[808/632] relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={808}
                height={632}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 w-full p-6 space-y-2">
                <span className="text-sm text-blue-400">{project.category}</span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-zinc-300">{project.description}</p>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-sm">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="https://www.behance.net/khalilgraphics"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
        >
          View More Projects <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  )
}
