import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Bell, Mail, Zap, Menu, X } from "lucide-react";
import { NavigationItems } from "../NavigationItems";

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <header className="bg-white text-black">
        <nav className="container mx-auto max-w-7xl p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/makerble-logo.png" alt="Logo" className="h-7 mr-4" />
            </Link>
            <ul className="hidden md:flex space-x-4">
              <NavigationItems.Desktop />
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <Zap className="mr-2" />
            <Mail className="mr-2" />
            <Bell className="mr-2" />
            <div className="text-lg font-bold">User Profile</div>
          </div>
          <div className="flex items-center lg:hidden md:hidden">
            <Zap className="mr-2" />
            <Mail className="mr-2" />
            <Bell className="mr-2" />
            <div className="text-lg font-bold">User Profile</div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <ul className="flex flex-col space-y-2">
              <NavigationItems.Mobile onClick={toggleMobileMenu} />
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto max-w-7xl p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
