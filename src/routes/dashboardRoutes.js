import Dashboard from "views/Dashboard.js"
import UserProfile from "views/UserProfile.js"
import Statistics from "views/Statistics.js"
import Typography from "views/Typography.js"
import BuyRequset from "views/BuyRequest.js"
import Notifications from "views/Notifications.js"
import Messages from "views/Messages"
import AddProduct from "views/AddProduct"

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/addProduct",
    name: "পণ্য যোগ করুন",
    icon: "nc-icon nc-alien-33",
    component: AddProduct,
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
    component: Statistics,
    layout: "/user",
  },
  {
    path: "/sell-request",
    name: "পণ্য বিক্রয় অনুরোধ",
    icon: "nc-icon nc-delivery-fast",
    component: Typography,
    layout: "/user",
  },
  {
    path: "/buy-request",
    name: "পণ্য ক্রয় অনুরোধ",
    icon: "nc-icon nc-cart-simple",
    component: BuyRequset,
    layout: "/user",
  },
]

export default dashboardRoutes
