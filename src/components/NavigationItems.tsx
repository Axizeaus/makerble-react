import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/organisations", label: "Organisations" },
  { to: "/album", label: "Album" },
];

export const NavigationItems = {
  Desktop: () => (
    <>
      {navigationItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.label}
        </NavItem>
      ))}
    </>
  ),
  Mobile: ({ onClick }: { onClick?: () => void }) => (
    <>
      {navigationItems.map((item) => (
        <MobileNavItem key={item.to} to={item.to} onClick={onClick}>
          {item.label}
        </MobileNavItem>
      ))}
    </>
  ),
};
