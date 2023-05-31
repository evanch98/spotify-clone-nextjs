"use client";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return ( 
    <div>{children}</div>
  );
}

export default Header;
