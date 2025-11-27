import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  external,
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 rounded hover:-translate-y-1 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-magenta to-neon-pink text-white hover:shadow-neon border border-transparent hover:border-neon-light",
    secondary: "bg-dark-card text-white border border-neon-purple/50 hover:bg-neon-magenta/20 hover:border-neon-pink hover:shadow-neon",
    outline: "bg-transparent border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white hover:shadow-neon",
    whatsapp: "bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
      </span>
      {/* Glint effect on hover */}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/5"></div>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};