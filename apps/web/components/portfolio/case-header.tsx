"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@workspace/ui/lib/utils"

import { BackChevronIcon } from "@/components/portfolio/portfolio-icons"

const MotionLink = motion(Link)

type CaseHeaderProps = {
  backHref: string
  backFallback: string
  ariaLabel: string
  className?: string
}

export function CaseHeader({ backHref, backFallback, ariaLabel, className }: CaseHeaderProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <header className={cn("case-header", className)} role="banner">
        <Link
          href={backHref}
          className="back-button"
          data-back-link
          data-back-fallback={backFallback}
          aria-label={ariaLabel}
        >
          <span className="back-arrow" aria-hidden="true">
            <BackChevronIcon />
          </span>
          <span className="back-label">Back</span>
        </Link>
      </header>
    )
  }

  return (
    <motion.header
      className={cn("case-header", className)}
      role="banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <MotionLink
          href={backHref}
          className="back-button"
          data-back-link
          data-back-fallback={backFallback}
          aria-label={ariaLabel}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 480, damping: 30 }}
        >
          <span className="back-arrow" aria-hidden="true">
            <BackChevronIcon />
          </span>
          <span className="back-label">Back</span>
        </MotionLink>
      </motion.div>
    </motion.header>
  )
}
