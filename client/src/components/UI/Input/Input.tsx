/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  className?: string;
  field?: any;
}

export const Input = ({
  type = 'text',
  id,
  field,
  className,
  placeholder = '',
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <input
        {...field}
        type={type}
        id={id}
        className={`py-3 px-4 block w-full border-2 border-solid border-[#f4f4f4] rounded text-sm focus:outline-none focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${className}`}
        placeholder={placeholder}
      />
    </label>
  );
};
