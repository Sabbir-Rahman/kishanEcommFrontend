import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard"
import EqualizerIcon from "@material-ui/icons/Equalizer"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import RedeemIcon from "@material-ui/icons/Redeem"
import EmailIcon from "@material-ui/icons/Email"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

export const SidebarData = [
  {
    title: "ড্যাশবোর্ড",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "পরিসংখ্যান",
    icon: <EqualizerIcon />,
    link: "/stats",
  },
  {
    title: "পণ্য বিক্রি",
    icon: <ShoppingCartIcon />,
    link: "/product-sell",
  },
  {
    title: "পণ্য ক্রয়",
    icon: <RedeemIcon />,
    link: "/product-buy",
  },
  {
    title: "মেসেজ বক্স",
    icon: <EmailIcon />,
    link: "/inbox",
  },
  {
    title: "আর্থিক বিবরণী",
    icon: <MonetizationOnIcon />,
    link: "/statement",
  },
  {
    title: "নোটিফিকেশন",
    icon: <NotificationsActiveIcon />,
    link: "/notification",
  },
  {
    title: "লগ আউট",
    icon: <ExitToAppIcon />,
    link: "/logout",
  },
];
