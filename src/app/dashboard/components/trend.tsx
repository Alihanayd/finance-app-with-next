import BaseTrend from "@/components/trend";

export default async function Trend({ type }: { type: string }) {
  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(2000);
  const response = await fetch(`http://localhost:3100/trends/${type}`);
  const { amount, prevAmount } = await response.json();
  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
}
