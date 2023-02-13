import React from "react";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div
      className="flex justify-between max-w-sm p-6 
    bg-slate-700 rounded-lg shadow-2xl"
    >
      <div>
        {icon}
        <h2 className="text-xl text-white font-extrabold">{title}</h2>
        <h6 className="text-lg text-emerald-400">{subtitle}</h6>
      </div>
      <div>
        <ProgressCircle progress={progress} />
      </div>
    </div>
  );
};

export default StatBox;
