import React from "react";
import Topbar from "../global/Topbar";
import Revenue from "../revenue/Revenue";
import Stats from "../stats/Stats";
import Transactions from "../transactions/Transactions";

const Dashboard = () => {
  return (
    <div className="flex-1 min-w-0 bg-slate-800">
      <Topbar />
      <Stats />
      <div className="flex mx-2 mt-4 gap-4">
        <Revenue />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
