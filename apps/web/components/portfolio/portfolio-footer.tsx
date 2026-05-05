"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@workspace/ui/lib/utils"

import { BrandMark } from "@/components/portfolio/brand-mark"
import { siteLinks } from "@/config/site-links"
import { FooterArrowIcon } from "@/components/portfolio/portfolio-icons"

type PortfolioFooterProps = {
  className?: string
}

const ease = [0.22, 1, 0.36, 1] as const

export function PortfolioFooter({ className }: PortfolioFooterProps) {
  const reduce = useReducedMotion()
  const content = (
    <>
      <hr className="footer-rule" />
      <div className="footer-row">
        <div className="footer-brand">
          <Link href={siteLinks.home} className="brand-mark" aria-label="Kitty Li home">
            <BrandMark />
          </Link>
          <p className="footer-meta">
            Seattle, WA
            <br />© Kitty Li
          </p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">SITE MAP</p>
            <Link className="footer-link" href={siteLinks.homeWorks}>
              Works
            </Link>
            <Link className="footer-link" href={siteLinks.homeResume}>
              Resume
            </Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">LINKS</p>
            <a
              className="footer-link footer-link--external"
              href={siteLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <FooterArrowIcon />
            </a>
            <a className="footer-link footer-link--external" href={siteLinks.emailMailto}>
              Email Me
              <FooterArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  )

  if (reduce) {
    return (
      <footer role="contentinfo" className={cn("site-footer relative z-[1]", className)}>
        {content}
      </footer>
    )
  }

  return (
    <motion.footer
      role="contentinfo"
      className={cn("site-footer relative z-[1]", className)}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease }}
    >
      {content}
    </motion.footer>
  )
}
