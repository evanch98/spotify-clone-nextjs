"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle log out
  };

  return ( 
    <div>{children}</div>
  );
}

export default Header;
