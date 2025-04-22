import type React from "react"
import type { Metadata } from "next"
import { Inter, Bai_Jamjuree, Poppins } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import TopNavbar from "@/components/top-navbar"

// Import fonts
const inter = Inter({ subsets: ["latin"] })
const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "700"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Cryptocurrency transaction history dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${inter.className} ${baiJamjuree.className} font-poppins`}>
        <div className="flex h-screen bg-[#f8f5ff]">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNavbar />
            <main className="flex-1 overflow-y-auto p-4 bg-[#f8f5ff]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
