import type { CardNavItem } from "@/components/CardNav"
import { siteLinks } from "@/config/site-links"

export const homeCardNavItems: CardNavItem[] = [
  {
    label: "Home",
    bgColor: "#252525",
    textColor: "#f5f5f5",
    links: [
      { label: "Home", href: siteLinks.home, ariaLabel: "Kitty Li home" },
      { label: "Curated works", href: siteLinks.homeWorks, ariaLabel: "Jump to curated case studies" },
      { label: "Resume", href: siteLinks.homeResume, ariaLabel: "Jump to resume" },
    ],
  },
  {
    label: "Walmart",
    bgColor: "#2a2418",
    textColor: "#f5f5f5",
    links: [
      { label: "Case study", href: siteLinks.walmart, ariaLabel: "Open Walmart case study" },
      { label: "Walmart App", href: siteLinks.walmartApp, ariaLabel: "Open Walmart App project" },
      { label: "Walmart Kiosk", href: siteLinks.walmartKiosk, ariaLabel: "Open Walmart Kiosk project" },
    ],
  },
  {
    label: "Fontainebleau",
    bgColor: "#1a2330",
    textColor: "#f5f5f5",
    links: [
      { label: "Overview", href: siteLinks.fontainebleau, ariaLabel: "Open Fontainebleau case study" },
      { label: "App", href: siteLinks.fontainebleauApp, ariaLabel: "Open Fontainebleau app" },
      { label: "Web", href: siteLinks.fontainebleauWeb, ariaLabel: "Open Fontainebleau web" },
    ],
  },
  {
    label: "More",
    bgColor: "#221a28",
    textColor: "#f5f5f5",
    links: [{ label: "Fhera", href: siteLinks.fhera, ariaLabel: "Open Fhera case study" }],
  },
]
