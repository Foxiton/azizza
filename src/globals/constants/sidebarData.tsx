import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillDashboard />
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiFillMessage />
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting />
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoIosLogOut />,
    cname: 'sidebar-bottom'
  }
];
