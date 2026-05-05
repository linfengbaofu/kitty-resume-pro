import Link from "next/link"

import { BrandMark } from "@/components/portfolio/brand-mark"
import { siteLinks } from "@/config/site-links"
import { LinkedInIcon } from "@/components/portfolio/portfolio-icons"

export function HomeSiteHeader() {
  return (
    <header
      className="mx-auto flex h-[150px] w-full max-w-[1440px] items-center justify-between px-6 min-[1101px]:px-[60px]"
      role="banner"
    >
      <Link href={siteLinks.home} className="inline-flex shrink-0 text-white" aria-label="Kitty Li home">
        <BrandMark />
      </Link>
      <a
        href={siteLinks.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex size-[60px] items-center justify-center rounded-full border border-[#333] bg-[#1b1b1b] text-white transition hover:-translate-y-0.5 hover:border-[#ffcc02] hover:bg-[#222]"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
      </a>
    </header>
  )
}
