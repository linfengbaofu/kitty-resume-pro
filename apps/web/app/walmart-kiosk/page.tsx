import type { Metadata } from "next"

import { KioskBody } from "./KioskBody"

export const metadata: Metadata = {
  title: "Walmart Kiosk & Shopping Cart · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — designing a streamlined in-store shopping experience for Walmart.",
}

export default function WalmartKioskPage() {
  return (
    <div className="page-walmart page-case page-case--detail min-h-screen text-white">
      <KioskBody />
    </div>
  )
}
