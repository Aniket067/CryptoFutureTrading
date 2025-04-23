

import React from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';
import PriceToggleExample from './price-candle-toggle';

const data = [
    { time: '08:00AM', value: 30000 },
    { time: '08:15AM', value: 32000 },
    { time: '08:30AM', value: 29000 },
    { time: '08:45AM', value: 30000 },
    { time: '09:00AM', value: 27000 },
    { time: '09:15AM', value: 26500 },
    { time: '09:30AM', value: 31000 },
    { time: '09:45AM', value: 27500 },
    { time: '10:00AM', value: 42589 }, // Highlighted point
    { time: '10:15AM', value: 40000 },
    { time: '10:30AM', value: 45000 },
    { time: '10:45AM', value: 50000 },
    { time: '11:00AM', value: 43000 },
    { time: '11:15AM', value: 38000 },
    { time: '11:30AM', value: 36000 },
    { time: '11:45AM', value: 43000 },
    { time: '12:00PM', value: 46000 },
    { time: '12:15PM', value: 54000 }, // Peak
    { time: '12:30PM', value: 46000 },
    { time: '12:45PM', value: 43000 },
];

const yAxisTicks = [26310, 28210, 30420, 34550, 54550];
export default function MarketOverview() {
    return (
        <div className="max-w-4xl mx-auto p-4 border border-dotted border-blue-200 rounded-lg" style={{ transform: 'translateY(-20px)' }}>
            <div className="mb-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Market Overview</h2>
                <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-2">
                    <button className="bg-white px-3 py-1 rounded-md font-medium">1D</button>
                    <button className="text-gray-400 px-3 py-1 font-medium">7D</button>
                    <button className="text-gray-400 px-3 py-1 font-medium">1M</button>
                    <button className="text-gray-400 px-3 py-1 font-medium">3M</button>
                    <button className="text-gray-400 px-3 py-1 font-medium">ALL</button>
                    <button className="ml-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <div className=" rounded-md overflow-hidden">
                    <div className="p-4">
                        <PriceToggleExample />

                    </div>
                </div>
            </div>

            <div className="relative h-64">
                {/* Price label - moved up and right from center */}
                <div className="absolute top-1/5 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-3 py-1 rounded-lg shadow-md">
                    <div className="text-lg font-semibold">$42,589.43</div>
                    <div className="text-green-500 text-sm">+3.53</div>
                </div>


                {/* Highlighted dot - moved up and right from center */}
                <div className="absolute top-[calc(25%-23px)] left-[calc(66.666%-42px)] transform -translate-x-1/2 -translate-y-1/2 z-10 h-4 w-4 bg-white rounded-full border-4 border-green-500"></div>



                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1">
                    <div className="text-sm font-medium text-gray-700">$54.55K</div>
                    <div className="text-sm font-medium text-gray-700">$34.55K</div>
                    <div className="text-sm font-medium text-gray-700">$30.42K</div>
                    <div className="text-sm font-medium text-gray-700">$28.21K</div>
                    <div className="text-sm font-medium text-gray-700">$26.31K</div>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-16 right-0 flex justify-between">
                    <div className="text-sm font-medium text-gray-700">08:00AM</div>
                    <div className="text-sm font-medium text-gray-700">09:00AM</div>
                    <div className="text-sm font-medium text-gray-700">10:00AM</div>
                    <div className="text-sm font-medium text-gray-700">11:00AM</div>
                    <div className="text-sm font-medium text-gray-700">12:00PM</div>
                </div>

                {/* Chart */}
                <div className="absolute top-0 left-16 right-0 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 25 }}>
                            <defs>
                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                                </linearGradient>
                            </defs>

                            <YAxis
                                type="number"
                                domain={[26000, 55000]}
                                hide={true}
                                ticks={yAxisTicks}
                            />

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#7C3AED"
                                strokeWidth={3}
                                fill="url(#colorGradient)"
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="text-xs text-gray-500 mt-2">USD</div>
        </div>
    );
}
