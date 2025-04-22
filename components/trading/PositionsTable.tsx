import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export interface Position {
  id: string;
  symbol: string;
  size: string;
  entryPrice: number;
  markPrice: string;
  liqPrice: string;
  marginRatio: string;
  margin: string;
  pnl: number;
}

interface PositionsTableProps {
  positions: Position[];
}

export function PositionsTable({ positions }: PositionsTableProps) {
  return (
    <div className="rounded-lg p-4 font-roboto"> {/* Applied font-roboto here */}
      <h3 className="text-lg font-medium text-purple-900 mb-4">
        Positions <span className="text-[#14A86E]">({positions.length})</span>
      </h3>

      <div className="overflow-x-auto">
        <div className="w-full">
          <PositionsTableHeader />
          <div className="flex flex-col gap-y-3 mt-2">
            {positions.map((position) => (
              <PositionRow key={position.id} position={position} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PositionsTableHeader() {
  return (
    <div className="bg-gray-100 p-3 flex rounded-md">
      <div className="w-10">
        <Checkbox />
      </div>
      <div className="font-medium text-gray-600 w-1/6">Symbol</div>
      <div className="font-medium text-gray-600 w-1/6">Size</div>
      <div className="font-medium text-gray-600 w-1/6">Entry Price</div>
      <div className="font-medium text-gray-600 w-1/6">Mark Price</div>
      <div className="font-medium text-gray-600 w-1/6">Liq Price</div>
      <div className="font-medium text-gray-600 w-1/6">Margin Ratio</div>
      <div className="font-medium text-gray-600 w-1/6">Margin</div>
      <div className="font-medium text-gray-600 w-1/6">PNL(ROE%)</div>
    </div>
  );
}

interface PositionRowProps {
  position: Position;
}

function PositionRow({ position }: PositionRowProps) {
  return (
    <div className="flex p-3 bg-white hover:bg-gray-50 rounded-md shadow-sm">
      <div className="w-10">
        <Checkbox />
      </div>
      <div className="w-1/6">{position.symbol}</div>
      <div className="w-1/6">{position.size}</div>
      <div className="w-1/6">
        <div className="flex items-center text-black">
          {position.entryPrice >= 0 ? (
            <TriangleUp className="h-4 w-4 mr-1 text-green-500" />
          ) : (
            <TriangleDown className="h-4 w-4 mr-1 text-red-500" />
          )}
          {Math.abs(position.entryPrice).toFixed(2)}%
        </div>
      </div>
      <div className="w-1/6">{position.markPrice}</div>
      <div className="w-1/6">{position.liqPrice}</div>
      <div className="w-1/6">{position.marginRatio}</div>
      <div className="w-1/6">{position.margin}</div>
      <div className="w-1/6">
        <div className="flex items-center space-x-2">
          <img src="/edit.svg" alt="Edit" className="h-6 w-6" />
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <img src="/arrow.svg" alt="Arrow" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Triangle Up Icon
function TriangleUp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 6l6 12H6l6-12z" />
    </svg>
  );
}

// Triangle Down Icon
function TriangleDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 18L6 6h12l-6 12z" />
    </svg>
  );
}
