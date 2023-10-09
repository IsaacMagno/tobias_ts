import React from "react";
import UserContent from "@/components/UserContent";

const ShowProfile = () => {
  return (
    <div className="bg-stone-900 min-h-screen grow">
      <div className="lg:pb-6 flex gap-6 min-h-screen justify-center">
        <UserContent />

        <div className="hidden lg:flex flex-col bg-orange-500 grow min-w-max max-w-lg ">
          <div className="bg-pink-500 flex grow">Stats</div>
          <div className="bg-yellow-500  grow-2">Activities</div>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
