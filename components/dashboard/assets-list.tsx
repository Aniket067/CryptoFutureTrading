import { ReactNode } from "react"

export function AssetsList() {
  return (
    <div className="rounded-xl border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-[18px] leading-[100%] tracking-[0.1em] text-black font-poppins">
          Assets
        </h2>
        <button className="text-sm text-gray-400">See All</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <AssetCard
          symbol="BTC"
          name="Bitcoin"
          value="$24,300.40"
          change={-1.2}
          iconBg="bg-yellow-500"
          icon={<img src="/bitcoin.svg" alt="Bitcoin" className="w-5 h-5" />}
        />
        <AssetCard
          symbol="UST"
          name="Tether"
          value="$13,400.20"
          change={0.4}
          iconBg="bg-emerald-500"
          icon={<img src="/ust.svg" alt="UST" className="w-5 h-5" />}
        />
        <AssetCard
          symbol="ETH"
          name="Ethereum"
          value="$4,000.80"
          change={3.4}
          iconBg="bg-gray-800"
          icon={<img src="/eth.svg" alt="Ethereum" className="w-5 h-5" />}
        />
        <AssetCard
          symbol="CAR"
          name="Cardano"
          value="$1,900.10"
          change={-0.3}
          iconBg="bg-blue-600"
          icon={<img src="/car.svg" alt="Cardano" className="w-5 h-5" />}
        />
      </div>
    </div>
  )
}

interface AssetCardProps {
  symbol: string
  name: string
  value: string
  change: number
  iconBg: string
  icon: ReactNode
}

function AssetCard({ symbol, name, value, change, iconBg, icon }: AssetCardProps) {
  const isPositive = change >= 0

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center text-white font-bold text-xs`}>
          {icon}
        </div>
        <div className="font-medium">{symbol}</div>
      </div>
      <div className="font-semibold">{value}</div>
      <div className={`flex items-center text-xs ${isPositive ? "text-green-400" : "text-red-400"} mt-1`}>
        <svg
          className="h-3 w-3 mr-1"
          viewBox="0 0 10 10"
          fill={isPositive ? "#4ADE80" : "#F87171"}
          xmlns="http://www.w3.org/2000/svg"
        >
          {isPositive ? (
            <path d="M5 0L10 10H0L5 0Z" />
          ) : (
            <path d="M5 10L0 0H10L5 10Z" />
          )}
        </svg>
        {Math.abs(change)}%
      </div>
    </div>
  )
}
