"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import CardNav from "@/components/CardNav"
import { BrandMark } from "@/components/portfolio/brand-mark"
import { LinkedInIcon } from "@/components/portfolio/portfolio-icons"
import { homeCardNavItems } from "@/config/home-card-nav-items"
import { siteLinks } from "@/config/site-links"

/** Same horizontal width as `<main>` sections on the home page. */
const homeMainContentWidthClass =
  "mx-auto w-[min(1200px,calc(100%-40px))] min-[721px]:w-[min(1200px,calc(100%-48px))] min-[1101px]:w-[min(1200px,calc(100%-120px))]"

const flatNavLinks = homeCardNavItems.flatMap((section) => section.links)

export function HomeSiteHeader() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <header
        className="relative mx-auto w-full max-w-[1440px] pb-6 pt-5"
        role="banner"
      >
        <div className={`flex flex-col gap-5 ${homeMainContentWidthClass}`}>
          <div className="flex items-center justify-between gap-4">
            <Link href={siteLinks.home} className="inline-flex shrink-0 text-white" aria-label="Kitty Li home">
              <BrandMark className="size-12 min-[721px]:size-14 min-[1101px]:size-[52px]" />
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
          </div>
          <nav aria-label="Site" className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#2a2a2a] pt-5">
            {flatNavLinks.map((l) => (
              <Link
                key={`${l.href}-${l.label}`}
                href={l.href}
                className="text-[15px] font-medium text-[#c8c8c8] underline-offset-4 hover:text-white hover:underline"
                aria-label={l.ariaLabel}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      className="relative mx-auto min-h-[104px] w-full max-w-[1440px] pb-6 pt-5 min-[721px]:min-h-[120px] min-[1101px]:min-h-[150px]"
      role="banner"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={homeMainContentWidthClass}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <CardNav
          renderLogo={
            <Link href={siteLinks.home} className="inline-flex text-white" aria-label="Kitty Li home">
              <BrandMark className="h-7 w-7 min-[721px]:h-8 min-[721px]:w-8" />
            </Link>
          }
          items={homeCardNavItems}
          linkedInHref={siteLinks.linkedIn}
          linkedInAriaLabel="LinkedIn profile"
          baseColor="#1b1b1b"
          menuColor="#f5f5f5"
        />
      </motion.div>
    </motion.header>
  )
}
