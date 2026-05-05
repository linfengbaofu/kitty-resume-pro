"use client"

import * as React from "react"

export function PortfolioRuntime() {
  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let observer: IntersectionObserver | undefined

    if ("IntersectionObserver" in window && !reduceMotion) {
      const targets = document.querySelectorAll(
        ".section-heading, .featured-card, .work-card, .strength-card, .case-section"
      )
      const viewportBottom = window.innerHeight
      const offscreen: Element[] = []
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top > viewportBottom - 80) {
          el.classList.add("reveal")
          offscreen.push(el)
        }
      })

      if (offscreen.length) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible")
                observer?.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        )
        offscreen.forEach((el) => observer?.observe(el))
      }
    }

    return () => observer?.disconnect()
  }, [])

  React.useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest("a[data-back-link]")
      if (!(link instanceof HTMLAnchorElement)) return
      if (
        window.history.length > 1 &&
        document.referrer &&
        link.href &&
        !event.defaultPrevented
      ) {
        event.preventDefault()
        window.history.back()
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
