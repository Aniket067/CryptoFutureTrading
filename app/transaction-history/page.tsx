import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

type Transaction = {
  id: string
  date: string
  type: string
  pair: string
  amount: string
  fee: string
  status: "Completed" | "Filled" | "Pending"
}

export default function TransactionHistoryPage() {
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2024-05-10 14:30:22",
      type: "Deposit",
      pair: "USDT",
      amount: "+5,000.00",
      fee: "0.00",
      status: "Completed",
    },
    {
      id: "2",
      date: "2024-05-10 14:25:15",
      type: "Buy",
      pair: "BTC/USDT",
      amount: "+0.15 BTC",
      fee: "7.50",
      status: "Filled",
    },
    {
      id: "3",
      date: "2024-05-09 09:12:45",
      type: "Withdrawal",
      pair: "ETH",
      amount: "-2.50 ETH",
      fee: "0.005",
      status: "Pending",
    },
    {
      id: "4",
      date: "2024-05-08 22:05:33",
      type: "Sell",
      pair: "SOL/USDT",
      amount: "-50.00 SOL",
      fee: "3.20",
      status: "Completed",
    },
    {
      id: "5",
      date: "2024-05-08 11:40:18",
      type: "Futures PNL",
      pair: "BTC-PERP",
      amount: "+120.50 USDT",
      fee: "0.00",
      status: "Completed",
    },
  ]

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>
      case "Filled":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>
      case "Pending":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{status}</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="bg-white rounded-lg px-6 pt-6 pb-40 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Transaction History Table</h2>
        <div className="mr-10">

        <Button className="w-[160px] h-[42px] bg-gradient-to-r from-[#630C92] to-[#360750] hover:from-[#5A0A85] hover:to-[#2F064C] text-white flex items-center gap-2 justify-center">
          <img src="/vector.svg" alt="Vector Icon" className="w-6 h-6" />
          Status Badges
        </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#EAEAEA]">
              <th className="p-3 text-left w-10">
                <Checkbox />
              </th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Date & Time</th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Type</th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Pair</th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Amount</th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Fee</th>
              <th className="p-3 text-left font-medium text-black text-[14px] leading-[100%] tracking-[0.01em] font-poppins">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="p-3">
                  <Checkbox />
                </td>
                <td className="p-3 text-[#323C47] text-[13px] leading-[100%] tracking-[0.01em] font-poppins font-normal">
                  {transaction.date}
                </td>
                <td className="p-3 text-[#323C47] text-[13px] leading-[100%] tracking-[0.01em] font-poppins font-normal">
                  {transaction.type}
                </td>
                <td className="p-3 text-[#323C47] text-[13px] leading-[100%] tracking-[0.01em] font-poppins font-normal">
                  {transaction.pair}
                </td>
                <td className="p-3 text-[#323C47] text-[13px] leading-[100%] tracking-[0.01em] font-poppins font-normal">
                  {transaction.amount}
                </td>
                <td className="p-3 text-[#323C47] text-[13px] leading-[100%] tracking-[0.01em] font-poppins font-normal">
                  {transaction.fee}
                </td>
                <td className="p-3">
                  {getStatusBadge(transaction.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
