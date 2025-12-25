interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
}: CardProps) {
  const baseStyles = "rounded-2xl shadow-lg border border-gray-100 p-6";
  const hoverStyles = hover ? "transition-all transform hover:scale-105 hover:shadow-2xl" : "";
  const gradientStyles = gradient
    ? "bg-gradient-to-br from-white to-gray-50"
    : "bg-white";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
}
