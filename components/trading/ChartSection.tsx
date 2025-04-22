import React from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/trading-chart"), { ssr: false });

interface TimeIntervalButtonProps {
  interval: string;
}

function TimeIntervalButton({ interval }: TimeIntervalButtonProps) {
  const isActive = interval === "15m";
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={`
        w-[52.109375px]
        h-[28px]
        rounded-[4px]
        ${isActive ? "bg-[#630C92] text-white" : "text-gray-600"}
        font-roboto
      `}
    >
      {interval}
    </Button>
  );
}

interface ChartTypeButtonProps {
  icon: string;
}

function ChartTypeButton({ icon }: ChartTypeButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-[32px] w-[42px] rounded-[4px] bg-[#EFE7F4] border border-[#EFE7F4] flex items-center justify-center font-roboto"
    >
      <img src={icon} alt="Chart type" className="h-8 w-8" />
    </Button>
  );
}

export function ChartSection() {
  const timeIntervals = ["1m", "5m", "15m", "1h", "4h", "1d"];

  return (
    <div className="bg-white rounded-lg shadow-sm" style={{ width: "930px", height: "588px" }}>
      <div className="flex border-b p-2 font-roboto">
        <div className="flex space-x-1">
          {timeIntervals.map((interval) => (
            <TimeIntervalButton key={interval} interval={interval} />
          ))}
        </div>
        <div className="ml-auto flex space-x-1">
          <ChartTypeButton icon="/graph1.svg" />
          <ChartTypeButton icon="/graph2.svg" />
          <ChartTypeButton icon="/graph3.svg" />
        </div>
      </div>
      <div className="h-[calc(100%-48px)] w-full p-2 font-roboto">
        <Chart />
      </div>
    </div>
  );
}
