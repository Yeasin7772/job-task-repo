import {FaAd,   FaHome,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
   
   

    return (
        <div className="flex">
            <div className="w-64 min-h-screen ">
                <ul className="menu">

                    <>
                      
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    Dashboard Home</NavLink>
                            </li>
                           
                           
                            
                           
                      
                    </>

                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome />  Home</NavLink>
                    </li>
                    


                </ul>

            </div>
            <div className="flex-1 p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
