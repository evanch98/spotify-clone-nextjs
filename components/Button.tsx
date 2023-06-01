"use client";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return ( 
    <div>
      {children}
    </div>
  );
}

export default Button;
