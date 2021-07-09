import Dashboard from "views/Dashboard"
import FosholerDoctor from "views/FosholerDoctor"
import Home from "views/Home"
import KrishiBazar from "views/KrishiBazar"
import KrishiForum from "views/KrishiForum"
import Login from "views/Login"
import Register from "views/Registration"

const routes = [
  {
    path: "/home",
    name: "মূল পাতা",
    component: Home,
    layout: "",
  },
  {
    path: "/krishi-bazar",
    name: "কৃষি বাজার",
    component: KrishiBazar,
    layout: ""
  },
  {
    path: "/krishi-forum",
    name: "কৃষি ফোরাম",
    component: KrishiForum,
    layout: ""
  },
  {
    path: "/fosholer-doctor",
    name: "ফসলের ডাক্তার",
    component: FosholerDoctor,
    layout: ""
  },

]

export default routes