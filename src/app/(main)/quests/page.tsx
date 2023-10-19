"use client";
import React, { useState } from "react";
import Image from "next/image";

import { AlarmClock } from "lucide-react";

import MonthChallenge from "/public/questsIcon/monthChallenge.svg";
import MiniStatistics from "../components/MiniStatistics";

const page = () => {
  const [goalTime, setGoalTime] = useState("Anual");
  const [showDropdown, setShowDropdown] = useState(false);

  const goalsCompleted = [
    { name: "Correr 2km 7 dias", date: "21/09/2023" },
    { name: "Fazer 30 flexões 5 dias", date: "10/05/2023" },
    { name: "200km de bike em 30 dias", date: "03/04/2023" },
  ];

  const handleChange = (goalTime: string) => {
    setGoalTime(goalTime);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row  md:gap-6 justify-center lg:pr-80 lg:min-h-screen lg:box-content ">
      <div className="flex flex-col flex-grow gap-3 pb-24 lg:pb-0">
        <div
          className="p-10 lg:px-24 box-border flex bg-zinc-950 justify-center rounded-xl overflow-hidden relative"
          id="div-limite"
        >
          <Image
            alt="challenge image"
            src={MonthChallenge}
            className="lg:w-96 absolute opacity-80 ml-20 lg:ml-32 top-[-30px] lg:top-[-80px]"
          />
          <div className=" max-w-2xl  flex flex-grow flex-col shadow-md  z-10 relative">
            <div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <span className="font-extrabold text-2xl ">Desafio do Mês</span>
                <span className="flex items-end ">
                  <AlarmClock
                    className="mb-1 opacity-80"
                    strokeWidth={3}
                    width={30}
                  />
                  <p className="self-end opacity-80 font-extrabold">30 dias</p>
                </span>
              </div>
              <div className="flex mb-16 lg:mb-24 ">
                <span className="font-extrabold text-xl text-zinc-600 p-2 px-6 rounded-lg bg-zinc-200">
                  Outubro
                </span>
              </div>
              <div className="">
                <div className="bg-zinc-900 rounded-lg p-3 lg:p-5">
                  <div className="lg:text-xl font-extrabold mb-6">
                    <p>Corra 50 (km) quilômetros</p>
                  </div>
                  <div className="flex box-content">
                    <span className="absolute w-[2rem] max-w-[31rem] bg-zinc-950 p-2 lg:py-3 rounded-lg left-[0.700rem] lg:left-[1.2rem] box-content"></span>
                    <span className="w-full bg-zinc-200 p-2 lg:py-3 rounded-lg  max-w-[31rem] box-content"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-rows-4 bg-blue-500 rounded-lg p-2 min-w-full">
            <div className="py-3 border-b flex items-center justify-evenly">
              <span>Image</span>
              <span className="">Correr 100 km por dia</span>
            </div>
            <div className="py-3 border-b flex items-center justify-evenly">
              <span>Image</span>
              <span className="">Correr 100 km por dia</span>
            </div>
            <div className="py-3 border-b flex items-center justify-evenly">
              <span>Image</span>
              <span className="">Correr 100 km por dia</span>
            </div>
            <div className="py-3 border-b flex items-center justify-evenly">
              <span>Image</span>
              <span className="">Correr 100 km por dia</span>
            </div>
          </div>
        </div>
      </div>
      {/* SIDE BAR */}
      <section className="w-full h-full pb-4  lg:pb-28 userstats-md userstats-lg bg-zinc-900 lg:border-l-0 mx-2">
        <div className="my-4 mr-4 flex justify-center lg:block">
          <MiniStatistics />
        </div>
        <div className="h-full flex flex-col gap-2  max-h-[25rem]  border rounded-lg p-2 mr-3.5 lg:mr-0">
          <span className="flex justify-between items-center ">
            <h1 className="w-1 font-extrabold">Missões Concluídas</h1>
            <h1 className="opacity-50 font-extrabold hover:opacity-80">
              Ver todas
            </h1>
          </span>
          <span className="flex ">
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
