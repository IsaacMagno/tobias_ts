"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MonkeyImage from "/public/tobs.jpeg";

const UserBiography = () => {
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
            <div className="flex justify-center items-center rounded-full ">
              <Image
                className="w-14 h-14 rounded-full border-2"
                alt={"Monkey Image"}
                src={MonkeyImage}
              />
            </div>
          )}
        </div>
        <div className="flex mt-2 max-w-xl lg:max-w-2xl ">
          <span className="text-sm">
            Se alguém é capaz de me convencer e me evidenciar que o que penso ou
            faço não é correto, será com contentamento que me corrigirei;
            afinal, procuro a verdade, a qual jamais causou danos a alguém.
            Aquele, porém, que persevera no engano e na ignorância causa danos a
            si mesmo.
          </span>
        </div>
      </div>
      {windowSize.width >= 640 && (
        <div className="flex justify-center items-center w-48 h-48 rounded-full">
          <Image
            className=" w-44 h-44 rounded-full border-2"
            alt={"Monkey Image"}
            src={MonkeyImage}
          />
        </div>
      )}
    </div>
  );
};

export default UserBiography;
