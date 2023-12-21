import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import UserHome from "../Pages/Dashboard/UserHome";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import TaskManager from "../Pages/Dashboard/TaskManager";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Login',
                element: <Login/>
            },
            {
                path: '/Register',
                element: <Register/>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
        children:[
            {
                path:'userHome',
                element:<UserHome/>
            },
            {
                path:'AddTasks',
                element:<AddTask/>
            },
            {
                path:'TaskManage',
                element:<TaskManager/>
            },
        ]
    }
])

export default Routes;