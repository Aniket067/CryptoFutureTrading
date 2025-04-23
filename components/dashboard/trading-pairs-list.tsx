import React from 'react';

interface TradingPairItemProps {
  icon: 'up' | 'down';
  name: string;
  time: string;
  date: string;
  amount: string;
  currency: string;
  value: string;
  status: 'Completed' | 'Terminated';
}

const TradingPairItem: React.FC<TradingPairItemProps> = ({
  icon,
  name,
  time,
  date,
  amount,
  currency,
  value,
  status
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            icon === 'up' ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          {icon === 'up' ? (
            <svg
              className="w-4 h-4 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7L7 17M7 17H17M7 17V7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div>
          <div className="text-[14px] leading-none font-[500] font-[Poppins] text-black">{name}</div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-[14px] leading-none font-[500] font-[Poppins] text-black">{time}</div>
        <div className="text-xs text-gray-400">{value}</div>
      </div>

      <div className="text-right">
        <div className="text-[14px] leading-none font-[500] font-[Poppins] text-black">
          {amount} {currency}
        </div>
        <div className="text-xs text-gray-400">{value}</div>
      </div>

      <div className="text-right">
        <div className="text-[14px] leading-none font-[500] font-[Poppins] text-black">
          {status}
        </div>
      </div>
    </div>
  );
};

export default function TradingPairsList() {
  const tradingPairs = [
    {
      icon: 'up' as const,
      name: 'Bitcoin',
      time: '10:34AM',
      date: '2 Nov 2023',
      amount: '+0.431',
      currency: 'BTC',
      value: '$3,489.90',
      status: 'Completed' as const
    },
    {
      icon: 'down' as const,
      name: 'Ethereum',
      time: '07:21AM',
      date: '2 Nov 2023',
      amount: '-0.431',
      currency: 'ETH',
      value: '$3,489.90',
      status: 'Terminated' as const
    },
    {
      icon: 'up' as const,
      name: 'Ethereum',
      time: '07:21AM',
      date: '2 Nov 2023',
      amount: '+0.431',
      currency: 'ETH',
      value: '$3,489.90',
      status: 'Completed' as const
    },
    {
      icon: 'up' as const,
      name: 'Ethereum',
      time: '07:21AM',
      date: '2 Nov 2023',
      amount: '+0.431',
      currency: 'ETH',
      value: '$3,489.90',
      status: 'Completed' as const
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trading Pairs List</h2>
        <button className="text-gray-400 font-medium">Sell All</button>
      </div>

      <div className="space-y-2">
        {tradingPairs.map((pair, index) => (
          <TradingPairItem key={index} {...pair} />
        ))}
      </div>
    </div>
  );
}
