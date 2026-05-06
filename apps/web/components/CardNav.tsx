"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"
import { BrandMark } from "@/components/portfolio/brand-mark"

import { LinkedInIcon } from "@/components/portfolio/portfolio-icons"

export type CardNavLink = {
  label: string
  href: string
  ariaLabel: string
}

export type CardNavItem = {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

export interface CardNavProps {
  /** Image URL when not using `renderLogo`. */
  logo?: string
  logoAlt?: string
  renderLogo?: React.ReactNode
  items: CardNavItem[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
  /** Shown in the top bar on the right when set (e.g. LinkedIn). */
  linkedInHref?: string
  linkedInAriaLabel?: string
  linkedInSlot?: React.ReactNode
  /** Legacy CTA when `linkedInHref` / `linkedInSlot` are not provided. */
  buttonBgColor?: string
  buttonTextColor?: string
  ctaLabel?: string
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith("mailto:")
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  renderLogo,
  items,
  className = "",
  ease = "power3.out",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- reserved when nav `style` is re-enabled below
  baseColor = "#fff",
  menuColor,
  linkedInHref,
  linkedInAriaLabel = "LinkedIn profile",
  linkedInSlot,
  buttonBgColor,
  buttonTextColor,
  ctaLabel = "Get Started",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 260

    const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement | null
    if (!contentEl) return 260

    const wasVisible = contentEl.style.visibility
    const wasPointerEvents = contentEl.style.pointerEvents
    const wasPosition = contentEl.style.position
    const wasHeight = contentEl.style.height

    contentEl.style.visibility = "visible"
    contentEl.style.pointerEvents = "auto"
    contentEl.style.position = "static"
    contentEl.style.height = "auto"

    void contentEl.offsetHeight

    const topBar = 60
    const padding = 16
    const contentHeight = contentEl.scrollHeight

    contentEl.style.visibility = wasVisible
    contentEl.style.pointerEvents = wasPointerEvents
    contentEl.style.position = wasPosition
    contentEl.style.height = wasHeight

    return topBar + contentHeight + padding
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: 60, overflow: "hidden" })
    gsap.set(
      cardsRef.current.filter(Boolean),
      { y: 50, opacity: 0 },
    )

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    })

    tl.to(
      cardsRef.current.filter(Boolean),
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1",
    )

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl

    return () => {
      tl?.kill()
      tlRef.current = null
    }
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })

        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          tlRef.current = newTl
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el
  }

  const list = items || []

  return (
    <div className={`card-nav-container relative z-[99] w-full ${className}`}>
      {/* style={{ backgroundColor: baseColor }} */}
      <nav
        ref={navRef}
        className={`card-nav relative block h-[60px] overflow-hidden rounded-xl p-0 shadow-md will-change-[height] ${isExpanded ? "open" : ""}`}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 z-[2] flex h-[60px] items-center justify-between p-2 px-0">
          <button
            type="button"
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group order-2 flex h-full cursor-pointer flex-col items-center justify-center gap-[6px] md:order-none`}
            onClick={toggleMenu}
            aria-expanded={isExpanded}
            aria-controls="card-nav-panel"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            style={{ color: menuColor || "#000" }}
          >
            {BrandMark({ className: "size-12 min-[721px]:size-14 min-[1101px]:size-[52px] -ml-1" })}
            {/* <img src={BrandMark} width={28} height={28} alt="Kitty Li logo" className="logo h-[28px]" /> */}
            {/* <span
              className={`hamburger-line h-[2px] w-[30px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <span
              className={`hamburger-line h-[2px] w-[30px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            /> */}
          </button>

          {/* <div className="logo-container order-1 flex items-center md:absolute md:left-1/2 md:top-1/2 md:order-none md:-translate-x-1/2 md:-translate-y-1/2">
            {renderLogo ?? <img src={logo} alt={logoAlt} className="logo h-[28px]" />}
          </div> */}

          {linkedInHref || linkedInSlot ? (
            linkedInSlot ?? (
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-12 min-[721px]:size-14 min-[1101px]:size-[60px] shrink-0 items-center justify-center rounded-full border border-[#333] bg-[#1b1b1b] text-white transition hover:-translate-y-0.5 hover:border-[#ffcc02] hover:bg-[#222] active:scale-[0.97]"
                aria-label={linkedInAriaLabel}
              >
                <LinkedInIcon />
              </a>
            )
          ) : (
            <button
              type="button"
              className="card-nav-cta-button hidden h-full min-h-0 items-center rounded-[calc(0.75rem-0.2rem)] border-0 px-4 font-medium transition-colors duration-300 md:inline-flex"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              {ctaLabel}
            </button>
          )}
        </div>

        <div
          id="card-nav-panel"
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 z-[1] flex flex-col items-stretch justify-start gap-2 p-2 ${
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } md:flex-row md:items-stretch md:gap-3 md:overflow-x-auto md:pb-2 md:pt-[20px] pt-[20px]`}
          aria-hidden={!isExpanded}
        >
          {list.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card relative flex min-h-0 min-w-0 flex-[1_1_auto] select-none flex-col gap-2 rounded-[calc(0.75rem-0.2rem)] p-[12px_16px] md:h-auto md:min-w-[140px] md:flex-[1_0_auto]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label text-[18px] font-normal tracking-[-0.5px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => {
                  const external = isExternalHref(lnk.href)
                  const linkClass =
                    "nav-card-link inline-flex cursor-pointer items-center gap-[6px] text-[15px] no-underline transition-opacity duration-300 hover:opacity-75 md:text-[16px]"
                  const inner = (
                    <>
                      <ArrowUpRight className="nav-card-link-icon size-[1em] shrink-0" aria-hidden="true" />
                      {lnk.label}
                    </>
                  )
                  return external ? (
                    <a
                      key={`${lnk.label}-${i}`}
                      className={linkClass}
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      target={lnk.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={lnk.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={`${lnk.label}-${i}`} className={linkClass} href={lnk.href} aria-label={lnk.ariaLabel}>
                      {inner}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default CardNav
