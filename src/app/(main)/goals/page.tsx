"use client";
import React, { useState } from "react";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

import GoalsIcon from "/public/goalsIcons/goals.svg";
import MiniStatistics from "../components/MiniStatistics";
import ActualGoalsScrollBar from "./ActualGoalsScrollBar";

const page = () => {
  const [goalTime, setGoalTime] = useState("Anual");
  const [showDropdown, setShowDropdown] = useState(false);

  const goalsCompleted = [
    { name: "Correr 120km", date: "19/10/2023" },
    { name: "Ler 5 livros", date: "22/05/2023" },
    { name: "Investir R$ 10.000,00", date: "03/04/2023" },
  ];

  const handleChange = (goalTime: string) => {
    setGoalTime(goalTime);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row  md:gap-6 justify-center lg:pr-80 lg:min-h-screen lg:box-content ">
      <div className="flex flex-col flex-grow gap-3">
        <div className="py-2 px-2 lg:px-24 box-border flex bg-zinc-950 justify-center rounded-xl">
          <div className=" max-w-2xl  flex flex-grow flex-col shadow-md ">
            <div className="flex justify-evenly">
              <Image
                src={GoalsIcon}
                alt="goals icon"
                className="w-36 lg:w-48"
              />

              <div className="flex flex-col gap-2 py-2">
                <div
                  className=""
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="absolute ml-[7.20rem] lg:ml-[6.8rem] bg-zinc-800 border-2 border-black w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center rounded-full appearance-none outline-none hover:cursor-pointer">
                    <ChevronDown className=" text-zinc-950 " />
                  </div>
                  <input
                    className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-sm md:text-lg  appearance-none outline-none border-2 border-zinc-950 "
                    placeholder={goalTime}
                    readOnly
                  />
                  {showDropdown ? (
                    <div className="min-w-[8.7rem] h-30 absolute bg-zinc-800 rounded-lg flex flex-col text-center gap-1 font-extrabold  border-zinc-950 ">
                      <span
                        className="hover:bg-zinc-700 hover:cursor-pointer hover:rounded-t-lg"
                        onClick={() => handleChange("Anual")}
                      >
                        Anual
                      </span>
                      <span
                        className="hover:bg-zinc-700 hover:cursor-pointer"
                        onClick={() => handleChange("Mensal")}
                      >
                        Mensal
                      </span>
                      <span
                        className="hover:bg-zinc-700 hover:cursor-pointer"
                        onClick={() => handleChange("Semanal")}
                      >
                        Semanal
                      </span>
                      <span
                        className="hover:bg-zinc-700 hover:cursor-pointer  hover:rounded-b-lg"
                        onClick={() => handleChange("Diaria")}
                      >
                        Diaria
                      </span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <input
                    className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-sm md:text-lg appearance-none outline-none border-2 border-zinc-950 text-zinc-800"
                    placeholder="Objetivo"
                  />
                </div>
                <div>
                  <input
                    className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-sm md:text-lg appearance-none outline-none border-2 border-zinc-950 text-zinc-800"
                    placeholder="Meta"
                  />
                </div>

                <div>
                  <button className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-sm md:text-lg border-2 border-black bg-zinc-600 hover:bg-zinc-600/90">
                    Criar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block pb-24 lg:pb-0">
          <ActualGoalsScrollBar />
        </div>
      </div>
      <section className="w-full h-full pb-4 lg:mt-4 lg:pb-28 userstats-md userstats-lg bg-zinc-900 lg:border-l-0 mx-2">
        <div className="my-4 mr-4 flex justify-center lg:block">
          <MiniStatistics />
        </div>
        <div className="h-full flex flex-col gap-2  max-h-[25rem]  border rounded-lg p-2">
          <span className="flex justify-between items-center ">
            <h1 className="w-1 font-extrabold">Metas Alcançadas</h1>
            <h1 className="opacity-50 font-extrabold hover:opacity-80">
              Ver todas
            </h1>
          </span>
          <span className="flex">
            <ul className="min-w-full">
              {goalsCompleted.map((goal, index) => (
                <li className="font-light text-xs" key={index}>
                  <span className="flex justify-between">
                    <p>{goal.name}</p>
                    <p>{goal.date}</p>
                  </span>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </section>
    </div>
  );
};

export default page;
