import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between">
          <div className="text-lg font-bold">Makerble</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-gray-300">
                project
              </Link>
            </li>
            <li>
              <Link to="/organisations" className="hover:text-gray-300">
                organisations
              </Link>
            </li>
            <li>
              <Link to="/album" className="hover:text-gray-300">
                album
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Makerble. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
