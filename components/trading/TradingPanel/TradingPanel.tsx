// 'use client';

// import { useState, useEffect } from 'react';
// import type { NextPage } from 'next';

// const TradingPanel: NextPage = () => {
//   const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
//   const [price, setPrice] = useState<string>('48234.5');
//   const [amount, setAmount] = useState<string>('0.00');
//   const [selectedPercentage, setSelectedPercentage] = useState<string | null>(null);
//   const [timeRemaining, setTimeRemaining] = useState<string>('03:24:16');
//   const [estRate, setEstRate] = useState<string>('+0.0124%');
//   const [zoomLevel, setZoomLevel] = useState<number>(10);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const [hours, minutes, seconds] = timeRemaining.split(':').map(Number);

//       let newSeconds = seconds - 1;
//       let newMinutes = minutes;
//       let newHours = hours;

//       if (newSeconds < 0) {
//         newSeconds = 59;
//         newMinutes -= 1;
//       }

//       if (newMinutes < 0) {
//         newMinutes = 59;
//         newHours -= 1;
//       }

//       if (newHours < 0) {
//         newHours = 0;
//         newMinutes = 0;
//         newSeconds = 0;
//       }

//       setTimeRemaining(
//         `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
//       );
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   const handlePercentageClick = (percentage: string) => {
//     setSelectedPercentage(percentage);

//     if (percentage === '25%') setAmount('0.25');
//     if (percentage === '50%') setAmount('0.50');
//     if (percentage === '75%') setAmount('0.75');
//     if (percentage === '100%') setAmount('1.00');
//   };

//   const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setZoomLevel(Number(event.target.value));
//   };

//   return (
//     <div className="p-5 flex flex-col items-center h-[588px] bg-gray-50">
//       <main className="flex flex-col items-center gap-4">
//         <div className="w-[294px] flex flex-col gap-4">
//           {/* Tab Navigation */}
//           <div className="flex w-full">
//           <button
//   className={`w-[131px] h-[40px] text-center font-semibold text-base border border-gray-200 ${
//     activeTab === 'buy' ? 'text-white' : 'bg-purple-50 text-gray-800'
//   } rounded-tl-[4px] rounded-bl-[4px]`}
//   style={{
//     background: activeTab === 'buy' ? 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)' : '',
//     fontFamily: 'Roboto',
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '100%',
//     letterSpacing: '0%',
//     textAlign: 'center',
//   }}
//   onClick={() => setActiveTab('buy')}
// >
//   Buy
// </button>

// <button
//   className={`w-[131px] h-[40px] text-center font-semibold text-base  ${
//     activeTab === 'sell' ? 'text-white' : 'bg-purple-50 text-gray-800'
//   } rounded-tr-[4px] rounded-br-[4px]`}
//   style={{
//     background: activeTab === 'sell' ? 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)' : '#EFE7F4',
//     fontFamily: 'Roboto',
//     fontWeight: 400,
//     fontSize: '16px',
//     lineHeight: '100%',
//     letterSpacing: '0%',
//     textAlign: 'center',
 
//   }}
//   onClick={() => setActiveTab('sell')}
// >
//   Sell
// </button>

//           </div>

//           {/* Price Input */}
//           <div>
//             <div className="text-gray-500 text-sm mb-1.5">Price</div>
//             <div className="flex justify-between items-center">
//               <div className="text-gray-400 text-base">{price}</div>
//               <div className="text-gray-400 text-base">USDT</div>
//             </div>
//           </div>

//           {/* Amount Input */}
//           <div>
//             <div className="text-gray-500 text-sm mb-1.5">Amount</div>
//             <div className="flex justify-between items-center">
//               <div className="text-gray-400 text-base">{amount}</div>
//               <div className="text-gray-400 text-base">BTC</div>
//             </div>
//           </div>

//           {/* Percentage Buttons */}
//           <div className="flex gap-2.5 justify-between">
//             {['25%', '50%', '75%', '100%'].map((percent) => (
//               <button
//                 key={percent}
//                 className={`flex-1 text-center py-2 rounded-md text-sm ${
//                   selectedPercentage === percent
//                     ? 'bg-gray-200 font-medium'
//                     : 'bg-gray-100 text-gray-600'
//                 }`}
//                 onClick={() => handlePercentageClick(percent)}
//               >
//                 {percent}
//               </button>
//             ))}
//           </div>

//           {/* Buy/Sell Button */}
//           <div>
//             <button
//               className="w-full text-white rounded-md py-3.5 font-semibold text-base"
//               style={{ background: 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)' }}
//             >
//               {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
//             </button>
//           </div>
//         </div>

//         {/* Zoom Controls */}
//         <div className="w-[294px] flex flex-col gap-2">
//           <div className="flex justify-end">
//             <span className="text-amber-500 font-semibold">{zoomLevel}x</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-gray-600">1x</span>
//             <input
//               type="range"
//               min="1"
//               max="100"
//               value={zoomLevel}
//               onChange={handleZoomChange}
//               className="flex-1 h-1.5 bg-gray-200 rounded appearance-none"
//             />
//             <span className="text-sm text-gray-600">100x</span>
//           </div>
//         </div>

//         {/* Funding Info */}
//         <div className="w-[294px] flex flex-col gap-2">
//           <div className="flex justify-between text-gray-500">
//             <span className="text-sm">Next funding in</span>
//             <span className="text-amber-500 font-medium">{timeRemaining}</span>
//           </div>
//           <div className="flex justify-between text-gray-500">
//             <span className="text-sm">Est. rate</span>
//             <span className="text-green-500 font-medium">{estRate}</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TradingPanel;

'use client';

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

const TradingPanel: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [price, setPrice] = useState<string>('48234.5');
  const [amount, setAmount] = useState<string>('0.00');
  const [selectedPercentage, setSelectedPercentage] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('03:24:16');
  const [estRate, setEstRate] = useState<string>('+0.0124%');
  const [zoomLevel, setZoomLevel] = useState<number>(10);

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeRemaining.split(':').map(Number);

      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }

      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }

      if (newHours < 0) {
        newHours = 0;
        newMinutes = 0;
        newSeconds = 0;
      }

      setTimeRemaining(
        `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handlePercentageClick = (percentage: string) => {
    setSelectedPercentage(percentage);

    if (percentage === '25%') setAmount('0.25');
    if (percentage === '50%') setAmount('0.50');
    if (percentage === '75%') setAmount('0.75');
    if (percentage === '100%') setAmount('1.00');
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(Number(event.target.value));
  };

  return (
    <div className="p-5 flex flex-col items-center min-h-[500px] bg-gray-50 w-full">
      <main className="flex flex-col items-center gap-6 w-full max-w-md">
        {/* Tab Navigation */}
        <div className="flex w-full">
          <button
            className={`flex-1 h-10 text-center text-base border border-gray-200 ${
              activeTab === 'buy' ? 'text-white' : 'bg-purple-50 text-gray-800'
            } rounded-l-md`}
            style={{
              background:
                activeTab === 'buy' ? 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)' : '',
              fontFamily: 'Roboto',
            }}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            className={`flex-1 h-10 text-center text-base ${
              activeTab === 'sell' ? 'text-white' : 'bg-purple-50 text-gray-800'
            } rounded-r-md`}
            style={{
              background:
                activeTab === 'sell' ? 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)' : '#EFE7F4',
              fontFamily: 'Roboto',
            }}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </button>
        </div>

        {/* Price Input */}
        <div className="w-full">
          <div className="text-gray-500 text-sm mb-1.5">Price</div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-base">{price}</span>
            <span className="text-gray-400 text-base">USDT</span>
          </div>
        </div>

        {/* Amount Input */}
        <div className="w-full">
          <div className="text-gray-500 text-sm mb-1.5">Amount</div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-base">{amount}</span>
            <span className="text-gray-400 text-base">BTC</span>
          </div>
        </div>

        {/* Percentage Buttons */}
        <div className="w-full flex gap-2 justify-between">
          {['25%', '50%', '75%', '100%'].map((percent) => (
            <button
              key={percent}
              className={`flex-1 text-center py-2 rounded-md text-sm ${
                selectedPercentage === percent
                  ? 'bg-gray-200 font-medium'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => handlePercentageClick(percent)}
            >
              {percent}
            </button>
          ))}
        </div>

        {/* Buy/Sell Button */}
        <div className="w-full">
          <button
            className="w-full text-white rounded-md py-3 font-semibold text-base"
            style={{
              background: 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)',
            }}
          >
            {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <span className="text-amber-500 font-semibold">{zoomLevel}x</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">1x</span>
            <input
              type="range"
              min="1"
              max="100"
              value={zoomLevel}
              onChange={handleZoomChange}
              className="flex-1 h-1.5 bg-gray-200 rounded appearance-none"
            />
            <span className="text-sm text-gray-600">100x</span>
          </div>
        </div>

        {/* Funding Info */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between text-gray-500">
            <span className="text-sm">Next funding in</span>
            <span className="text-amber-500 font-medium">{timeRemaining}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span className="text-sm">Est. rate</span>
            <span className="text-green-500 font-medium">{estRate}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TradingPanel;
