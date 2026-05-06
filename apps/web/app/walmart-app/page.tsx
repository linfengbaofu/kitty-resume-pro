import type { Metadata } from "next"

import { AppBody } from "./AppBody"

export const metadata: Metadata = {
  title: "Walmart App · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — interaction and visual design for the Walmart mobile app, cart, delivery, and after-sales flows.",
}

export default function WalmartAppPage() {
  return (
    <div className="page-walmart page-case page-case--detail relative min-h-screen overflow-x-hidden text-white">
      <AppBody />
    </div>
  )
}
