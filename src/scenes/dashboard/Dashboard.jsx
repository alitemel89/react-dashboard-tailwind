import React from "react";
import Topbar from "../global/Topbar";
import Revenue from "../revenue/Revenue";
import Stats from "../stats/Stats";
import Transactions from "../transactions/Transactions";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <div className="flex-1 min-w-0 bg-slate-800">
      <Topbar />
      <Stats />
      <div className="md:flex mx-2 mt-4 gap-4">
        <Revenue />
        <Transactions />
      </div>
      {/* Campaign */}
      <div className="md:flex md:flex-row mx-2 md:gap-4 mt-4 mb-12 flex flex-col gap-2">
        <div className="md:w-1/3 h-80 bg-slate-700 rounded-lg">
          <h1 className="text-lg text-white py-2 px-4">Campaign</h1>
          <div className="flex justify-center my-2">
            <ProgressCircle progress={54} width={100} height={100} />
          </div>
          <p className="text-emerald-300 text-center text-xl font-extrabold p-2 mt-6">
            $48,552 revenue generated
          </p>
          <p className="text-gray-200 text-center">
            Includes extra misc and expenditures and costs
          </p>
        </div>

        {/* Bar Chart */}
        <div className="md:w-1/3 h-80 bg-slate-700 rounded-lg">
          <h1 className="text-lg text-white py-2 px-4">Sales Quantity</h1>
          <BarChart />
        </div>

        {/* Geography Chart */}
        <div className="md:w-1/3 h-80 bg-slate-700 rounded-lg">
          <h1 className="text-lg text-white py-2 px-4">
            Geography Based Traffic
          </h1>
          <GeographyChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
