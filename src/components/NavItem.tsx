// NavItem.tsx
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative inline-block py-2 px-4 transition-colors duration-300 ease-in-out ${
          isActive
            ? "text-black border-b-2 border-black"
            : "text-gray-700 hover:text-gray-500"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
