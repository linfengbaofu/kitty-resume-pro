import { siteLinks } from "@/config/site-links"

export function SkipLink() {
  return (
    <a className="skip-link" href={siteLinks.skipToMain}>
      Skip to main content
    </a>
  )
}
