"use client";
import React, { useState } from "react";
import Image from "next/image";

import { ChevronDown } from "lucide-react";
import { SendHorizontal } from "lucide-react";

import GoalsIcon from "/public/goalsIcons/goals.svg";
import MiniStatistics from "../components/MiniStatistics";

const page = () => {
  const [goalTime, setGoalTime] = useState("Anual");
  const [showDropdown, setShowDropdown] = useState(false);

  const goalList = [
    "goal1",
    "goal2",
    "goal3",
    "goal4",
    "goal5",
    "goal6",
    "goal7",
    "goal8",
  ];

  const handleChange = (goalTime: string) => {
    setGoalTime(goalTime);
  };

  return (
    <div className="flex flex-col md:flex-row  md:gap-6 justify-center lg:pr-80 lg:min-h-screen lg:box-content ">
      <div className="flex flex-col flex-grow gap-3">
        <div className="py-2 px-2 lg:px-24 box-border flex bg-zinc-950 justify-center rounded-xl">
          <div className=" max-w-2xl  flex flex-grow flex-col shadow-md ">
            {/* <div className="text-5xl lg:text-7xl font-extrabold text-center col-span-full opacity-10">
              <h1>Nova Meta</h1>
            </div> */}
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
                    <div className="min-w-[8.7rem] h-30 fixed bg-zinc-800 rounded-lg flex flex-col text-center gap-1 font-extrabold  border-zinc-950 ">
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
        <div className="flex overflow-x-auto max-w-[46rem] self-center rounded-lg gap-2">
          {goalList.map(() => (
            <div className="bg-zinc-950 w-52  rounded-lg box-border">
              <div className=" p-6 pb-2 rounded-lg box-border">
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Objetivo</p>
                  <p className="font-bold opacity-80">Correr</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Tipo</p>
                  <p className="font-bold opacity-80">Anual</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Meta</p>
                  <p className="font-bold opacity-80">120</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Mensal</p>
                  <p className="font-bold opacity-80">10</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Semanal</p>
                  <p className="font-bold opacity-80">2.5</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Diario</p>
                  <p className="font-bold opacity-80">0.357</p>
                </span>
                <span className="flex justify-between border-b">
                  <p className="font-extrabold">Atual</p>
                  <p className="font-bold opacity-80">120</p>
                </span>
              </div>
              <div className="flex gap-1 p-1.5">
                <input
                  className="w-[9.5rem] py-1 rounded-lg  bg-zinc-400 text-center text-zinc-900 font-bold text-base placeholder-zinc-600"
                  placeholder="Progresso"
                />
                <button className="p-2  bg-green-950 rounded hover:bg-green-900 justify-center items-center">
                  <SendHorizontal width={"1.6rem"} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="w-full h-full mt-4 pb-28 userstats-md userstats-lg bg-zinc-900 lg:border-l-0 mx-2">
        <div className="my-4 mr-4">
          <MiniStatistics />
        </div>
        <div className="h-full  max-h-[25rem]  border rounded-lg "></div>
      </section>
    </div>
  );
};

export default page;
