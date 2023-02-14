import React from 'react';
import { AiFillMail } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTrafficLight } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import StatBox from "../../components/StatBox";

const Stats = () => {
    return (
        <div className="grid md:grid-cols-2 mt-4 gap-4 mx-2 lg:grid-cols-4">
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress={25}
          icon={<AiFillMail size={25} className="text-emerald-400 mb-2" />}
          increase="14%"
        />
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress={100}
          icon={
            <BsFillPersonPlusFill size={25} className="text-emerald-400 mb-2" />
          }
          increase="19%"
        />
        <StatBox
          title="1,789"
          subtitle="Sales Obtained"
          progress={75}
          icon={
            <FcSalesPerformance size={25} className="text-emerald-400 mb-2" />
          }
          increase="17%"
        />
        <StatBox
          title="1,135,468"
          subtitle="Traffic Received"
          progress={50}
          icon={
            <FaTrafficLight size={25} className="text-emerald-400 mb-2" />
          }
          increase="34%"
        />
      </div>
    )
}

export default Stats;