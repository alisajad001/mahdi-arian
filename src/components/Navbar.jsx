import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
import MobileNav from "./MobileNav";

const Navbar = ({ setThemeDark, themeDark }) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="p-4 dark:bg-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-md">Mahdi Arian</h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 sm:flex ml-auto">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="ml-auto mr-5 sm:ml-5">
          {/* Theme Toggle */}
          {themeDark ? (
            <BsBrightnessHighFill
              className="cursor-pointer"
              onClick={() => setThemeDark(!themeDark)}
            />
          ) : (
            <BsMoonStarsFill
              className="cursor-pointer"
              onClick={() => setThemeDark(!themeDark)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <MobileNav mobileNav={mobileNav} />

        {mobileNav ? (
          <FaXmark
            className="z-20 cursor-pointer text-xl"
            onClick={() => setMobileNav(false)}
          />
        ) : (
          <FaBarsStaggered
            className="sm:hidden cursor-pointer text-lg"
            onClick={() => setMobileNav(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
