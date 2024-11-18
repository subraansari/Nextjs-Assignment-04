import React from 'react'
import Image from 'next/image'
import logo from '/public/logo img-1.png'
import Logo from '/public/logo img-2.png'
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full h-full  flex flex-col md:flex-row items-center justify-evenly px-4 py-4 md:py-8">
      {/* Logo */}
      <div className=" flex justify-center md:ml-5">
        <Image src={logo} alt="logo img-1" />
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex flex-row gap-10 cursor-pointer mt-4 md:mt-0">
        <li className="flex items-center">
          Shop
          <ChevronDown className="ml-1" />
        </li>
        <li>OnSale</li>
        <li>NewArrivals</li>
        <li>Brands</li>
      </ul>

      {/* Search Bar */}
      <form className="w-full md:w-[500px] relative mt-4 md:mt-0">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for products..."
            className="w-full p-4 rounded-full bg-[#F0F0F0] pl-12 pr-4"
          />
          <button
            type="submit"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 bg-[#F0F0F0]"
          >
            <Search />
          </button>
        </div>
      </form>

      {/* Secondary Logo */}
      <div className="hidden md:flex md:ml-12 mt-4 md:mt-0">
        <Image src={Logo} alt="logo img-2" />
      </div>
    </nav>
  );
};

export default Navbar;