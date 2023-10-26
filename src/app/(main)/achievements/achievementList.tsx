import React, { useState, useEffect } from "react";
import { Achievement } from "typings";
import AchievementDiv from "./achievementDiv";

const achievementList = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    fetch("/data/achievements.json")
      .then((response) => response.json())
      .then((data) => setAchievements(data));
  }, []);

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll  max-h-[50rem] pt-40 p-4 rounded-lg">
      {achievements.map((achievement, index) => (
        <AchievementDiv {...achievement} key={index} />
      ))}
    </div>
  );
};

export default achievementList;
