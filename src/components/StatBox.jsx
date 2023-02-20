import React from "react";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div
      className="flex justify-between max-w-sm p-6 
    dark:bg-slate-700 bg-white rounded-lg shadow-md cursor-pointer 
    hover:-translate-y-1 transition-all ease-out hover:shadow-2xl"
    >
      <div>
        {icon}
        <h2 className="text-xl dark:text-white font-extrabold">{title}</h2>
        <h6 className="text-lg dark:text-emerald-400">{subtitle}</h6>
      </div>
      <div className="text-center">
        <ProgressCircle progress={progress} width={75} height={75} />
        <p className="font-light text-indigo-200">{increase}</p>
      </div>
    </div>
  );
};

export default StatBox;
