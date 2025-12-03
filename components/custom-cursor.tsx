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
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-blue-400 pointer-events-none z-50 mix-blend-screen"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-screen"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
