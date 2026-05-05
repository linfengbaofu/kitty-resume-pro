/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

import { CaseHeader } from "@/components/portfolio/case-header"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { SkipLink } from "@/components/portfolio/skip-link"
import { siteLinks } from "@/config/site-links"

export const metadata: Metadata = {
  title: "Fontainebleau Hotel · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — designing the Fontainebleau Hotel app and refining the luxury hotel website.",
}

export default function FontainebleauPage() {
  return (
    <div className="page-fontainebleau relative min-h-screen overflow-x-hidden text-white">
      <SkipLink />
      <CaseHeader
        className="relative z-[2]"
        backHref={siteLinks.home}
        backFallback={siteLinks.home}
        ariaLabel="Back to home"
      />

      <main id="main" className="case-main relative z-[1]">
        <section className="case-section is-link" aria-labelledby="case-1-title">
          <Link className="case-link" href={siteLinks.fontainebleauApp} aria-labelledby="case-1-title">
            <div className="case-intro">
              <h1 id="case-1-title" className="case-title">
                Fontainebleau Hotel APP
              </h1>
              <p className="case-subtitle">
                Design an integrated platform providing innovative convenience services for existing customers at the hotel
              </p>
              <ul className="case-tags" aria-label="Project disciplines">
                <li className="case-tag">Product</li>
                <li className="case-tag">Service Design</li>
                <li className="case-tag">Case Study</li>
              </ul>
              <span className="case-cta" aria-hidden="true">
                <span>View case study</span>
                <span className="case-cta-arrow">
                  <svg viewBox="0 0 8 8" width="12" height="12">
                    <path
                      d="M1 1h6v6M1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <figure className="case-hero" data-hero="primary">
              <img
                src="/assets/fontainebleau-app-hero.png"
                alt="Fontainebleau Hotel app shown on an iPhone with guest services and quick links on screen."
                loading="eager"
              />
            </figure>
          </Link>
        </section>

        <section className="case-section is-link" aria-labelledby="case-2-title">
          <Link className="case-link" href={siteLinks.fontainebleauWeb} aria-labelledby="case-2-title">
            <div className="case-intro">
              <h2 id="case-2-title" className="case-title">
                Fontainebleau Hotel Web
              </h2>
              <p className="case-subtitle">
                Redesigned the hotel website with a refined, luxury-driven visual language, elevating the brand identity
                through thoughtful and intuitive user experience design
              </p>
              <ul className="case-tags" aria-label="Project disciplines">
                <li className="case-tag">Web Design</li>
                <li className="case-tag">Visual Design</li>
                <li className="case-tag">Case Study</li>
              </ul>
              <span className="case-cta" aria-hidden="true">
                <span>View case study</span>
                <span className="case-cta-arrow">
                  <svg viewBox="0 0 8 8" width="12" height="12">
                    <path
                      d="M1 1h6v6M1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <figure className="case-hero" data-hero="web-overview">
              <img
                src="/assets/fontainebleau-web-hero.png"
                alt="Fontainebleau Hotel website mockup displayed on a laptop sitting on a stone ledge, showing the casino landing page."
                loading="lazy"
              />
            </figure>
          </Link>
        </section>
      </main>

      <PortfolioFooter tone="case" className="relative z-[1] mt-10" />
    </div>
  )
}
