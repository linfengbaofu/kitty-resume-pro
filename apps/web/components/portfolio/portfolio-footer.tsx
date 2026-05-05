import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import { BrandMark } from "@/components/portfolio/brand-mark"
import { siteLinks } from "@/config/site-links"
import { FooterArrowIcon } from "@/components/portfolio/portfolio-icons"

type PortfolioFooterProps = {
  /** Case-study pages use muted footer colors on dark blue background */
  tone?: "default" | "case"
  className?: string
}

export function PortfolioFooter({ tone = "default", className }: PortfolioFooterProps) {
  return (
    <footer
      role="contentinfo"
      className={cn("site-footer", tone === "case" && "site-footer--case", className)}
    >
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
    </footer>
  )
}
