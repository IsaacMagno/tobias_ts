"use client";
import React, { useState, ReactNode } from "react";
import Navbar from "./Sidebar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-rows-navbar">
      <div className="z-10 md:h-0 md:hidden">
        <Navbar
          onNavbarButtonClick={() => setSidebarOpen((prev) => !prev)}
          navbarIsOpen={sidebarOpen}
        />
      </div>

      <div className="grid md:grid-cols-sidebar md:min-h-screen">
        <Sidebar sidebarOpen={sidebarOpen} />

        <div className="m-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
