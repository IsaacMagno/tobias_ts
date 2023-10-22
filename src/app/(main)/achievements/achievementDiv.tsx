import Image from "next/image";
import React, { useState } from "react";

import { Achievement } from "typings";

import xp from "/public/userstreak/xp.svg";
import tobiasCoin from "/public/userstreak/tobiasCoin.svg";
import achievPoints from "/public/userstreak/achievPoints.svg";

function AchievementDiv(achievement: Achievement) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="grid grid-cols-4 bg-zinc-600 p-2 rounded-lg gap-3"
      onClick={() => setShowMore(!showMore)}
    >
      <div className="flex flex-col items-center">
        <Image
          src={achievement.icon}
          alt="achievementIcon"
          width={12}
          height={12}
          className="w-8 lg:w-12"
        />
        <span className="font-bold text-sm lg:text-base lg:font-extrabold text-center">
          {achievement.name}
        </span>
      </div>

      <div className="bg-zinc-950 rounded-lg flex flex-grow flex-col items-center justify-center  col-span-2">
        <div className="flex flex-col lg:flex-row gap-2 justify-center">
          <span className="flex gap-1">
            <Image alt="xp" src={xp} className="w-4 lg:w-7" />
            <p>{achievement.rewards.xp}</p>
          </span>
          <span className="flex gap-1">
            <Image alt="tobiasCoin" src={tobiasCoin} className="w-4 lg:w-7" />
            <p>{achievement.rewards.tobiasCoins}</p>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="flex flex-col lg:flex-row gap-1 items-center ">
          <Image alt="achievementPoints" src={achievPoints} className="w-12" />
          <p className="font-extrabold lg:text-lg">
            {achievement.rewards.achievementPoints}
          </p>
        </span>
      </div>
      {showMore ? (
        <div className="col-span-full text-center">
          <p className="font-extrabold text-sm">{achievement.description}</p>
          <p className="font-extrabold text-sm">
            Completou: {achievement.date}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default AchievementDiv;
