export default function Label(props: {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}) {
  return (
    <label
      {...props}
      className={`text-gray-700 dark:text-gray-300 ${props.className}`}
    >
      {props.children}
    </label>
  );
}
