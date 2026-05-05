/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

import { CaseHeader } from "@/components/portfolio/case-header"
import { SkipLink } from "@/components/portfolio/skip-link"
import { siteLinks } from "@/config/site-links"

export const metadata: Metadata = {
  title: "Walmart Case Study · Kitty Li",
  description:
    "Walmart case study by Xinyi (Kitty) Li — reform the online and in-store shopping experience.",
}

export default function WalmartPage() {
  return (
    <div className="page-walmart relative min-h-screen overflow-x-hidden text-white">
      <SkipLink />
      <CaseHeader
        className="relative z-[2]"
        backHref={siteLinks.home}
        backFallback={siteLinks.home}
        ariaLabel="Back to home"
      />

      <main id="main" className="case-main relative z-[1]">
        <section className="case-section" aria-labelledby="case-1-title">
          <div className="case-intro">
            <h1 id="case-1-title" className="case-title">
              Walmart App
            </h1>
            <p className="case-subtitle">Reform the online shopping experience for Walmart</p>
            <ul className="case-tags" aria-label="Project disciplines">
              <li className="case-tag">Product</li>
              <li className="case-tag">Service Design</li>
              <li className="case-tag">UI/UX</li>
            </ul>
          </div>
          <figure className="case-hero" data-hero="primary">
            <img
              src="/assets/walmart-hero-1.png"
              alt="A shopper holding a phone running the redesigned Walmart app while picking fresh produce."
              loading="eager"
            />
          </figure>
        </section>

        <section className="case-section is-link" aria-labelledby="case-2-title">
          <Link className="case-link" href={siteLinks.walmartKiosk} aria-labelledby="case-2-title">
            <div className="case-intro">
              <h2 id="case-2-title" className="case-title">
                Walmart Kiosk &amp; Shopping Cart
              </h2>
              <p className="case-subtitle">
                Design a streamlined in-store shopping experience from shelf to checkout
              </p>
              <ul className="case-tags" aria-label="Project disciplines">
                <li className="case-tag">Service Design</li>
                <li className="case-tag">Interaction</li>
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
            <figure className="case-hero">
              <img
                src="/assets/walmart-hero-2.png"
                alt="A smart kiosk mounted on a Walmart shopping cart showing a recipe and checkout interface."
                loading="lazy"
              />
            </figure>
          </Link>
        </section>
      </main>
    </div>
  )
}
