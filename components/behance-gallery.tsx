"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  name: string
  covers: {
    [key: string]: string
  }
  url: string
}

interface BehanceGalleryProps {
  username: string
}

export default function BehanceGallery({ username }: BehanceGalleryProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/behance?username=${username}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch projects")
        }

        // Use placeholder projects if no data is available
        if (!data?.projects?.length) {
          const placeholderProjects = Array(6)
            .fill(null)
            .map((_, index) => ({
              id: index,
              name: `Project ${index + 1}`,
              covers: { "404": "/placeholder.svg?height=400&width=600" },
              url: "https://www.behance.net/khalilgraphics",
            }))
          setProjects(placeholderProjects)
          return
        }

        setProjects(data.projects.slice(0, 6))
      } catch (error) {
        console.error("Error fetching Behance projects:", error)
        setError(error instanceof Error ? error.message : "Failed to fetch projects")

        // Set placeholder projects on error
        const placeholderProjects = Array(6)
          .fill(null)
          .map((_, index) => ({
            id: index,
            name: `Project ${index + 1}`,
            covers: { "404": "/placeholder.svg?height=400&width=600" },
            url: "https://www.behance.net/khalilgraphics",
          }))
        setProjects(placeholderProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [username])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video rounded-lg bg-zinc-800 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={project.covers["404"] || "/placeholder.svg"}
              alt={project.name}
              width={600}
              height={400}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-white font-bold">{project.name}</h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="border-zinc-800 hover:bg-zinc-800">
          <a
            href={`https://www.behance.net/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View All Projects on Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
