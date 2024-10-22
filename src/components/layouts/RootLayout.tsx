import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Bell, Mail, Zap, Menu, X, LayoutGridIcon } from "lucide-react";
import { NavigationItems } from "../NavigationItems";
import MyApps from "../MyApp";

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMyAppsOpen, setMyAppsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMyApps = () => {
    setMyAppsOpen(!isMyAppsOpen);
  };

  const dummyData = {
    avatar: "https://picsum.photos/50?random=24",
    name: "Your account ",
    profileUrl: "#",
  };

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <header className="bg-white text-black">
        <nav className="container mx-auto max-w-7xl p-4 flex justify-between items-center">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src="/makerble-logo.png" alt="Logo" className="h-7 mr-4" />
            </Link>
            <ul className="hidden md:flex space-x-4">
              <NavigationItems.Desktop />
              <li className="relative inline-block">
                <button
                  onClick={toggleMyApps}
                  className="flex items-center py-2 px-4 transition-colors duration-300 ease-in-out text-gray-700 hover:text-gray-500 focus:outline-none"
                >
                  <LayoutGridIcon className="mr-2" /> My Apps
                </button>
                {isMyAppsOpen && (
                  <div className="absolute left-0 z-10 bg-white shadow-lg mt-2 rounded-md w-48">
                    <MyApps />
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <Zap className="mr-2" />
            <Mail className="mr-2" />
            <Bell className="mr-2" />
            <Link
              to={dummyData.profileUrl}
              className="flex items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={dummyData.avatar}
                alt={dummyData.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="text-lg font-semibold text-gray-800">
                {dummyData.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center lg:hidden md:hidden">
            <Zap className="mr-2" />
            <Mail className="mr-2" />
            <Bell className="mr-2" />
            <Link
              to={dummyData.profileUrl}
              className="flex items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:p-3"
            >
              <img
                src={dummyData.avatar}
                alt={dummyData.name}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
              />
              <span className="hidden sm:block text-base md:text-lg font-semibold text-gray-800">
                {dummyData.name}
              </span>
            </Link>
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
              <li>
                <button
                  onClick={toggleMyApps}
                  className="flex items-center py-2 px-4 transition-colors duration-300 ease-in-out text-gray-700 hover:text-gray-500 focus:outline-none"
                >
                  <LayoutGridIcon className="mr-2" /> My Apps
                </button>
                {isMyAppsOpen && (
                  <div className="absolute left-0 z-10 bg-white shadow-lg mt-2 rounded-md w-48">
                    <MyApps />
                  </div>
                )}
              </li>
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
