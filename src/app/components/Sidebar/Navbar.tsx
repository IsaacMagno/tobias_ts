import React, { useState } from "react";
import Image from "next/image";
import TobiasLogo from "/public/tobias_icon.jpg";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  onNavbarButtonClick(): void;
  navbarIsOpen: boolean;
}

const Navbar = ({ onNavbarButtonClick, navbarIsOpen }: NavbarProps) => {
  return (
    <nav className="text-zinc-500 flex items-center w-full fixed z-10 px-4 shadow-sm h-16 md:hidden justify-between p-2 bg-stone-900 ">
      <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center">
        <Image
          className="rounded-full hover:cursor-pointer object-cover w-9 h-9"
          alt={"alt"}
          src={TobiasLogo}
        />
      </div>
      <button className="md:hidden" onClick={onNavbarButtonClick}>
        {navbarIsOpen ? (
          <X color="#fff" size={36} />
        ) : (
          <Menu color="#fff" size={36} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
