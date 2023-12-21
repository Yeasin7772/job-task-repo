import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import UserHome from "../Pages/Dashboard/UserHome";

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
            }
        ]
    }
])

export default Routes;