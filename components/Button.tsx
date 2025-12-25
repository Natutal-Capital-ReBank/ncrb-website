import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-lg inline-block text-center";

  const variantStyles = {
    primary: "bg-gradient-to-r from-green-600 to-blue-600 text-white",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-green-600",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none"
    : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} disabled={disabled}>
      {children}
    </button>
  );
}
