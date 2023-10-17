"use client";
import React, { useState } from "react";
import GoalsIcon from "/public/goalsIcons/goals.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const page = () => {
  const [goalTime, setGoalTime] = useState("Anual");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (goalTime: string) => {
    setGoalTime(goalTime);
  };

  return (
    <div className="flex flex-col md:flex-row  md:gap-6 justify-center lg:pr-80 lg:min-h-screen lg:box-content bg-zinc-900">
      <div className="flex flex-col flex-grow gap-3">
        <div className="py-2 px-2 lg:px-24">
          <div className=" bg-zinc-950 py-6 pb-52 rounded-xl flex justify-center  shadow-md">
            <h1 className="text-5xl lg:text-7xl font-extrabold new-goal text-center text-zinc-500 ">
              Nova Meta
            </h1>
            <Image
              src={GoalsIcon}
              alt="goals icon"
              className="w-44 lg:w-60 absolute mr-32 lg:mr-44 mt-6 lg:mt-10"
            />
            <div className="absolute mt-16 lg:mt-20 flex flex-col gap-2 ml-[9.7rem] lg:ml-44">
              <div className="" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="absolute  ml-[6.8rem] bg-zinc-800 border-2 border-black w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full appearance-none outline-none hover:cursor-pointer">
                  <ChevronDown className=" text-zinc-950 " />
                </div>
                <input
                  className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-lg  appearance-none outline-none border-2 border-zinc-950 "
                  placeholder={goalTime}
                  readOnly
                />
                {showDropdown ? (
                  <div className="min-w-[8.7rem] h-30 fixed bg-zinc-800 rounded flex flex-col text-center gap-1 font-extrabold  border-zinc-950">
                    <span
                      className="hover:bg-zinc-700 hover:cursor-pointer"
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
                      className="hover:bg-zinc-700 hover:cursor-pointer"
                      onClick={() => handleChange("Diaria")}
                    >
                      Diaria
                    </span>
                  </div>
                ) : null}
              </div>
              <div>
                <input
                  className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-lg appearance-none outline-none border-2 border-zinc-950 text-zinc-800"
                  placeholder="Objetivo"
                />
              </div>
              <div>
                <input
                  className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-lg appearance-none outline-none border-2 border-zinc-950 text-zinc-800"
                  placeholder="Meta"
                />
              </div>

              <div>
                <button className="w-36 rounded-full py-0.5 lg:py-1 font-extrabold text-center text-lg border-2 border-black bg-zinc-600 hover:bg-zinc-600/90">
                  Criar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>Metas atuais</div>
      </div>
      <div className="bg-green-500 ">
        <div>Micro statistics</div>
        <div>Metas Alcançadas</div>
      </div>
    </div>
  );
};

export default page;
