import React from "react";

interface PriceStatsProps {
  label: string;
  value: string;
}

function PriceStats({ label, value }: PriceStatsProps) {
  return (
    <div className="w-48 h-10 rounded-lg bg-white border border-gray-200 p-2">
      <p className="text-sm text-gray-500">{label}:</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

interface PriceHeaderProps {
  symbol: string;
  price: string;
  priceChange: string;
}

export function PriceHeader({ symbol, price, priceChange }: PriceHeaderProps) {
  return (
    <div className="rounded-lg p-4 shadow-sm font-roboto"> {/* Added font-roboto here */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-purple-900">{symbol}</h2>
          <span className="text-xl font-medium text-green-500">{price}</span>
          <span className="text-sm font-medium text-green-500">{priceChange}</span>
        </div>
        <div className="flex gap-6">
          <PriceStats label="24h High" value="" />
          <PriceStats label="24h Low" value="" />
          <PriceStats label="24h Volume" value="" />
        </div>
      </div>
    </div>
  );
}
