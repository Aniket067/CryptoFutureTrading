import React, { useState } from 'react';

interface ToggleOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface PriceCandleToggleProps {
  options: ToggleOption[];
  defaultSelected?: string;
  onChange?: (selected: string) => void;
}

const PriceCandleToggle: React.FC<PriceCandleToggleProps> = ({
  options,
  defaultSelected = options[0]?.id,
  onChange
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleOptionClick = (optionId: string) => {
    setSelected(optionId);
    if (onChange) onChange(optionId);
  };

  return (
    <div className="inline-flex bg-[#B78FCD] rounded-md p-1">
      {options.map((option) => {
        const isSelected = selected === option.id;
        const isCandle = option.id === 'candle';
        const textColor = isSelected
          ? 'text-black'
          : isCandle
          ? 'text-[#ADADAD]'
          : 'text-gray-200';

        return (
          <button
            key={option.id}
            className={`flex items-center justify-center px-4 py-2 rounded-md transition-all font-medium ${
              isSelected ? 'bg-white shadow-sm' : ''
            } ${textColor}`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.icon && <span className="mr-2">{option.icon}</span>}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default function PriceToggleExample() {
  const options: ToggleOption[] = [
    {
      id: 'price',
      label: 'Price',
      icon: <img src="/mo.svg" alt="Price Icon" className="w-4 h-4" />
    },
    {
      id: 'candle',
      label: 'Candle',
      icon: <img src="/candle.svg" alt="Candle Icon" className="w-4 h-4" />
    }
  ];

  return <PriceCandleToggle options={options} />;
}
