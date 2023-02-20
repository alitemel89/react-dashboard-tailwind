import React, { useState } from "react";
import profile from "../../images/profile.jpg";
import { motion } from "framer-motion";
import MenuItems from "../../components/MenuItems";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`dark:bg-slate-700 bg-slate-200 p-4 shadow-xl dark:shadow-indigo-300/50
    ${open ? "w-72 min-h-screen absolute inset-0 z-50 overflow-auto scrollbar-hide" : "w-14"} transition duration-500`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h1
            className={`${
              !open && "hidden"
            } text-xl font-bold dark:text-emerald-500`}
          >
            ADMINIS
          </h1>
          <div
            className="relative group cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div
              className="blur-effect"
            ></div>
            <button className="dark:text-emerald-400">
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
        <div className={`${!open && "hidden"} flex justify-center`}>
          <img
            src={profile}
            alt="profile"
            className="h-24 w-24 rounded-full border-4
    dark:border-emerald-400 object-cover"
          />
        </div>
      </div>

      <nav className="mt-2">
        <div
          className={`${
            !open && "hidden"
          } flex items-center justify-center space-x-2`}
        >
          <motion.h2
            initial={{ opacity: 0.5, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold dark:text-white uppercase 
            text-center"
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
        <p
          className={`${
            !open && "hidden"
          } text-center dark:text-emerald-400 font-semibold`}
        >
          Frontend Developer
        </p>

        <MenuItems open={open} />
      </nav>
    </div>
  );
};

export default Sidebar;
