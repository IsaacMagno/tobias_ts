"use client";
import React from "react";

import UserStats from "(main)/components/UserStats";
import UserBiography from "(main)/components/UserBiography";
import UserStatistics from "(main)/components/UserStatistics";
import UserAchievements from "(main)/components/UserAchievements";

const ChampionPage = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-md md:gap-6 justify-center items-center lg:items-start lg:pr-80 lg:min-h-screen lg:box-content">
      <div className="flex flex-col gap-5">
        {/* USER BIOGRAPHY */}
        <UserBiography displayBio={true} />
        {/* USER STATISTICS */}
        <UserStatistics />
        {/* USER ACHIEVEMENTS */}
        <UserAchievements />
      </div>
      {/* USER STATS */}
      <UserStats />
    </div>
  );
};

export default ChampionPage;
