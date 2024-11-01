import { Link, NavLink } from "react-router-dom";
import logo from '../assets/LOGO.png'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const navlink = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to='/allSpots'>All Turists Spot</NavLink></li>
    <li><NavLink to="/addSpot">Add Turists Spot</NavLink></li>
    <li><NavLink to='/myList'>My List</NavLink></li>

</>
const Navbar = () => {
    const { user, logOut, setTheme, theme } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const handleTheme = (e) => {
        if (e.target.checked) {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')

        } else {
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }

    }
    return (
        <div className="bg-secondary">
            <div className="navbar max-w-6xl mx-auto bg-secondary text-neutral-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-10 menu-horizontal  px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input onClick={handleTheme} type="checkbox" checked={theme == "dark" && true} className="toggle mr-5" />
                    {
                        user ? <div className="flex items-center gap-5">
                            <div className="avatar tooltip tooltip-bottom tooltip-secondary" data-tip={user?.displayName}>
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2 ">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>

                            <a className="btn btn-sm" onClick={handleLogOut}>Log Out</a>

                        </div> : <Link to='/logIn'>
                            <a className="btn btn-sm">Log In</a>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;