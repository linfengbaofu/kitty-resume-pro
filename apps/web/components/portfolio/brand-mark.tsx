export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="60"
      height="60"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="11" y="8" width="16" height="45" rx="6" stroke="currentColor" strokeWidth="4" />
      <rect x="34" y="8" width="16" height="14" rx="6" stroke="currentColor" strokeWidth="4" />
      <rect x="34" y="29" width="16" height="24" rx="7" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}
