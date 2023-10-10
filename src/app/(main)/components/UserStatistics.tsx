import React from "react";
import Image from "next/image";

import daystreakImage from "/public/userstreak/daystreak.svg";
import xpImage from "/public/userstreak/xp.svg";
import levelImage from "/public/userstreak/level.svg";

const UserStatistics = () => {
  return (
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
            <Image className="userstreaks-img" alt={"teste"} src={levelImage} />
            <div className="userstreak-text-div">
              <p className="font-extrabold lg:text-xl">999999</p>
              <p className="font-bold opacity-80">Nivel alcançado</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
