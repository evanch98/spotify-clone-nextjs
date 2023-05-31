"use client";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return ( 
    <div>{children}</div>
  );
}

export default Header;
