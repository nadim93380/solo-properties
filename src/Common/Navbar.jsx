import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvidor";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user,logout } = useContext(AuthContext)


    const logOut = () => {
        logout()
        .then(() => {
            toast("Sign Out Successfully")
        })
            .catch(err => {
            console.log(err.message)
        })
    }
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user && <li><NavLink to='/order'>Order</NavLink></li>}
        {user && <li><NavLink to='/profile'>Profile</NavLink></li>}
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

    </>

    return (
        <div className="w-full bg-transparent border-b-2 border-gray-700 rounded-xl shadow-lg absolute z-20">
            <div className="navbar w-11/12 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl md:text-3xl font-bold text-yellow-500">Solo Properties</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* User Info */}

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL?user.photoURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="text-center font-bold text-sm">{user.displayName?user.displayName:"Name Not Provided"}</li>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <Link to='login' className="btn btn-outline">Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;