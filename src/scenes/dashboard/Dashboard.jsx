import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import StatBox from "../../components/StatBox";
import Topbar from "../global/Topbar";

const Dashboard = () => {
  return (
    <div className="flex-1 min-w-0 bg-slate-800">
      <Topbar />
      <div className="grid md:grid-cols-2 mt-4 gap-4 mx-2 lg:grid-cols-4">
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress={25}
          icon={<AiFillMail size={25} className="text-emerald-400 mb-2" />}
        />
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress={100}
          icon={
            <BsFillPersonPlusFill size={25} className="text-emerald-400 mb-2" />
          }
        />
        <StatBox progress={75} />
        <StatBox progress={50} />
      </div>
    </div>
  );
};

export default Dashboard;
