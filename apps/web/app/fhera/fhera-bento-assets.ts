/**
 * Fhera intro bento (fb-web-bento) — image per layout slot.
 * Reorder: change `file` (PNG name under /public/assets/fhera/) or swap which
 * slot uses which entry; layout positions are fixed by class names in FheraBody.
 */
const FHERA_BENTO_DIR = "/assets/fhera"

export type FheraBentoSlot = {
  /** PNG filename without extension, e.g. "1" → /assets/fhera/1.png */
  file: string
  alt: string
}

function slot(file: string, alt: string): FheraBentoSlot {
  return { file, alt }
}

export function fheraBentoSrc(file: string): string {
  return `${FHERA_BENTO_DIR}/${file}.png`
}

/** Maps to the Fontainebleau-style bento grid used on the Fhera case page */
export const fheraBentoCollage = {
  /** Left column, spans rows 1–2 */
  leftTall: slot("1", "Data security and encryption concept artwork for Fhera."),
  /** Top center */
  topCenter: slot("2", "Privacy-preserving AI visual for Fhera."),
  /** Right stack, upper half */
  rightTop: slot("4", "Decentralized identity illustration for Fhera."),
  /** Right stack, lower half */
  rightBottom: slot("7", "Trustless gaming concept artwork for Fhera."),
  /** Middle cell (row 2, column 2) */
  center: slot("3", "Fhera brand and product centerpiece visual."),
  /** Bottom row, left half (under left column) */
  bottomLeft: slot("5", "Confidential transactions visual for Fhera."),
  /** Bottom row, right half */
  bottomRight: slot("6", "Confidential DeFi visual for Fhera."),
} as const

/** Narrow screens: show images in numeric file order (1, 2, 3…). */
export function fheraBentoMobileSequence(): FheraBentoSlot[] {
  const c = fheraBentoCollage
  const slots: FheraBentoSlot[] = [
    c.leftTall,
    c.topCenter,
    c.rightTop,
    c.rightBottom,
    c.center,
    c.bottomLeft,
    c.bottomRight,
  ]
  return [...slots].sort((a, b) => {
    const na = Number.parseInt(a.file, 10)
    const nb = Number.parseInt(b.file, 10)
    return (Number.isNaN(na) ? 0 : na) - (Number.isNaN(nb) ? 0 : nb)
  })
}
