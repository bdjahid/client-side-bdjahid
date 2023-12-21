import { Link, NavLink } from "react-router-dom";
import { Dropdown } from 'flowbite-react';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import userImg from '../../../assets/user.png';




const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink className="mx-1" to="/services">Services</NavLink></li>
        {
            user?.email ? <>
                <li><NavLink to='/bookings'>Bookings</NavLink></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
            </>
                :
                <li><Link to="/login">Login</Link></li>
        }
        <li>
            {/* <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                    <li><NavLink to="/addservices">Add Services</NavLink></li>
                    <li><NavLink to="/myservices">My Services</NavLink></li>
                    <li><NavLink to="/myshedules">My schedules</NavLink></li>
                </ul>
            </details> */}

            <Dropdown label="Dashboard" inline>
                <Dropdown.Item><li><NavLink to="/addservices">Add Services</NavLink></li></Dropdown.Item>
                <Dropdown.Item><li><NavLink to="/myservices">My Services</NavLink></li></Dropdown.Item>
                <Dropdown.Item><li><NavLink to="/myshedules">My schedules</NavLink></li></Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>

        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="avatar mt-4">
                    <div className="w-20 rounded-full">
                        <img src="img.jpg" />
                    </div>
                </div>
                <a className="btn btn-ghost text-xl">Tours and Guide Agency</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full">

                    {user ?
                        < img title={user?.email} src={user?.photoURL} alt="" />
                        :
                        <img title={user?.email} src={userImg} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;