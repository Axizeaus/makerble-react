import React from "react";
import { Link } from "react-router-dom";

interface MobileNavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 px-4 text-gray-700 hover:text-gray-500 transition-colors duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default MobileNavItem;
