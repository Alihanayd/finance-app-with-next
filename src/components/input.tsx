export default function Input(props: {
  type: string;
  placeholder?: string;
  className?: string;
  id?: string;
}) {
  const styles: { [key: string]: string } = {
    checkbox:
      "rounded shadow-sm border-gray-300 text-gray-700 bg-white dark:border-gray-700 dark:text-gray-500 dark:bg-gray-950",
    default:
      "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };
  return <input {...props} className={styles[props.type] ?? styles.default} />;
}
