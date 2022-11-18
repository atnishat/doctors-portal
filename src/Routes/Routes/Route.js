import Appoitment from "../../Pages/Appointment/Appointment/Appoitment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Privateroute from "../PrivateRoutes/Privateroute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");




 const router = createBrowserRouter([

{
    path: '/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/appointment',
            element:<Appoitment></Appoitment>
        }
    ]
        },
        {
            path:'/dashboard',
            element:<Privateroute><Dashboard></Dashboard></Privateroute>
        }

])



export  default router;