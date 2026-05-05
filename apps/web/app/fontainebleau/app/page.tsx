import type { Metadata } from "next"

import { FontainebleauAppBody } from "./FontainebleauAppBody"

export const metadata: Metadata = {
  title: "Fontainebleau Hotel App · Case Study · Kitty Li",
  description:
    "Case study by Xinyi (Kitty) Li — designing an integrated guest services platform for Fontainebleau Miami.",
}

export default function FontainebleauAppPage() {
  return (
    <div className="page-fontainebleau page-fontainebleau-app page-case page-case--detail relative min-h-screen overflow-x-hidden text-white">
      <FontainebleauAppBody />
    </div>
  )
}
