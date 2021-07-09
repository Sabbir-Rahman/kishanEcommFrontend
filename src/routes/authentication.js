import Login from 'views/Login'
import Register from 'views/Registration'


//if authenticated then authenticated rout should be logout

const authenticationRoutes = [
    {
      path: "/login",
      name: "প্রবেশ করুন",
      component: Login,
      layout: "",
    },
    {
      path: "/register",
      name: "যোগ দিন",
      component: Register,
      layout: ""
    }
  ]

  export default authenticationRoutes