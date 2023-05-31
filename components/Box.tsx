"use client";

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  children,
}) => {
  return ( 
    <div>{children}</div>
  );
}

export default Box;