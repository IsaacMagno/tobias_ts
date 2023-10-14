import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import Logo from "/public/tobias_icon.jpg";

const BottombarMenu = () => {
  return (
    <div className="flex justify-center py-6 px-2 items-center h-12 w-full lg:hidden bg-zinc-800 fixed inset-x-0 bottom-0  z-50 lg:static lg:inset-auto lg:bottom-auto lg:z-auto box-border">
      <Link
        href="/"
        className="w-[3rem] h-[3rem]  flex justify-center items-center rounded-full"
      >
        <Image
          className="w-[calc(40px-4px)] h-[calc(40px-4px)] rounded-full border-2"
          alt={"Tobias Logo"}
          src={Logo}
        />
      </Link>

      <ul className="flex">
        <li>
          <Link
            href={"/champions"}
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/champions.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/goals"
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/tasks.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/achievments.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/quests.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/market.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center flex-row  hover:bg-stone-700 hover:bg-opacity-80 rounded-md hover:cursor-pointer"
          >
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/config.svg"}
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottombarMenu;
