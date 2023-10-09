"use client";
import React, { useEffect, useState } from "react";
import UserContent from "@/components/UserContent";
import Image from "next/image";
import MonkeyImage from "/public/tobs.jpeg";

const ShowProfile = () => {
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
    <div className="flex flex-col lg:flex-row h-full rounded-md bg-red-300">
      <div className="flex flex-col bg-blue-300">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex-1 flex-col">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold">Tobias</h1>
                <p className="text-lg font-semibold text-gray-400">
                  Chimpanzé Sapiens
                </p>
              </div>

              {windowSize.width <= 639 && (
                <div className="flex justify-center items-center rounded-full bg-zinc-300">
                  <Image
                    className="w-14 h-14 rounded-full"
                    alt={"Monkey Image"}
                    src={MonkeyImage}
                  />
                </div>
              )}
            </div>
            <div className="flex mt-2">
              <span className="text-md">
                Se alguém é capaz de me convencer e me evidenciar que o que
                penso ou faço não é correto, será com contentamento que me
                corrigirei; afinal, procuro a verdade, a qual jamais causou
                danos a alguém. Aquele, porém, que persevera no engano e na
                ignorância causa danos a si mesmo.
              </span>
            </div>
          </div>

          {windowSize.width >= 640 && (
            <div className="flex justify-center items-center w-48 h-48 rounded-full bg-zinc-300">
              <Image
                className="w-48 h-48 rounded-full"
                alt={"Monkey Image"}
                src={MonkeyImage}
              />
            </div>
          )}
        </div>
        {/* <div className="flex">
          <span className="text-md font-medium">
            Se alguém é capaz de me convencer e me evidenciar que o que penso ou
            faço não é correto, será com contentamento que me corrigirei;
            afinal, procuro a verdade, a qual jamais causou danos a alguém.
            Aquele, porém, que persevera no engano e na ignorância causa danos a
            si mesmo.
          </span>
        </div> */}
      </div>

      <section className="w-full h-full mt-2 lg:mt-0 bg-green-300 p-2">
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

        <h1 className="text-2xl text-center font-semibold my-4">Atividades</h1>

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

      {/* <div className="hidden lg:flex flex-col bg-orange-500 grow min-w-max max-w-lg ">
          <div className="bg-pink-500 flex grow">Stats</div>
          <div className="bg-yellow-500  grow-2">Activities</div>
        </div> */}
    </div>
  );
};

export default ShowProfile;
