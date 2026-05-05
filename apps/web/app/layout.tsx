import { Inter } from "next/font/google"
import type { Viewport } from "next"

import "@workspace/ui/globals.css"
import "../styles/portfolio.css"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { PortfolioRuntime } from "@/components/portfolio/portfolio-runtime"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d0d0d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable)}>
      <body className={cn(inter.className, "antialiased flex min-h-screen flex-col")}>
        <PortfolioRuntime />
        {children}
        <div className="shrink-0 bg-portfolio-bg text-portfolio-text pb-[env(safe-area-inset-bottom)]">
          <PortfolioFooter />
        </div>
      </body>
    </html>
  )
}
