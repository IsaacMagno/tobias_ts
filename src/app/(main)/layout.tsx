// "use client";
import { ReactNode, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "/public/tobias_icon.jpg";
import Link from "next/link";

import SidebarMenu from "./components/SidebarMenu";
import BottombarMenu from "./components/BottombarMenu";

function AppLayout({ children }: { children: ReactNode }) {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const [windowSize, setWindowSize] = useState({
  //   width: 0,
  //   height: 0,
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen antialiased text-white bg-zinc-900 ">
      {/* {isSidebarOpen && (
      
              <div
                className="fixed inset-0 z-10 bg-zinc-950 opacity-70 lg:hidden "
                aria-hidden="true"
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
              ></div>
      )} */}

      {/* {(windowSize.width >= 1023 ||
        (windowSize.width <= 1024 && isSidebarOpen)) && ( */}

      <SidebarMenu />

      {/* Mobile TopBar */}

      <main className="flex-1">
        <div className="flex flex-col flex-1 min-h-screen p-4 overflow-x-hidden overflow-y-auto  lg:pl-72">
          {children}
          <BottombarMenu />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
