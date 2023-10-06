import Sidebar from "./components/Sidebar";
import UserContent from "./components/UserContent";

export default function Home() {
  return (
    <div className=" flex flex-col lg:flex-row min-h-screen items-center">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className=" sbg-stone-900 min-h-screen grow">
        <div className="lg:px-6 lg:pb-6 flex gap-6 min-h-screen justify-center">
          <UserContent />
          <div className="hidden lg:flex flex-col bg-orange-500 grow min-w-max max-w-lg ">
            <div className="bg-pink-500 flex grow">Stats</div>
            <div className="bg-yellow-500  grow-2">Activities</div>
          </div>
        </div>
      </div>
      <div className="lg:hidden absolute bottom-0 min-w-full">
        <Sidebar />
      </div>
    </div>
  );
}
