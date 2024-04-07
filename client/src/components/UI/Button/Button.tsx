import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLink?: boolean;
  path?: string;
}

export const Button = ({
  label,
  className,
  onClick,
  type = 'button',
  disabled = false,
  isLink = false,
  path = '/',
}: ButtonProps) => {
  const style = `font-montserrat font-medium flex justify-center items-center gap-2 text-white px-4 py-2 rounded bg-blue-700 hover:bg-blue-900 transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed ${className}`;

  return isLink ? (
    <Link to={path} className={style}>
      {label}
    </Link>
  ) : (
    <button type={type} className={style} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
