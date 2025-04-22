import { useState, useEffect } from "react";

export default function BitcoinChart() {
  // Fixed dimensions as requested
  const dimensions = { width: 900, height: 500 };
  
  // Data points precisely matching the chart in the image
  const data = [
    { time: '8', value: 15302 },
    { time: '8 01:30', value: 15320 },
    { time: '8 03:00', value: 15330 },
    { time: '8 04:30', value: 15325 },
    { time: '8 06:00', value: 15320 },
    { time: '8 07:30', value: 15310 },
    { time: '8 09:00', value: 15330 },
    { time: '8 10:30', value: 15325 },
    { time: '8 12:00', value: 15315 },
    { time: '8 13:30', value: 15310 },
    { time: '8 15:00', value: 15315 },
    { time: '8 16:30', value: 15320 },
    { time: '8 18:00', value: 15315 },
    { time: '8 19:30', value: 15310 },
    { time: '8 21:00', value: 15280 },
    { time: '8 22:30', value: 15345 },
    { time: '9 00:00', value: 15340 },
    { time: '9 01:30', value: 15300 },
    { time: '9 03:00', value: 15330 },
    { time: '9 04:30', value: 15360 },
    { time: '9 06:00', value: 15345 },
    { time: '9 07:30', value: 15370 },
    { time: '9 09:00', value: 15340 },
    { time: '9 10:30', value: 15380 },
    { time: '9 12:00', value: 15370 },
    { time: '9 13:30', value: 15355 },
    { time: '9 15:00', value: 15385 },
    { time: '9 16:30', value: 15350 },
    { time: '9 18:00', value: 15330 },
    { time: '9 19:30', value: 15365 },
    { time: '9 21:00', value: 15380 },
    { time: '9 22:30', value: 15330 },
    { time: '10 00:00', value: 15385 },
    { time: '10 01:30', value: 15405 },
    { time: '10 03:00', value: 15440 },
    { time: '10 04:30', value: 15425 },
    { time: '10 06:00', value: 15410 },
    { time: '10 07:30', value: 15445 },
    { time: '10 09:00', value: 15430 },
    { time: '10 10:30', value: 15415 },
    { time: '10 12:00', value: 15410 },
  ];

  // Calculate min and max values from the image
  const minValue = 15280;
  const maxValue = 15460;
  const padding = { top: 20, right: 80, bottom: 40, left: 10 };
  const chartWidth = dimensions.width - padding.left - padding.right;
  const chartHeight = dimensions.height - padding.top - padding.bottom;

  // Create path for line
  const createLinePath = () => {
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * chartWidth + padding.left;
      const y = chartHeight - ((d.value - minValue) / (maxValue - minValue)) * chartHeight + padding.top;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return points.join(' ');
  };

  // Create grid lines
  const createGridLines = () => {
    const horizontalLines = [];
    const verticalLines = [];
    const horizontalCount = 18; // More grid lines to match image exactly
    const verticalCount = 12;

    // Horizontal grid lines - exactly as in image
    for (let i = 0; i <= horizontalCount; i++) {
      const y = chartHeight * (i / horizontalCount) + padding.top;
      const value = maxValue - ((maxValue - minValue) * (i / horizontalCount));
      
      horizontalLines.push(
        <line 
          key={`h-${i}`} 
          x1={padding.left} 
          y1={y} 
          x2={chartWidth + padding.left} 
          y2={y} 
          stroke="#f0f0f0" 
          strokeWidth="1"
        />
      );
    }

    // Add Y-axis price values as shown in image
    const priceValues = [
      15460.00, 15450.00, 15440.00, 15430.00, 15420.00, 15410.12, 
      15400.00, 15390.00, 15380.00, 15370.00, 15360.00, 15350.00, 
      15340.00, 15330.00, 15320.00, 15310.00, 15300.00, 15290.00, 15280.00
    ];
    
    priceValues.forEach((price, i) => {
      const y = chartHeight * (i / (priceValues.length - 1)) + padding.top;
      horizontalLines.push(
        <text 
          key={`price-${i}`} 
          x={chartWidth + padding.left + 10} 
          y={y + 4} 
          fontSize="11" 
          textAnchor="start" 
          fill="#333"
        >
          {price.toFixed(2)}
        </text>
      );
    });

    // Vertical grid lines
    for (let i = 0; i <= verticalCount; i++) {
      const x = chartWidth * (i / verticalCount) + padding.left;
      verticalLines.push(
        <line 
          key={`v-${i}`} 
          x1={x} 
          y1={padding.top} 
          x2={x} 
          y2={chartHeight + padding.top} 
          stroke="#f0f0f0" 
          strokeWidth="1"
        />
      );
    }
    
    // Add X-axis time values as shown in image
    const timeLabels = ['8', '06:00', '12:00', '18:00', '9', '06:00', '12:00', '18:00', '10', '06:00', '12:00', '18:00'];
    
    timeLabels.forEach((label, i) => {
      const x = chartWidth * (i / (timeLabels.length - 1)) + padding.left;
      verticalLines.push(
        <text 
          key={`time-${i}`} 
          x={x} 
          y={chartHeight + padding.top + 15} 
          fontSize="11" 
          textAnchor="middle" 
          fill="#333"
        >
          {label}
        </text>
      );
    });

    return [...horizontalLines, ...verticalLines];
  };

  // Current price indicator - exactly as in image
  const getCurrentPriceIndicator = () => {
    const price = 15410.12;
    const y = chartHeight - ((price - minValue) / (maxValue - minValue)) * chartHeight + padding.top;
    
    return (
      <g>
        <line 
          x1={padding.left} 
          y1={y} 
          x2={chartWidth + padding.left} 
          y2={y} 
          stroke="#333" 
          strokeWidth="1" 
          strokeDasharray="2,2" 
        />
        <rect 
          x={chartWidth + padding.left + 2} 
          y={y - 10} 
          width={60} 
          height={20} 
          fill="#111" 
          rx={2} 
        />
        <text 
          x={chartWidth + padding.left + 30} 
          y={y + 4} 
          fontSize="11" 
          textAnchor="middle" 
          fill="white"
        >
          15410.12
        </text>
      </g>
    );
  };

  // TradingView logo
  

  // Bottom toolbar exactly as in image
  const renderBottomToolbar = () => {
    const buttons = ['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', '5Y', 'All'];
    const spacing = 20;
    const startX = padding.left + 5;
    
    return (
      <g>
        {buttons.map((btn, i) => (
          <text 
            key={`btn-${i}`} 
            x={startX + i * spacing * 1.5} 
            y={chartHeight + padding.top + 30} 
            fontSize="11" 
            fontWeight="500"
            fill="#333"
          >
            {btn}
          </text>
        ))}
        
        <text 
          x={chartWidth + padding.left - 150} 
          y={chartHeight + padding.top + 30} 
          fontSize="11" 
          fill="#333" 
          textAnchor="end"
        >
          09:27:02 (UTC)
        </text>
        
        <text 
          x={chartWidth + padding.left - 110} 
          y={chartHeight + padding.top + 30} 
          fontSize="11" 
          fill="#333"
        >
          %
        </text>
        
        <text 
          x={chartWidth + padding.left - 90} 
          y={chartHeight + padding.top + 30} 
          fontSize="11" 
          fill="#333"
        >
          log
        </text>
        
        <text 
          x={chartWidth + padding.left - 65} 
          y={chartHeight + padding.top + 30} 
          fontSize="11" 
          fill="#2196F3"
        >
          auto
        </text>
        
        {/* Settings icon */}
        <g transform={`translate(${chartWidth + padding.left - 25}, ${chartHeight + padding.top + 26})`}>
          <circle r="8" fill="transparent" stroke="transparent" />
          <path d="M-4,-1 L4,-1 M-4,1 L4,1 M-4,3 L4,3" stroke="#333" strokeWidth="1.5" />
        </g>
      </g>
    );
  };

  // Render settings icon in top right
  const renderSettingsIcon = () => {
    return (
      <g transform={`translate(${chartWidth + padding.left - 20}, ${padding.top + 10})`}>
        <circle r="8" fill="transparent" stroke="transparent" />
        <path d="M0,-4 L0,4 M-4,0 L4,0" stroke="#333" strokeWidth="1.5" />
      </g>
    );
  };

  // USD dropdown in top right
  const renderUsdDropdown = () => {
    return (
      <g transform={`translate(${chartWidth + padding.left - 45}, ${padding.top - 5})`}>
        <text 
          fontSize="11" 
          fontWeight="500"
          fill="#333"
        >
          USD
        </text>
        <path d="M25,5 L30,10 L35,5" fill="none" stroke="#333" strokeWidth="1" />
      </g>
    );
  };

  return (
    <div className="w-full h-full bg-white">
      <svg width={dimensions.width} height={dimensions.height}>
        {createGridLines()}
        <path 
          d={createLinePath()} 
          fill="none" 
          stroke="#2196F3" 
          strokeWidth="2" 
        />
        {getCurrentPriceIndicator()}
    
        {renderBottomToolbar()}
        {renderSettingsIcon()}
        {renderUsdDropdown()}
        
        {/* Add icon for settings bottom right */}
        <g transform={`translate(${chartWidth + padding.left - 20}, ${chartHeight + padding.top + 7})`}>
          <circle r="8" fill="transparent" stroke="transparent" />
          <path d="M-3,-3 L3,3 M-3,3 L3,-3" stroke="#333" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}