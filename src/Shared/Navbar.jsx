import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/'>About</Link></li>
        <li> <Link to='/'>Contact</Link></li>
        <li> <Link to='/Login'>Login</Link></li>
        <li> <Link to='/Register'>Register</Link></li>


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
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-2 border-pink-600">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;