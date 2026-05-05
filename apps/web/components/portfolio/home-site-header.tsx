"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { BrandMark } from "@/components/portfolio/brand-mark"
import { siteLinks } from "@/config/site-links"
import { LinkedInIcon } from "@/components/portfolio/portfolio-icons"

export function HomeSiteHeader() {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <header
        className="mx-auto flex h-[104px] w-full max-w-[1440px] items-center justify-between px-5 min-[721px]:h-[120px] min-[721px]:px-10 min-[1101px]:h-[150px] min-[1101px]:px-[60px]"
        role="banner"
      >
        <Link href={siteLinks.home} className="inline-flex shrink-0 text-white" aria-label="Kitty Li home">
          <BrandMark />
        </Link>
        <a
          href={siteLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-12 min-[721px]:size-14 min-[1101px]:size-[60px] items-center justify-center rounded-full border border-[#333] bg-[#1b1b1b] text-white transition hover:-translate-y-0.5 hover:border-[#ffcc02] hover:bg-[#222] active:scale-[0.97]"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon />
        </a>
      </header>
    )
  }

  return (
    <motion.header
      className="mx-auto flex h-[104px] w-full max-w-[1440px] items-center justify-between px-5 min-[721px]:h-[120px] min-[721px]:px-10 min-[1101px]:h-[150px] min-[1101px]:px-[60px]"
      role="banner"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href={siteLinks.home} className="inline-flex shrink-0 text-white" aria-label="Kitty Li home">
          <BrandMark />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.a
          href={siteLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-12 min-[721px]:size-14 min-[1101px]:size-[60px] items-center justify-center rounded-full border border-[#333] bg-[#1b1b1b] text-white transition hover:-translate-y-0.5 hover:border-[#ffcc02] hover:bg-[#222]"
          aria-label="LinkedIn profile"
          whileTap={{ scale: 0.95 }}
        >
          <LinkedInIcon />
        </motion.a>
      </motion.div>
    </motion.header>
  )
}
