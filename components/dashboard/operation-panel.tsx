"use client"

import { useState } from "react"

export function OperationPanel() {
  const [activeOperation, setActiveOperation] = useState<"buy" | "sell">("buy")

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <h2 className="font-semibold text-lg mb-4">Operation</h2>

      <div className="flex gap-2 mb-6">
        <button
          className={`flex-1 py-2 rounded-md ${activeOperation === "buy" ? "bg-purple-200" : "bg-white border border-gray-200"} text-sm font-medium`}
          onClick={() => setActiveOperation("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-2 rounded-md ${activeOperation === "sell" ? "bg-purple-200" : "bg-white border border-gray-200"} text-sm font-medium`}
          onClick={() => setActiveOperation("sell")}
        >
          Sell
        </button>
      </div>

      <div className="space-y-6">
        <CurrencyInput label="You pay" currency="UST" value="$321.40" badge="MAX" />

        <div className="flex justify-center">
          <img src="/twoway.svg" alt="Two Way Icon" width="22" height="22" />
        </div>

        <CurrencyInput label="You get" currency="BTC" value="0.058BTC" badge="MIN" />

        <div className="text-sm text-gray-500 text-center">1 BTC = $2,345</div>

        <button
          className="w-full py-3 rounded-md text-white font-medium"
          style={{
            background: "linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)",
            borderRadius: "10px",
          }}
        >
          Buy Bitcoin
        </button>
      </div>
    </div>
  )
}

interface CurrencyInputProps {
  label: string
  currency: string
  value: string
  badge: string
}

function CurrencyInput({ label, currency, value, badge }: CurrencyInputProps) {
  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "BTC":
        return (
          <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xs">
            ₿
          </div>
        )
      case "UST":
        return (
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
            $
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div className="text-sm text-gray-500 mb-2">{label}</div>
      <div className="flex items-center justify-between bg-[#EDEBF5] rounded-md p-3">
        <div className="bg-white p-2 rounded-md flex items-center gap-2">
          {getCurrencyIcon(currency)}
          <div className="font-medium">{currency}</div>
          <ChevronDownIcon />
        </div>

        <div className="font-medium">{value}</div>
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">
        <span className="bg-purple-900 text-white text-xs px-2 py-0.5 rounded">{badge}</span>
      </div>
    </div>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function SwapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}
