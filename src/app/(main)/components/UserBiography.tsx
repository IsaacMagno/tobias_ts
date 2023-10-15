"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MonkeyImage from "/public/tobs.jpeg";
import daystreakImage from "/public/userstreak/daystreak.svg";
import xpImage from "/public/userstreak/xp.svg";
import levelImage from "/public/userstreak/level.svg";

interface UserBiographyProps {
  displayBio: boolean;
}

const UserBiography = ({ displayBio }: UserBiographyProps) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const displayMiniStatistics = () => {
    return (
      <div className="flex gap-1 ">
        <div>
          <span className="flex  items-center gap-0.5 ">
            <Image
              src={daystreakImage}
              alt={"daystreak image"}
              className="w-5"
            />
            <p className="font-bold text-sm opacity-50">999999</p>
          </span>
        </div>

        <div>
          <span className="flex  items-center gap-0.5 ">
            <Image src={xpImage} alt={"xp image"} className="w-5" />
            <p className="font-bold text-sm opacity-50">999999</p>
          </span>
        </div>

        <div>
          <span className="flex  items-center gap-0.5 ">
            <Image src={levelImage} alt={"level image"} className="w-5" />
            <p className="font-bold text-sm opacity-50">999999</p>
          </span>
        </div>
      </div>
    );
  };

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
    <div className="flex flex-row justify-between gap-2 pb-3 border-b-2">
      <div className="flex-1 flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-bold">Tobias</h1>
            <p className="text-lg font-semibold opacity-80">
              Chimpanzé Sapiens
            </p>
          </div>

          {windowSize.width <= 639 && (
            <div className="flex justify-center items-center ">
              <Image
                className="w-20 h-20 rounded-full border-2"
                alt={"Monkey Image"}
                src={MonkeyImage}
              />
            </div>
          )}
        </div>
        <div className="flex mt-4 max-w-xl lg:max-w-2xl ">
          {displayBio ? (
            <span className="text-sm">
              Se alguém é capaz de me convencer e me evidenciar que o que penso
              ou faço não é correto, será com contentamento que me corrigirei;
              afinal, procuro a verdade, a qual jamais causou danos a alguém.
              Aquele, porém, que persevera no engano e na ignorância causa danos
              a si mesmo.
            </span>
          ) : (
            <span className="flex flex-col gap-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                non eligendi commodi exercitationem! In, omnis. Fugiat illo
                architecto, nemo excepturi inventore quas deleniti quo delectus
                minus doloribus quaerat facilis ullam.
              </p>
              <p className="text-sm">Autor</p>
              {windowSize.width <= 639 && (
                <div className="flex  justify-end">
                  {displayMiniStatistics()}
                </div>
              )}
            </span>
          )}
        </div>
      </div>
      {windowSize.width >= 640 && (
        <div className="flex justify-center items-center self-end">
          {displayBio ? (
            <Image
              className=" w-44 h-44 rounded-full border-2"
              alt={"Monkey Image"}
              src={MonkeyImage}
            />
          ) : (
            <div className="">
              <div className="flex flex-col gap-2 items-center ">
                <Image
                  className=" w-44 h-44 rounded-full border-2"
                  alt={"Monkey Image"}
                  src={MonkeyImage}
                />
                {displayMiniStatistics()}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserBiography;
