import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaFileInvoice,
  FaHome,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaUserAlt,
} from "react-icons/fa";
import { RiContactsFill, RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MenuItems = ({ open }) => {
  const menus = [
    { name: "Dashboard", link: "/", icon: FaHome },
    { name: "Manage Team", link: "/", icon: RiTeamFill },
    { name: "Contacts Information", link: "/", icon: RiContactsFill },
    { name: "Invoices Balances", link: "/", icon: FaFileInvoice },
    { name: "Profile", link: "/", icon: FaUserAlt },
    { name: "Calendar", link: "/", icon: FaCalendar },
    { name: "FAQ", link: "/", icon: FaInfoCircle },
    { name: "Bar Chart", link: "/", icon: FaChartBar },
    { name: "Pie Chart", link: "/", icon: FaChartPie },
    { name: "Line Chart", link: "/", icon: FaChartLine },
    { name: "Geography Chart", link: "/", icon: FaMapMarkedAlt },
  ];

  return (
    <div className="text-white mt-8">
      {menus.map((menu, i) => (
        <Link to={menu.link} key={i} className="sidebar-item">
          <div>{React.createElement(menu.icon, { size: 25 })}</div>
          <motion.div
            initial={{ x: 50, opacity: 0, translateX: 50 }}
            animate={{ x: 0, opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <span className={`${!open && "hidden"}`}>{menu.name}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
