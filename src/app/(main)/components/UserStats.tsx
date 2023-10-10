import React from "react";
import Image from "next/image";

import userStatsImage from "/public/userStats/stats.svg";
import userActivitiesImage from "/public/userStats/activities.svg";

const userStats = () => {
  return (
    <section className="w-full h-full mt-4 md:mt-0 max-w-xs md:w-[30vh] p-2 md:border-l-2 lg:px-4">
      <div className="flex items-center justify-center gap-2">
        <Image src={userStatsImage} alt="user stats" className="w-10 h-10" />

        <h1 className="text-xl font-semibold my-4 ">Caracteristica</h1>
      </div>

      <ul className="list-none space-y-2">
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Força</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Agilidade</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Inteligencia</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Vitalidade</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Sabedoria</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-2 my-4 ">
        <Image
          src={userActivitiesImage}
          alt="user stats"
          className="w-10 h-10"
        />

        <h1 className="text-xl font-semibold ">Atividades</h1>
      </div>

      <ul className="list-none space-y-2">
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Km Corridos</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Saltos de Corda
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Km Pedalados</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Treino Superior
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Treino Abdominal
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Treino Inferior
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Refeições Saudáveis
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Litros de Água</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Horas de Sono</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Horas Estudando
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">
              Horas Meditando
            </p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-sm lg:text-[15px] font-medium">Horas Lendo</p>
            <p className="text-sm lg:text-[15px] font-bold opacity-80">9999</p>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default userStats;
