import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

interface NavigationItem {
  to: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/organisations", label: "Organisations" },
  { to: "/album", label: "Album" },
  { to: "/explore", label: "Explore" },
  { to: "/boards", label: "Boards" },
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
