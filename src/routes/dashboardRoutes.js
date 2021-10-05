import Statistics from "views/Statistics.js"
import SellRequest from "views/SellRequest.js"
import BuyRequset from "views/BuyRequest.js"
import Notifications from "views/Notifications.js"
import AddProduct from "views/AddProduct"

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/addProduct",
    name: "পণ্য যোগ করুন",
    icon: "nc-icon nc-simple-add",
    component: AddProduct,
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
    component: SellRequest,
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
