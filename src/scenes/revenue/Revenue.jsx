import React from "react";
import LineChart from "../../components/LineChart";

const Revenue = () => {
  return (
    <div className="bg-slate-700 md:w-3/5 rounded-lg h-72 mb-2">
      <h1 className="text-lg text-white py-2 px-4">Revenue Generated</h1>
      <p className="text-xl text-emerald-400 px-4 font-bold">$ 48,586,455</p>
        <LineChart />
    </div>
  );
};

export default Revenue;
