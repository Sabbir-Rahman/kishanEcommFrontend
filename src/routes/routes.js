import Dashboard from "views/Dashboard";
import Home from "views/Home";
import Login from "views/Login";
import Register from "views/Registration";

const routes = [
  {
    path: "/home",
    name: "মূল পাতা",
    icon: "nc-icon nc-mobile",
    component: Home,
    layout: "",
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
  },
  {
    upgrade: true,
    path: "/user/dashboard",
    name: "ড্যাশবোর্ড",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: ""
  },
];

export default routes;
