"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className="min-h-0 w-full flex-1">{children}</div>
  }
  return (
    <motion.div
      className="min-h-0 w-full flex-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
