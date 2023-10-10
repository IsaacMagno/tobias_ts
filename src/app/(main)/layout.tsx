"use client";
import { ReactNode, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "/public/tobias_icon.jpg";

function LoginLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen antialiased text-white bg-zinc-900">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-zinc-950 opacity-70 lg:hidden "
          aria-hidden="true"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        ></div>
      )}

      {(windowSize.width >= 1023 ||
        (windowSize.width <= 1024 && isSidebarOpen)) && (
        <aside className="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-zinc-950 lg:static focus:outline-none p-2 space-y-2">
          <div className="w-full flex flex-col justify-center items-center my-6">
            <button
              onClick={() => {
                console.log("click logo");
              }}
            >
              <span className=" w-[9.5rem] h-[9.5rem] bg-white flex justify-center items-center rounded-full">
                <Image
                  className="w-[calc(150px-4px)] h-[calc(150px-4px)] rounded-full"
                  alt={"Tobias Logo"}
                  src={Logo}
                />
              </span>
            </button>
          </div>

          <ul className="list-none">
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div className="p-1">
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/champions.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Campeões</span>
                </span>
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div className="p-1">
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/tasks.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Metas</span>
                </span>
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div className="p-1">
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/achievments.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Conquistas</span>
                </span>
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div className="p-1">
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/quests.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Missões</span>
                </span>
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div className="p-1">
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/market.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Loja</span>
                </span>
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer">
                <span className="flex items-center flex-row px-1 py-2 hover:bg-stone-700 hover:bg-opacity-80 rounded-md">
                  <div>
                    <Image
                      alt={"alt"}
                      src={"/sidebarIcons/config.svg"}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="sidebar-button-text">Ajustes</span>
                </span>
              </a>
            </li>
          </ul>
        </aside>
      )}

      <div className="flex justify-between py-6 px-2 items-center space-x-4 h-12 w-full lg:hidden bg-zinc-800">
        {!isSidebarOpen ? (
          <span className=" w-[3rem] h-[3rem]  flex justify-center items-center rounded-full">
            <Image
              className="w-[calc(40px-4px)] h-[calc(40px-4px)] rounded-full border-2"
              alt={"Tobias Logo"}
              src={Logo}
            />
          </span>
        ) : null}

        <button
          className="p-1 text-white transition-colors duration-200 rounded-md bg-zinc-950 hover:text-white-600 hover:bg-indigo-100"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <span className="sr-only">Toggle main manu</span>
          <span aria-hidden="true">{isSidebarOpen ? <X /> : <Menu />}</span>
        </button>
      </div>

      <main className="flex-1">
        <div className="flex flex-col flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default LoginLayout;
