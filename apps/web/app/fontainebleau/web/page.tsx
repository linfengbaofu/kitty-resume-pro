import type { Metadata } from "next"

import { FontainebleauWebBody } from "./FontainebleauWebBody"

export const metadata: Metadata = {
  title: "Fontainebleau Hotel Web · Case Study · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — redesigning the Fontainebleau Las Vegas website.",
}

export default function FontainebleauWebPage() {
  return (
    <div className="page-fontainebleau page-fontainebleau-web page-case page-case--detail relative min-h-screen overflow-x-hidden text-white">
      <FontainebleauWebBody />
    </div>
  )
}
