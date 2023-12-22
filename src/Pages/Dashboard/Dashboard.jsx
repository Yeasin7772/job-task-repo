import { FaHome } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
    const { user ,logOut} = useAuth();
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                toast.success('Logout Successful')
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 glass">
            {/* Sidebar */}
            <div className="w-full lg:w-64 bg-gray-300  overflow-y-auto ">
                <div  data-aos="fade-right" className="flex justify-center items-center avatar p-4 shadow-md">
                    <div className="w-24 lg:w-28 rounded-full  border-2 border-pink-400 glow">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>
                <h1 className="text-center uppercase text-xl  ">
                   {user?.displayName}
                </h1> 
                <div className="text-center  mt-3"> 
                <button onClick={handelLogOut} className="btn  block text-xl w-full">Logout</button>
                </div>
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard/userHome"
                            className="flex items-center text-lg p-3 lg:p-4"
                        >
                            <FaHome className="mr-2" /> Dashboard Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/AddTasks"
                            className="flex items-center text-lg p-3 lg:p-4"
                        >
                            <FaHome className="mr-2" /> Add Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/TaskManage"
                            className="flex items-center text-lg p-3 lg:p-4"
                        >
                            <FaHome className="mr-2" /> Task Manage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/AllTaskManage"
                            className="flex items-center text-lg p-3 lg:p-4"
                        >
                            <FaHome className="mr-2" /> All Task Manage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className="flex items-center text-lg p-3 lg:p-4"
                        >
                            <FaHome className="mr-2" /> Home
                        </NavLink>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-5 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
