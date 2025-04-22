"use client";

import React from "react";
import { PriceHeader } from "@/components/trading/PriceHeader";
import { ChartSection } from "@/components/trading/ChartSection";
// import { TradingPanel } from "@/components/trading/TradingPanel/TradingPanel";
import { OrderBook, OrderBookItem } from "@/components/trading/OrderBook";
import { RecentTrades, Trade } from "@/components/trading/RecentTrades";
import { PositionsTable, Position } from "@/components/trading/PositionsTable";
import TradingPanel from "@/components/trading/TradingPanel/TradingPanel";

export default function FuturesTradingPage() {
  // Sample data for positions
  const positions: Position[] = [
    {
      id: "1",
      symbol: "Bitcoin (BTC)",
      size: "$68,420.50",
      entryPrice: 2.34,
      markPrice: "$1.34T",
      liqPrice: "$32.5B",
      marginRatio: "$32.5B",
      margin: "$32.5B",
      pnl: 2.34,
    },
    {
      id: "2",
      symbol: "Ethereum (ETH)",
      size: "$3,720.25",
      entryPrice: -1.12,
      markPrice: "$448.7B",
      liqPrice: "$18.2B",
      marginRatio: "$18.2B",
      margin: "$18.2B",
      pnl: -1.12,
    },
    {
      id: "3",
      symbol: "Solana (SOL)",
      size: "$172.90",
      entryPrice: 5.67,
      markPrice: "$76.8B",
      liqPrice: "$3.4B",
      marginRatio: "$3.4B",
      margin: "$3.4B",
      pnl: 5.67,
    },
    {
      id: "4",
      symbol: "XRP (XRP)",
      size: "$0.52",
      entryPrice: 0.78,
      markPrice: "$28.3B",
      liqPrice: "$1.2B",
      marginRatio: "$1.2B",
      margin: "$1.2B",
      pnl: 0.78,
    },
    {
      id: "5",
      symbol: "Cardano (ADA)",
      size: "$0.45",
      entryPrice: -0.92,
      markPrice: "$15.9B",
      liqPrice: "$0.8B",
      marginRatio: "$0.8B",
      margin: "$0.8B",
      pnl: -0.92,
    },
  ];

  // Sample data for order book
  const buyOrders: OrderBookItem[] = [
    { price: "48,235.00", amount: "0.4521", total: "21,805.23" },
    { price: "48,234.50", amount: "0.3214", total: "15,502.37" },
    { price: "48,234.00", amount: "0.6832", total: "32,953.46" },
    { price: "48,233.50", amount: "0.8945", total: "43,144.91" },
  ];

  // Sample data for recent trades
  const recentTrades: Trade[] = [
    { time: "12:45:23", price: "48,234.50" },
    { time: "12:45:21", price: "48,234.00" },
    { time: "12:45:19", price: "48,233.50" },
    { time: "12:45:17", price: "48,233.00" },
  ];

  return (
    <div className="space-y-4">
      {/* Header with price and stats */}
      <PriceHeader 
        symbol="BTC/USDT" 
        price="$48,234.50" 
        priceChange="+2.45%" 
      />

      {/* Chart and Trading Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Chart Section - 3/4 width on large screens */}
        <div className="lg:col-span-3">
          <ChartSection />
        </div>

        {/* Trading Panel - 1/4 width on large screens */}
        <div>
          <TradingPanel />
        </div>
      </div>

      {/* Order Book and Recent Trades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OrderBook orders={buyOrders} />
        <RecentTrades trades={recentTrades} />
      </div>

      {/* Positions */}
      <PositionsTable positions={positions} />
    </div>
  );}