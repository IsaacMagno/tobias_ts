"use client";
import React, { useState } from "react";

import UserBiography from "./components/UserBiography";
import UserStats from "./components/UserStats";
import Calendar from "./components/Calendar";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-green-500");

  return (
    <div className="flex flex-col md:flex-row rounded-md md:gap-6 justify-center items-center lg:items-start">
      <div className="flex flex-col gap-3">
        <UserBiography displayBio={false} />
        <div className="flex justify-center items-center gap-4 p-3">
          <div className="flex flex-col gap-2">
            <button
              className="bg-green-500 p-4 rounded-lg hover:opacity-70"
              onClick={() => setBgColor("bg-green-500")}
            ></button>
            <button
              className="bg-yellow-500 p-4 rounded-lg hover:opacity-70"
              onClick={() => setBgColor("bg-yellow-500")}
            ></button>
            <button
              className="bg-red-500 p-4 rounded-lg hover:opacity-70"
              onClick={() => setBgColor("bg-red-500")}
            ></button>
            <button
              className="bg-blue-500 p-4 rounded-lg hover:opacity-70"
              onClick={() => setBgColor("bg-blue-500")}
            ></button>
          </div>
          <div className={`flex ${bgColor} h-56 w-96 rounded-lg`}></div>
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <UserStats />
    </div>
  );
}
