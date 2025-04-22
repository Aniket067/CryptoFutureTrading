import React from "react";

export interface Trade {
  time: string;
  price: string;
}

interface RecentTradesProps {
  trades: Trade[];
}

export function RecentTrades({ trades }: RecentTradesProps) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm p-4 font-roboto"> {/* Added font-roboto here */}
      <h3 className="text-lg font-medium mb-4">Recent Trades</h3>
      <div className="grid grid-cols-2 text-sm text-gray-500 mb-2">
        <div>Time</div>
        <div className="text-right">Price</div>
      </div>
      {trades.map((trade, index) => (
        <div key={index} className="grid grid-cols-2 text-sm py-1">
          <div>{trade.time}</div>
          <div
            className={`text-right ${index % 2 === 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}`}
          >
            {trade.price}
          </div>
        </div>
      ))}
    </div>
  );
}
