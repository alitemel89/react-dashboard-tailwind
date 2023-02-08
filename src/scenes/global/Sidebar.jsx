import React from "react";
import profile from "../../images/profile.jpg";
import { FaHome } from "react-icons/fa";
import { RiContactsFill, RiTeamFill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="w-72 bg-slate-700 px-8 py-4">
      <div className="flex justify-between text-emerald-500 mb-4">
        <h1 className="text-xl font-bold">ADMINIS</h1>
        <BiMenuAltRight size={30} className="cursor-pointer" />
      </div>
      <div className="flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="h-24 w-24 rounded-full border-4
    border-emerald-400 object-cover"
        />
      </div>

      <nav className="mt-2">
        <div className="flex items-center justify-center space-x-2">
          <motion.h2
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white uppercase text-center"
          >
            Welcome Ali
          </motion.h2>
          <motion.div
            animate={{ rotate: 20 }}
            transition={{
              repeat: 4,
              from: 0,
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="text-2xl"
          >
            👋
          </motion.div>
        </div>
        <p className="text-center text-emerald-400 font-semibold">Frontend Developer</p>

        {/* Items */}
        <div className="text-white mt-8">
          <a href="#" className="sidebar-item">
            <FaHome />
            <span>Dashboard</span>
          </a>
          <h4 className="text-gray-400 mt-4">Data</h4>
          <a href="#" className="sidebar-item">
            <RiTeamFill />
            <span>Manage Team</span>
          </a>
          <a href="#" className="sidebar-item">
            <RiContactsFill />
            <span>Contacts Information</span>
          </a>

          <a href="#" className="sidebar-item">
            <FaHome />
            <span>Dashboard</span>
          </a>
          <h4 className="text-gray-400 mt-4">Pages</h4>
          <a href="#" className="sidebar-item">
            <RiTeamFill />
            <span>Manage Team</span>
          </a>
          <a href="#" className="sidebar-item">
            <RiContactsFill />
            <span>Contacts Information</span>
          </a>

          <h4 className="text-gray-400 mt-4">Charts</h4>
          <a href="#" className="sidebar-item">
            <RiTeamFill />
            <span>Manage Team</span>
          </a>
          <a href="#" className="sidebar-item">
            <RiContactsFill />
            <span>Contacts Information</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
