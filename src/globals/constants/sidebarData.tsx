import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import imageValley from '../../assets/valley.jpg';
import imageValleyGround from '../../assets/valleyGround.jpg';
import imageTopOfTheWorld from '../../assets/topOfTheWorld.jpg';
import imageRelax from '../../assets/relax.jpg';

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

export const ScheduleData = [
  {
    title: "Crooked Valley",
    dates: "16 June - 20 June",
    img: imageValley
  },
  {
    title: "Valley",
    dates: "22 June - 26 June",
    img: imageValleyGround
  },
  {
    title: "Tartaruga Camp",
    dates: "1 July - 7 July",
    img: imageTopOfTheWorld
  },
  {
    title: "Gioc Waterfall",
    dates: "11 July - 15 July",
    img: imageRelax
  }
]
