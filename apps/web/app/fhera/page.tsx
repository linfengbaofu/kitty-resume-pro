import type { Metadata } from "next"

import { FheraBody } from "./FheraBody"

export const metadata: Metadata = {
  title: "Fhera Website · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — designing an immersive marketing website for Fhera.",
}

export default function FheraPage() {
  return (
    <div className="page-fhera page-case page-case--detail relative min-h-screen overflow-x-hidden text-white">
      <FheraBody />
    </div>
  )
}
