"use client"

import Link from "next/link"
import { LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: "home.svg", href: "/" },
    { icon: "chart.svg", href: "/wishlist" },
    { icon: "chart2.svg", href: "/transaction-history" },
    { icon: "setting.svg", href: "/wallet" },
    { icon: "file.svg", href: "/futures-trading" },
    { icon: "setting2.svg", href: "/settings" },
  ]

  return (
    <div className="w-[72px] bg-white border-r border-[#e9e1fc] flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="text-[32px] font-bold bg-gradient-to-b from-[#965CB6] to-[#630C92] text-transparent bg-clip-text text-center" style={{ fontFamily: 'Bai Jamjuree' }}>
          A
        </div>
      </div>

      <div className="flex flex-col items-center space-y-[10px] flex-1">
  {navItems.map((item, index) => {
    const isActive = item.href === pathname
    return (
      <Link
        key={index}
        href={item.href}
        className={cn(
          "w-[60px] h-[60px] flex items-center justify-center rounded-[12px] transition-all duration-200 ease-out",
          isActive ? "bg-purple-100 text-purple-700" : "text-gray-500 hover:bg-purple-50"
        )}
      >
        <img
          src={`/${item.icon}`}
          alt={item.href}
          className="w-[60px] h-[60px]"

        />
      </Link>
    )
  })}
</div>


      <div className="mt-auto">
        <button className="w-10 h-10 flex items-center justify-center rounded-md text-gray-500 hover:bg-purple-50">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  )
}
