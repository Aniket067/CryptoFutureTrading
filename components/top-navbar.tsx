"use client"

import { usePathname, useRouter } from "next/navigation"
import { ArrowLeft, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TopNavbar() {
  const router = useRouter()
  const pathname = usePathname()

  const getPageTitle = () => {
    if (pathname === "/transaction-history") return "Transaction History"
    if (pathname === "/analytics") return "Analytics"
    if (pathname === "/wallet") return "Wallet"
    if (pathname === "/documents") return "Documents"
    if (pathname === "/settings") return "Settings"
    return "Dashboard"
  }

  return (
    <div className="h-16 border-b border-[#e9e1fc] bg-white px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="mr-4 w-[40px] h-[40px] rounded-full bg-[#F9FAFB] hover:bg-[#f0f0f0] shadow-none"
        >
          <ArrowLeft size={20} className="text-[#1E1B4B]" />
        </Button>

        <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* ✅ Styled Search Bar */}
        <div className="flex items-center bg-[#f2f2f2] rounded-[15px] h-[47px] px-[20px] py-[13px] w-fit gap-[10px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-black text-sm placeholder:text-[#1E1B4B] w-full"
          />
          <Search size={20} className="text-[#1E1B4B] cursor-pointer" />
        </div>

   
        <button className="relative flex items-center justify-center w-[47px] h-[47px] rounded-full border border-[#8F9AA7] bg-white">
          <Bell size={20} className="text-[#1E1B4B]" />
          <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-red-500 rounded-full"></span>
        </button>

        <Avatar className="h-[47px] w-[47px] border border-gray-200">
          
          <AvatarFallback className="p-1 bg-transparent">
            <img src="/avatar.svg" alt="User Avatar" className="w-full h-full object-cover rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
