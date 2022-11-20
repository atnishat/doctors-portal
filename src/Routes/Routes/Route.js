import DashboardLayout from "../../Layout/DashboardLayout";
import Appoitment from "../../Pages/Appointment/Appointment/Appoitment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManagedDoctor from "../../Pages/Dashboard/ManagedDoctors/ManagedDoctor";
import Myappointment from "../../Pages/Dashboard/MyAppointment/Myappointment";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
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
            element:<Privateroute><DashboardLayout></DashboardLayout></Privateroute>,
            children:[
                {
                    path:'/dashboard',
                    element:<Myappointment></Myappointment>
                },
                {
                    path:'/dashboard/allusers',
                    element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
                }
                ,
                {
                    path:'/dashboard/adddoctor',
                    element:<AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
                }
                ,
                {
                    path:'/dashboard/managedoctors',
                    element:<AdminRoutes><ManagedDoctor></ManagedDoctor></AdminRoutes>
                }
            ]
        }

])



export  default router;