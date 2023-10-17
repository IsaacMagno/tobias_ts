import React from "react";
import Image from "next/image";
import daystreakImage from "/public/userstreak/daystreak.svg";
import xpImage from "/public/userstreak/xp.svg";
import levelImage from "/public/userstreak/level.svg";
import tobiasCoin from "/public/userstreak/tobiasCoin.svg";

const MiniStatistics = () => {
  return (
    <div className="flex gap-1">
      <div>
        <span className="flex  items-center gap-[0.200rem] ">
          <Image src={tobiasCoin} alt={"tobiasCoin image"} className="w-5" />
          <p className="font-bold text-xs opacity-50">999999</p>
        </span>
      </div>

      <div>
        <span className="flex  items-center gap-[0.200rem] ">
          <Image src={daystreakImage} alt={"daystreak image"} className="w-5" />
          <p className="font-bold text-xs opacity-50">999999</p>
        </span>
      </div>

      <div>
        <span className="flex  items-center gap-0 ">
          <Image src={xpImage} alt={"xp image"} className="w-5" />
          <p className="font-bold text-xs opacity-50">999999</p>
        </span>
      </div>

      <div>
        <span className="flex  items-center gap-[0.200rem] ">
          <Image src={levelImage} alt={"level image"} className="w-5" />
          <p className="font-bold text-xs opacity-50">999999</p>
        </span>
      </div>
    </div>
  );
};

export default MiniStatistics;
