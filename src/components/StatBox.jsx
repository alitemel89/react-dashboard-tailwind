import React from "react";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div
      className="flex justify-between max-w-sm p-6 
    bg-slate-700 rounded-lg shadow-md cursor-pointer 
    hover:-translate-y-1 transition-all ease-out hover:shadow-2xl"
    >
      <div>
        {icon}
        <h2 className="text-xl text-white font-extrabold">{title}</h2>
        <h6 className="text-lg text-emerald-400">{subtitle}</h6>
      </div>
      <div className="text-center">
        <ProgressCircle progress={progress} />
        <p className="font-light text-indigo-200">{increase}</p>
      </div>
    </div>
  );
};

export default StatBox;
