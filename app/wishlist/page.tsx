import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

type CryptoAsset = {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: string
  volume24h: string
}

export default function WishlistPage() {
  const cryptoAssets: CryptoAsset[] = [
    {
      id: "1",
      name: "Bitcoin",
      symbol: "BTC",
      price: 68420.5,
      change24h: 2.34,
      marketCap: "$1.34T",
      volume24h: "$32.5B",
    },
    {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      price: 3720.25,
      change24h: -1.12,
      marketCap: "$448.7B",
      volume24h: "$18.2B",
    },
    {
      id: "3",
      name: "Solana",
      symbol: "SOL",
      price: 172.9,
      change24h: 5.67,
      marketCap: "$76.8B",
      volume24h: "$3.4B",
    },
    {
      id: "4",
      name: "XRP",
      symbol: "XRP",
      price: 0.52,
      change24h: 0.78,
      marketCap: "$28.3B",
      volume24h: "$1.2B",
    },
    {
      id: "5",
      name: "Cardano",
      symbol: "ADA",
      price: 0.45,
      change24h: -0.92,
      marketCap: "$15.9B",
      volume24h: "$0.8B",
    },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm min-h-[500px] h-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Watchlist Table</h2>
        <div className="mr-12">
          <Button className="w-[103px] h-[42px] bg-gradient-to-r from-[#630C92] to-[#360750] hover:from-[#5A0A85] hover:to-[#2F064C] text-white flex items-center gap-2 justify-center">
            <img src="/vector.svg" alt="Vector Icon" className="w-6 h-6" />
            Status
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-poppins text-sm tracking-[1%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left w-10"><Checkbox /></th>
              <th className="p-3 text-left font-medium text-gray-600">Asset</th>
              <th className="p-3 text-left font-medium text-gray-600">Price (USD)</th>
              <th className="p-3 text-left font-medium text-gray-600">24h Change</th>
              <th className="p-3 text-left font-medium text-gray-600">Market Cap</th>
              <th className="p-3 text-left font-medium text-gray-600">24h Volume</th>
              <th className="p-3 text-left font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="p-3"><Checkbox /></td>
                <td className="p-3">{asset.name} ({asset.symbol})</td>
                <td className="p-3">
                  ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="p-3">
                  <div className="flex items-center text-gray-700 font-medium">
                    {asset.change24h >= 0 ? (
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="#00C853">
                        <polygon points="12,4 4,20 20,20" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="#FF1744">
                        <polygon points="4,4 20,4 12,20" />
                      </svg>
                    )}
                    {Math.abs(asset.change24h).toFixed(2)}%
                  </div>
                </td>
                <td className="p-3">{asset.marketCap}</td>
                <td className="p-3">{asset.volume24h}</td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <img src="/edit.svg" alt="Edit" className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <img src="/trash.svg" alt="Delete" className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
