"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const ease = [0.22, 1, 0.36, 1] as const

type FadeInViewProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number | "some" | "all"
  as?: "div" | "section" | "li"
  id?: string
  "aria-labelledby"?: string
}

export function FadeInView({
  children,
  className,
  delay = 0,
  y = 22,
  amount = 0.12,
  as = "div",
  id,
  "aria-labelledby": ariaLabelledBy,
}: FadeInViewProps) {
  const reduce = useReducedMotion()
  const Tag = as === "section" ? motion.section : as === "li" ? motion.li : motion.div
  if (reduce) {
    if (as === "section") {
      return (
        <section id={id} aria-labelledby={ariaLabelledBy} className={className}>
          {children}
        </section>
      )
    }
    if (as === "li") {
      return (
        <li className={className}>
          {children}
        </li>
      )
    }
    return (
      <div id={id} aria-labelledby={ariaLabelledBy} className={className}>
        {children}
      </div>
    )
  }
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </Tag>
  )
}

type ScaleFadeInViewProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/** Cards / tiles: slight scale + fade */
export function ScaleFadeInView({ children, className, delay = 0 }: ScaleFadeInViewProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
