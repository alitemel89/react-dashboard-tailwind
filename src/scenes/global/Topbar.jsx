import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { FaUserAlt, FaMoon } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="md:flex flex-col border-b border-gray-300 bg-slate-800 py-3">
      <div className="md:flex justify-between items-center py-2 mx-4 border-b border-gray-500">
        {/* SearchBar */}
        <div className="relative w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <BiSearchAlt size={25} className="text-gray-200" />
          </span>

          <input
            type="text"
            placeholder="Search"
            className="block first-line:w-full text-sm text-white bg-slate-700
            rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="space-x-2 text-gray-200 mt-2">
          <button>
            <FaUserAlt size={20} />
          </button>
          <button>
            <IoMdSettings size={20} />
          </button>
          <button>
            <FaMoon size={20} />
          </button>
          <button>
            <IoMdNotifications size={20} />
          </button>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="md:flex items-center justify-between py-2 mx-4">
        <div>
          <h1 className="text-2xl text-emerald-400">DASHBOARD</h1>
          <h4 className="text-gray-200 text-md">Welcome to your dashboard</h4>
        </div>
        <div>
          <button
            className="flex items-center btn mt-2"
          >
            Download reports
            <FiDownload size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
