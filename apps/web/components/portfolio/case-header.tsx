import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import { BackChevronIcon } from "@/components/portfolio/portfolio-icons"

type CaseHeaderProps = {
  backHref: string
  backFallback: string
  ariaLabel: string
  className?: string
}

export function CaseHeader({ backHref, backFallback, ariaLabel, className }: CaseHeaderProps) {
  return (
    <header className={cn("case-header", className)} role="banner">
      <Link
        href={backHref}
        className="back-button"
        data-back-link
        data-back-fallback={backFallback}
        aria-label={ariaLabel}
      >
        <span className="back-arrow" aria-hidden="true">
          <BackChevronIcon />
        </span>
        <span className="back-label">Back</span>
      </Link>
    </header>
  )
}
