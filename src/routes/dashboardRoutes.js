import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Messages from "views/Messages"
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/addProduct",
    name: "পণ্য যোগ করুন",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/user",
  },
  {
    path: "/dashboard",
    name: "ড্যাশবোর্ড",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/user",
  },
  {
    path: "/user",
    name: "প্রোফাইল",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "নোটিফিকেশন",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/user",
  },
  {
    path: "/messages",
    name: "বার্তাবাক্স",
    icon: "nc-icon nc-email-85",
    component: Messages,
    layout: "/user",
  },
  {
    path: "/table",
    name: "পরিসংখ্যান",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/user",
  },
  {
    path: "/sells",
    name: "পণ্য বিক্রি",
    icon: "nc-icon nc-cart-simple",
    component: Typography,
    layout: "/user",
  },
  {
    path: "/sell-request",
    name: "পণ্য বিক্রয় অনুরোধ",
    icon: "nc-icon nc-delivery-fast",
    component: Icons,
    layout: "/user",
  },
  {
    path: "/buyings",
    name: "পণ্য ক্রয়",
    icon: "nc-icon nc-cart-simple",
    component: Maps,
    layout: "/user",
  },
  {
    path: "/buy-request",
    name: "পণ্য ক্রয় অনুরোধ",
    icon: "nc-icon nc-delivery-fast",
    component: Maps,
    layout: "/user",
  },
  {
    path: "/krishiBazar",
    component: Maps,
    layout: "/",
  },
];

export default dashboardRoutes;
