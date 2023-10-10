import React from "react";
import Image from "next/image";

import userStatsImage from "/public/userStats/stats.svg";
import userActivitiesImage from "/public/userStats/activities.svg";

const userStats = () => {
  return (
    <section className="w-full h-full mt-4 lg:mt-0 max-w-xs p-2 lg:border-l-2 lg:px-4">
      <div className="flex items-center justify-center gap-2  ">
        <Image src={userStatsImage} alt="user stats" className="w-10 h-10" />

        <h1 className="text-xl font-semibold my-4 ">Caracteristica</h1>
      </div>

      <ul className="list-none space-y-2">
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Força</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Agilidade</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Inteligencia</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Vitalidade</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Sabedoria</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-2  ">
        <Image
          src={userActivitiesImage}
          alt="user stats"
          className="w-10 h-10"
        />

        <h1 className="text-2xl text-center font-semibold my-4">Atividades</h1>
      </div>

      <ul className="list-none space-y-2">
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Km Corridos</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Saltos de Corda</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Km Pedalados</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Treino Superior</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Treino Abdominal</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Treino Inferior</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Refeições Saudáveis</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Litros de Água</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Horas de Sono</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Horas Estudando</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Horas Meditando</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
        <li>
          <span className="flex justify-between border-b">
            <p className="text-md font-semibold">Horas Lendo</p>
            <p className="text-md font-bold opacity-80">9999</p>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default userStats;
