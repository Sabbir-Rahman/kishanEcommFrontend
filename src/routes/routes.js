import Home from "views/Home"
import KrishiBazar from "views/KrishiBazar"
import Login from "views/Login"
import Register from "views/Registration"
import ViewProduct from "views/ViewProduct"
import AdminDashboard from "views/Admin"

const routes = [
  {
    path: "/home",
    name: "মূল পাতা",
    icon: "nc-icon nc-mobile",
    component: Home,
    layout: "",
  },
  {
    upgrade: true,
    path: "/admin",
    name: "অ্যাডমিন",
    component: AdminDashboard,
    layout: "",
  },
  {
    path: "/krishi-bazar",
    name: "কৃষি বাজার",
    icon: "nc-icon nc-sun-fog-29",
    component: KrishiBazar,
    layout: ""
  },
  {
    path: "/product",
    component: ViewProduct,
    layout: ""
  },


  {
    path: "/login",
    name: "প্রবেশ করুন",
    icon: "nc-icon nc-single-02",
    component: Login,
    layout: "",
  },
  {
    path: "/register",
    name: "যোগ দিন",
    icon: "nc-icon nc-stre-right",
    component: Register,
    layout: ""
  }
]

export default routes