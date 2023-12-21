import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useAuth()

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                toast.success('Logout Successful')
            })
            .catch(error => {
                console.error(error);
            })
    }


    const navLinks = <>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/'>About</Link></li>
        <li> <Link to='/'>Contact</Link></li>
      

        {
            user &&
            <li className='text-xl font-medium'> <Link to='/dashboard/userHome'>Dashboard</Link></li>
        }

    </>


    return (
        <div>
            <div className="navbar bg-base-200 fixed z-10 bg-opacity-10 h-10vh ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold uppercase">Lo<span className="text-pink-500">Go</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                <div className="w-12 rounded-full">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt='' />
                                    ) : (
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    )}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                <li>
                                    <button className="btn btn-ghost font-semibold text-lg text-pink-500 uppercase">{user.displayName}</button>
                                </li>
                                <li>
                                    <button
                                        className="btn btn-ghost font-semibold text-lg text-red-800"
                                        onClick={handelLogOut}
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm btn-ghost">Sign In</button>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;




