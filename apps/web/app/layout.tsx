import { Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import "../styles/portfolio.css"
import { PortfolioRuntime } from "@/components/portfolio/portfolio-runtime"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable)}>
      <body className={cn(inter.className, "antialiased")}>
        <PortfolioRuntime />
        {children}
      </body>
    </html>
  )
}
