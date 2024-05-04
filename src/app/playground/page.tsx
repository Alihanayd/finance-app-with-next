import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import PageHeader from "@/components/page-header";
import Select from "@/components/select";
import Seperator from "@/components/seperator";
import Skeleton from "@/components/skeleton";
import TransactionItem from "@/components/transaction-item";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Trend from "@/components/trend";

export default function Playground() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4-xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
      </div>
      <Seperator />
      <div>
        <PageHeader className="" />
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
      </div>
      <Seperator />
      <div className="flex space-x-4">
        <Trend type="Income" amount={1000} prevAmount={500} />
        <Trend type="Expense" amount={500} prevAmount={300} />
        <Trend type="Investment" amount={2000} prevAmount={0} />
        <Trend type="Saving" amount={2000} prevAmount={0} />
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
      </div>
      <Seperator />
      <div className="space-y-4">
        <TransactionItem
          type="Income"
          category="income"
          description="Salary"
          amount={2000}
        />
        <TransactionItem
          type="Expense"
          category="expense"
          description="Groceries"
          amount={100}
        />
        <TransactionItem
          type="Investment"
          category="investment"
          description="Stocks"
          amount={1000}
        />
        <TransactionItem
          type="Saving"
          category="saving"
          description="Emergency fund"
          amount={1000}
        />
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem</h2>
      </div>
      <Seperator />
      <div>
        <TransactionSummaryItem date="2021-09-01" amount={1000} />
        <TransactionItem
          type="Income"
          category="income"
          description="Salary"
          amount={2000}
        />
        <TransactionItem
          type="Expense"
          category="expense"
          description="Groceries"
          amount={100}
        />
        <TransactionItem
          type="Investment"
          category="investment"
          description="Stocks"
          amount={1000}
        />
        <TransactionItem
          type="Saving"
          category="saving"
          description="Emergency fund"
          amount={1000}
        />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Button</h2>
      </div>
      <Seperator />
      <div className="space-x-4">
        <Button>Hello</Button>
        <Button variant="outline">Hello</Button>
        <Button variant="ghost">Hello</Button>
        <Button size="xs">Hello</Button>
        <Button size="sm">Hello</Button>
        <Button size="lg">Hello</Button>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
      </div>
      <Seperator />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Your name</Label>

          <Input type="text" placeholder="Text input" />
        </div>
        <div>
          <Label className="mb-1"> City</Label>
          <Select>
            <option>Bursa</option>
            <option>Istanbul</option>
            <option>Ankara</option>
          </Select>
        </div>
        <div className="flex items-center">
          <Input type="checkbox" id="terms" />

          <Label className="ml-2" htmlFor="terms">
            Accept terms
          </Label>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
      </div>
      <Seperator />
      <div className="space-y-8">
        <div className="flex space-x-4">
          <Skeleton className="" />
          <Skeleton className="" />
          <Skeleton className="" />
        </div>
        <div className="space-y-4">
          <Skeleton className="" />
          <Skeleton className="" />
          <Skeleton className="" />
        </div>
      </div>
    </main>
  );
}
