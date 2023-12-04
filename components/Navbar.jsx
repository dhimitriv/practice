import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white )]">
      <h1 className="w-full text-3xl font-bold text-blue-900">SMART STORE</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Prices</li>
        <li className="p-4">Products</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <HiMenuAlt3 size={35} className="cursor-pointer " />
        ) : (
          <RiCloseLine size={35} className="cursor-pointer " />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-800 bg-[#06061f] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-blue-900 m-3">
          SMART STORE
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4">Home</li>
          <li className="p-4">Prices</li>
          <li className="p-4">Products</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
