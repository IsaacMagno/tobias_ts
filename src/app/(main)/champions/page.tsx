import React from "react";

const SelectChampionPage = () => {
  const champions = [
    "campeao1",
    "campeao2",
    "campeao3",
    "campeao4",
    "campeao5",
    "campeao6",
    "campeao7",
    "campeao8",
    "campeao9",
    "campeao10",
    "campeao11",
    "campeao12",
  ];

  return (
    <div className="min-h-screen grid grid-cols-12 justify-center">
      <div className="min-h-screen grid grid-cols-4 col-span-full gap-3 p-6">
        {champions.map((champion) => (
          <div
            className="bg-white/40 p-2 flex justify-center items-center hover:cursor-pointer hover:backdrop-invert hover:text-black rounded-xl"
            key={champion}
          >
            {champion}
            {/* <Imagem /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectChampionPage;
