import React, { useState } from "react";
import Image from "next/image";
import TobiasLogo from "/public/tobias_icon.jpg";
import SidebarButtons from "./SidebarButtons";

interface SideBarProps {
  sidebarOpen: boolean;
}

const Sidebar2 = ({ sidebarOpen }: SideBarProps) => {
  return (
    <div
      className={`flex flex-col justify-between md:justify-normal bg-stone-900  text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 z-20 fixed h-full w-[300px] transition-transform .3s ease-in-out md:-translate-x-0 ${
        !sidebarOpen ? "-translate-x-full" : ""
      }`}
    >
      <div className="hidden md:flex md:py-12 md:justify-center">
        <Image
          alt={"alt"}
          src={TobiasLogo}
          className="rounded-full hover:cursor-pointer border-2 w-16 lg:w-40"
        />
      </div>
      <SidebarButtons />
    </div>
  );
};

export default Sidebar2;
