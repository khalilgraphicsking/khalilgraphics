"use client"

import { motion, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile, x, y])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-50"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  )
}
