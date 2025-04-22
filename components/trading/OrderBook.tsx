import React from "react";

export interface OrderBookItem {
  price: string;
  amount: string;
  total: string;
}

interface OrderBookProps {
  orders: OrderBookItem[];
}

export function OrderBook({ orders }: OrderBookProps) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm p-4 font-roboto">
      <h3 className="text-lg font-medium mb-4">Order Book</h3>
      <div className="grid grid-cols-3 text-sm text-gray-500 mb-2">
        <div>Price</div>
        <div className="text-center">Amount</div>
        <div className="text-right">Total</div>
      </div>
      {orders.map((order, index) => (
        <div key={index} className="grid grid-cols-3 text-sm py-1">
          <div className={index < 2 ? 'text-[#EF4444]' : 'text-[#10B981]'}>
            {order.price}
          </div>
          <div className={index < 2 ? 'text-[#EF4444] text-center' : 'text-[#10B981] text-center'}>
            {order.amount}
          </div>
          <div className={index < 2 ? 'text-[#EF4444] text-right' : 'text-[#10B981] text-right'}>
            {order.total}
          </div>
        </div>
      ))}
    </div>
  );
}
