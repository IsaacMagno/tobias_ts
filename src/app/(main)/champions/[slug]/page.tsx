"use client";
import React from "react";

import UserStats from "../../components/UserStats";
import UserBiography from "../../components/UserBiography";
import UserStatistics from "../../components/UserStatistics";

const ChampionPage = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-md lg:gap-6">
      <div className="flex flex-col ">
        {/* USER BIOGRAPHY */}
        <UserBiography />
        {/* USER STATISTICS */}
        <UserStatistics />
      </div>
      {/* USER STATS */}
      <UserStats />
    </div>
  );
};

export default ChampionPage;
