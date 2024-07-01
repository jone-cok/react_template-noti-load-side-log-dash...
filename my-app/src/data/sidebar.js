import { FaTh } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/admin/home",
  },

  {
    title: "Account",
    icon: <BiUserCircle />,
    children: [
      {
        title: "Profile",
        path: "/admin/profile",
        icon: <BiUserCircle />,
      },
      {
        title: "My Subscription",
        path: "/admin/account",
        icon: <BiUserCircle />,
      },
    ],
  },
];

export default menu;
