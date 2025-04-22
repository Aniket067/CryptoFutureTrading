import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PriceInputProps {
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currency: string;
}

function PriceInput({ label = "Price", value, onChange, currency }: PriceInputProps) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <div className="relative">
        <Input value={value} onChange={onChange} className="bg-gray-100 pr-16" />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {currency}
        </div>
      </div>
    </div>
  );
}

function AmountButtons() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {[25, 50, 75, 100].map((percent) => (
        <Button key={percent} variant="outline" size="sm" className="text-xs">
          {percent}%
        </Button>
      ))}
    </div>
  );
}

interface ActionButtonProps {
  action: "buy" | "sell";
}

function ActionButton({ action }: ActionButtonProps) {
  const isLong = action === "buy";
  
  return (
    <Button
      className={`w-full ${isLong 
        ? "bg-gradient-to-r from-[#630C92] to-[#360750] hover:bg-purple-900" 
        : "bg-red-500 hover:bg-red-600"}`}
      style={isLong ? {
        width: '262px',
        height: '48px',
        top: '204px',
        borderRadius: '8px',
        background: 'linear-gradient(126.34deg, #630C92 0%, #360750 86.18%)',
        border: '1px solid #E5E7EB',
      } : {}}
    >
      {isLong ? "Buy BTC" : "Sell BTC"}
    </Button>
  );
}

interface LeverageSliderProps {
  leverage: number;
  setLeverage: (value: number) => void;
}

function LeverageSlider({ leverage, setLeverage }: LeverageSliderProps) {
  return (
    <div className="pt-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm">1x</span>
        <span className="text-sm font-medium">{leverage}x</span>
        <span className="text-sm">100x</span>
      </div>
      <Slider
        value={[leverage]}
        min={1}
        max={100}
        step={1}
        onValueChange={(value) => setLeverage(value[0])}
        className="[&_[role=slider]]:bg-blue-500"
      />
    </div>
  );
}

function FundingInfo() {
  return (
    <div className="pt-4 space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-gray-500">Next funding in</span>
        <span className="text-sm font-medium text-orange-500">03:24:16</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-500">Est. rate</span>
        <span className="text-sm font-medium text-green-500">+0.0124%</span>
      </div>
    </div>
  );
}

interface TradingFormProps {
  action: "buy" | "sell";
  leverage: number;
  setLeverage: (value: number) => void;
}

export function TradingForm({ action, leverage, setLeverage }: TradingFormProps) {
  const [price, setPrice] = useState<string>("48234.5");
  const [amount, setAmount] = useState<string>("0.00");

  return (
    <>
      <PriceInput 
        value={price} 
        onChange={(e) => setPrice(e.target.value)}
        currency="USDT"
      />
      
      <PriceInput 
        label="Amount"
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        currency="BTC"
      />
      
      <AmountButtons />
      
      <ActionButton action={action} />
      
      <LeverageSlider 
        leverage={leverage}
        setLeverage={setLeverage}
      />
      
      <FundingInfo />
    </>
  );
}