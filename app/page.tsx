"use client"

import { AssetsList } from "@/components/dashboard/assets-list"
import MarketOverview from "@/components/dashboard/market-overview"
// import { MarketOverview } from "@/components/dashboard/market-overview"
import { OperationPanel } from "@/components/dashboard/operation-panel"
import { TotalAssetValue } from "@/components/dashboard/total-asset-value"
import TradingPairsList from "@/components/dashboard/trading-pairs-list"

// import { TradingPairsList } from "@/components/dashboard/trading-pairs-list"



export default function Home() {
  return (

    <div className="grid grid-cols-3 gap-6">
      {/* Left Column  */}
      <div className="col-span-2 space-y-6">
        <TotalAssetValue value="345,045.31" btcValue="13.4578" />
        <MarketOverview />
        <TradingPairsList />
      </div>

      {/* Right Column*/}
      <div className="space-y-6">
        <AssetsList />
        <OperationPanel />
      </div>
    </div>

  )
}
