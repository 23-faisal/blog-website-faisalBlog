import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaGithub,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //navItems

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50  bg-opacity-90">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex md:gap-6 items-center justify-between ">
        <Link to="/" className="font-logo">
          <span className="text-xl font-bold text-white ">Faisal</span>
          <span className="text-xl font-bold text-orange-500 ">Blog</span>
        </Link>

        {/* navitems */}
        <ul className="md:flex md:gap-6 lg:gap-12 md:items-center text-md font-semibold hidden font-primary ">
          {navItems.map(({ path, link }) => (
            <li className="text-white font-primary" key={path}>
              <NavLink
                className={
                  location.pathname === path
                    ? "text-orange-500 border-b-2 border-orange-500 transition-all ease-in-out duration-200"
                    : "text-white"
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}

        <div className="text-white md:flex gap-4 items-center hidden">
          <Link
            to="/"
            className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
          >
            <FaGithub />
          </Link>
          <Link
            to="/"
            className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="/"
            className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
          >
            <FaDribbble />
          </Link>
          <button className="text-white bg-orange-500 font-semibold text-md  px-6 py-2 rounded hover:text-orange-500 hover:bg-white transition-all ease-in duration-200 ">
            Log in
          </button>
        </div>

        {/* mobile menu */}

        <div className="md:hidden">
          <button onClick={ToggleMenu} className="cursor-pointer">
            {menuOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* menu item only for mobile  */}

      {menuOpen && (
        <div className="pb-12 h-screen">
          <ul className="md:hidden font-semibold text-lg flex flex-col items-center gap-3 py-6 transition ease-in duration-800 ">
            {navItems.map(({ path, link }) => (
              <li
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white "
                key={path}
              >
                <NavLink
                  className={
                    location.pathname === path
                      ? "text-orange-500"
                      : "text-white"
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="text-white flex gap-12 items-center justify-center mt-6">
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              to="/"
              className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
            >
              <FaGithub />
            </Link>
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              to="/"
              className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
            >
              <FaXTwitter />
            </Link>
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              to="/"
              className="hover:text-orange-500 text-xl transition-all duration-200 ease-in"
            >
              <FaDribbble />
            </Link>
          </div>
          <div className="flex items-center justify-center my-12">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-orange-500 font-semibold text-md  px-6 py-2 rounded hover:text-orange-500 hover:bg-white transition-all ease-in duration-200 "
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
