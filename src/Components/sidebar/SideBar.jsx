import React from "react";
import SidebarButtons from "./SidebarButtons";
import { BiSolidDashboard } from "react-icons/bi";

import { IoClose } from "react-icons/io5";

import { PiPottedPlantFill } from "react-icons/pi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { FcFaq } from "react-icons/fc";
import { ImSwitch } from "react-icons/im";

function SideBar({ isActive, setActive }) {
  return (
    <div
      className={`h-full fixed top-0 sm:top-28 left-0 z-40 ${
        isActive ? "translate-x-0" : "transform -translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div
        id="default-sidebar"
        className={`fixed  z-40 w-56  sm:w-56 h-full sm:translate-x-0 ${
          isActive ? "translate-x-0" : "transition-transform -translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full py-4 overflow-y-auto space-y-4 bg-slate-300 dark:bg-gray-800 shadow-2xl">
          <div>
            <button
              onClick={() => {
                setActive(!isActive);
              }}
              type="button"
              className="inline-flex  bg-slate-50 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <IoClose color="red" size={23} />
            </button>
            <div className="flex flex-col items-center bg-white p-5 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 shadow-lg h-48">
              <img
                src={""}
                alt="profile"
                className="rounded-full w-20 h-20"
              />
              <h1 className="font-bold">Munavir ck</h1>
              <h1 className="font-light">munavirokv@gmail.com</h1>
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col justify-between h-full">
          <ul className="space-y-3 font-medium w-3/4 h-full ">
  <li className="border rounded-r-lg relative overflow-hidden bg-customBlue shadow-md">
    <div className="flex items-center p-2 bg-white text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-blue-500 group">
      <SidebarButtons title="Dashboard" icon={<BiSolidDashboard />} />
    </div>
    <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-gray-300 to-transparent"></div>
  </li>
  <li className="border border-1 rounded-r-lg">
    <div className="flex items-center bg-white p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
      <SidebarButtons title="Perks" to="/" icon={<PiPottedPlantFill />} />
    </div>
  </li>
  <li className="border border-1 rounded-r-lg">
    <div className="flex items-center p-2 bg-white text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
      <SidebarButtons title="FAQ" to="/" icon={<FcFaq />} />
    </div>
  </li>
  <li className="border border-1 rounded-r-lg">
    <div className="flex items-center p-2 bg-white text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
      <SidebarButtons title="Addons" icon={<IoExtensionPuzzle />} />
    </div>
  </li>
  <li className="border border-1 rounded-r-lg">
    <div className="flex items-center p-2 bg-white text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
      <SidebarButtons title="Supports" icon={<MdContactSupport />} />
    </div>
  </li>
  <li className=" rounded-r-lg ">
    <div className="text-center w-full inline-flex items-center justify-center mt-5">
      <span className="mr-2 text-blue-700">Logout </span>
      <ImSwitch color="blue" />
    </div>
  </li>
</ul>

          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SideBar;

