import { cn } from "@workspace/ui/lib/utils"

/** Tight viewBox trims empty space on the left/right of the mark (was 0 0 60 60). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="9 0 43 60"
      fill="none"
      className={cn("size-[60px] shrink-0", className)}
      aria-hidden
    >
      <rect x="11" y="8" width="16" height="45" rx="6" stroke="currentColor" strokeWidth="4" />
      <rect x="34" y="8" width="16" height="14" rx="6" stroke="currentColor" strokeWidth="4" />
      <rect x="34" y="29" width="16" height="24" rx="7" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}
