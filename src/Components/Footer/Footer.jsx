import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-10 md:py-20">
      <div className="flex flex-wrap max-w-[1400px] gap-y-3 mx-auto px-10">
        <div className="flex-1 basis-[350px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Brad for a High Content of Benificial Substances, Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2026 &copy; all rights Reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions or Feedback? <br />
            we'd love to hear from you.
          </p>
          <div className="p-1 rounded-lg mt-6 flex bg-white  ">
            <input type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" className="h-[5vh] pl-4 flex-1 focus:outline-none"/>
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
                <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
