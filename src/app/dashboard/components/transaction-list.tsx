import Seperator from "@/components/seperator";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";

type paramTypes = {
  id: number;
  type: string;
  category: string;
  description: string;
  amount: number;
  created_at: string;
};

const groupAndSumTransactionsByDate = (transactions: paramTypes[]) => {
  const grouped: {
    [key: string]: { transactions: paramTypes[]; amount: number };
  } = {}; // Add index signature
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = {
        transactions: [],
        amount: 0,
      };
    }
    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }
  return grouped;
};

export default async function TransactionList() {
  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(2000);

  const response = await fetch("http://localhost:3100/transactions");
  const transactions = await response.json();

  const grouped = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummaryItem date={date} amount={amount} />
          <Seperator />
          <section className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
