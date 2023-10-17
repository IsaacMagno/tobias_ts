import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row  md:gap-6 justify-center lg:pr-80 lg:min-h-screen lg:box-content">
      <div className="flex flex-col flex-grow gap-3">
        <div className="py-2 px-2 lg:px-24">
          <div className=" bg-zinc-950 py-6 pb-52 rounded-xl flex justify-center  shadow-md">
            <h1 className="text-5xl lg:text-7xl font-extrabold new-goal text-center text-zinc-500 ">
              Nova Meta
            </h1>
          </div>
        </div>
        <div>Metas atuais</div>
      </div>
      <section className="w-full h-full mt-4 pb-28 userstats-md userstats-lg bg-zinc-900"></section>
    </div>
  );
};

export default page;
