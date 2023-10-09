"use client";
import { ReactNode, useEffect, useState } from "react";
import { ChevronsLeft, ChevronsRight, Menu, X } from "lucide-react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Logo from "/public/tobias_icon.jpg";

function LoginLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSecondSidebarOpen, setIsSecondSidebarOpen] = useState(false);

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
    <div className="flex h-screen antialiased text-white bg-zinc-900">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-zinc-950 opacity-70 lg:hidden "
          aria-hidden="true"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        ></div>
      )}

      {(windowSize.width > 1023 ||
        (windowSize.width < 1024 && isSidebarOpen)) && (
        <aside className="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-zinc-950 lg:static focus:outline-none p-2 space-y-2">
          <div className="w-full flex flex-col justify-center items-center my-6">
            <button
              onClick={() => {
                console.log("click logo");
              }}
            >
              <span className="w-48 h-48 bg-zinc-300 flex justify-center items-center rounded-full">
                <Image
                  className="w-[calc(192px-4px)] h-[calc(192px-4px)] rounded-full"
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

      <div className="fixed flex items-center space-x-4 top-5 right-10 lg:hidden">
        <button
          className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-zinc-950 hover:text-indigo-600 hover:bg-indigo-100"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <span className="sr-only">Toggle main manu</span>
          <span aria-hidden="true">{isSidebarOpen ? <X /> : <Menu />}</span>
        </button>
        <button
          className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-zinc-950 hover:text-indigo-600 hover:bg-indigo-100"
          onClick={() => {
            setIsSecondSidebarOpen(!isSecondSidebarOpen);
          }}
        >
          {isSecondSidebarOpen ? <ChevronsLeft /> : <ChevronsRight />}
        </button>
      </div>

      <main className="flex-1">
        <div className="flex flex-col items-center justify-center flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto">
          <h1 className="mb-4 text-2xl font-semibold text-center md:text-3xl">
            Two Columns Sidebar
          </h1>
        </div>
      </main>

      {isSecondSidebarOpen && (
        <div
          onClick={() => {
            setIsSecondSidebarOpen(!isSecondSidebarOpen);
          }}
          className="fixed inset-0 z-10 bg-zinc-800 opacity-70 lg:hidden "
          aria-hidden="true"
        ></div>
      )}

      {(windowSize.width > 1023 ||
        (windowSize.width < 1024 && isSecondSidebarOpen)) && (
        <section className="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-zinc-950 lg:static p-2">
          <h1 className="text-2xl text-center font-semibold my-4">
            Caracteristica
          </h1>

          <ul className="list-none space-y-2">
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Força</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Agilidade</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Inteligencia</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Vitalidade</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Sabedoria</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
          </ul>

          <h1 className="text-2xl text-center font-semibold my-4">
            Atividades
          </h1>

          <ul className="list-none space-y-2">
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">KM Corridos</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Saltos de Corda</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">KM Pedalados</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Treino Superior</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Treino Abdominal</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Treino Inferior</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Refeições Saudáveis</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Litros de Água</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Horas de Sono</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Horas Estudando</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Horas Meditando</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
            <li>
              <span className="flex justify-between">
                <p className="text-md font-semibold">Horas Lendo</p>
                <p className="text-md font-bold">9999</p>
              </span>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default LoginLayout;
