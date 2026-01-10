import React, { useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  useEffect(() => {
    const handlescroll =() =>{
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);



  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-99 ${isScrolled ? ' drop-shadow-[0_2px_4px_rgba(0,0,0,0.09)]' : '' } transition-shadow duration-300`}>
      <nav className="max-w-[1400px] px-10 md:h-[14vh] h-[12vh] items-center mx-auto flex justify-between">
        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">O</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-800 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          <div className="md:flex border-2 border-amber-500 rounded-full p-1 hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search...."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl ">
              <IoSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoHeartSharp />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          <a href="#" className="text-zinc-800 text-3xl md:hidden"onClick={toggleMenu}>
            {showMenu ? <MdRestaurantMenu /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Screen Action */}
        <ul className={`flex flex-col p-10 gap-y-12 bg-orange-500/40 backdrop-blur-sm items-center shadow-xl gap-x-15 md:hidden absolute top-20 -left-full transform -translate-x-1/2 rounded-lg ${showMenu ? 'left-1/2' : ""} transition-all duration-300`}>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-800 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex border-2 border-amber-500 rounded-full p-1 md:hidden ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search...."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl ">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
