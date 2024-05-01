export default function Select(props: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <select
      {...props}
      className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
    ></select>
  );
}
