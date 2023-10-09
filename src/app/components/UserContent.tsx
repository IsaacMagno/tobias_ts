import React from "react";
import Image from "next/image";
import tobImage from "/public/tobs.jpeg";
import daystreakImage from "/public/userstreak/daystreak.svg";
import xpImage from "/public/userstreak/xp.svg";
import levelImage from "/public/userstreak/level.svg";

const UserContent = () => {
  return (
    <div className="flex flex-col grow max-w-5xl gap-3">
      <div className="flex flex-col justify-center items-center bg-blue-500 gap-2 border-b-2 py-2">
        <div className="flex justify-between bg-red-500 min-w-full gap-3 p-3">
          <div>
            <h1 className="text-2xl font-bold">Tobias</h1>
            <p className="font-semibold opacity-80">Chimpanzé Sapiens</p>
          </div>
          <div className="lg:p-1 flex justify-center items-center ">
            <Image
              className="w-auto max-w-[3.87rem] rounded-full border-2"
              alt={"teste"}
              src={tobImage}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="text-md font-medium  ">
            Se alguém é capaz de me convencer e me evidenciar que o que penso ou
            faço não é correto, será com contentamento que me corrigirei;
            afinal, procuro a verdade, a qual jamais causou danos a alguém.
            Aquele, porém, que persevera no engano e na ignorância causa danos a
            si mesmo.
          </span>
        </div>
      </div>
      <div className="container p-3 flex flex-col lg:gap-6 ">
        <div>
          <h1 className="text-2xl font-bold pb-6">Estatísticas</h1>
        </div>
        <div className="flex flex-wrap gap-4 items-center lg:justify-center">
          <div className="userstreaks-div">
            <span className="userstreaks-span">
              <Image
                className="userstreaks-img"
                alt={"teste"}
                src={daystreakImage}
              />
              <div className="userstreak-text-div">
                <p className="font-extrabold lg:text-xl ">999999</p>
                <p className="font-bold opacity-80">Dias seguidos</p>
              </div>
            </span>
          </div>
          <div className="userstreaks-div">
            <span className="userstreaks-span">
              <Image className="userstreaks-img" alt={"teste"} src={xpImage} />
              <div className="userstreak-text-div">
                <p className="font-extrabold lg:text-xl">999999</p>
                <p className="font-bold opacity-80">Total de XP</p>
              </div>
            </span>
          </div>
          <div className="userstreaks-div">
            <span className="userstreaks-span">
              <Image
                className="userstreaks-img"
                alt={"teste"}
                src={levelImage}
              />
              <div className="userstreak-text-div">
                <p className="font-extrabold lg:text-xl">999999</p>
                <p className="font-bold opacity-80">Nivel alcançado</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 grow-2">Conquistas</div>
    </div>
  );
};

export default UserContent;
