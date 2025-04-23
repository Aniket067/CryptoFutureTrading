interface TotalAssetValueProps {
  value: string
  btcValue: string
}

export function TotalAssetValue({ value, btcValue }: TotalAssetValueProps) {
  return (
    <div className="bg-purple-50 rounded-xl p-4 sm:p-5 md:p-6">
      <div className="text-xs sm:text-sm md:text-base font-semibold leading-tight tracking-wider mb-1 font-poppins text-gray-400">
        Total asset value
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold">$ {value}</div>
        <img
          src="/visibilityIcon.svg"
          alt="Visibility Icon"
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
      </div>
      <div className="text-xs sm:text-sm text-gray-500 mt-1">~ {btcValue} BTC</div>
    </div>
  )
}