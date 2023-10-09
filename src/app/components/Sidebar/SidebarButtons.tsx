import React from "react";
import Image from "next/image";

const SidebarButtons = () => {
  return (
    <div className="flex items-center flex-col lg:gap-5 ">
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/champions.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Campeões</span>
          </span>
        </a>
      </div>
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/tasks.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Metas</span>
          </span>
        </a>
      </div>
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/achievments.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Conquistas</span>
          </span>
        </a>
      </div>
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/quests.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Missões</span>
          </span>
        </a>
      </div>
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div className="p-1">
              <Image
                alt={"alt"}
                src={"/sidebarIcons/market.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Loja</span>
          </span>
        </a>
      </div>
      <div className="lg:h-12 lg:w-64">
        <a className="hover:cursor-pointer">
          <span className="sidebar-span">
            <div>
              <Image
                alt={"alt"}
                src={"/sidebarIcons/config.svg"}
                width={40}
                height={40}
              />
            </div>
            <span className="sidebar-button-text">Ajustes</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default SidebarButtons;
