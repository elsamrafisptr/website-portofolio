import React from "react";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { List, X } from "@phosphor-icons/react"


const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const inputs = [
        {
            id: "nav1",
            route: "/",
            content: "Home",
        },
        {
            id: "nav2",
            route: "/about",
            content: "About",
        },
        {
            id: "nav3",
            route: "/project",
            content: "Project",
        },
        {
            id: "nav4",
            route: "/article",
            content: "Article",
        },
    ];

    return (
        <header className="py-6 px-5 md:px-24 flex justify-center w-full z-50">
            <nav className="px-8 bg-white flex py-4 md:px-5 gap-6 items-center rounded-full w-11/12 justify-between md:justify-normal fixed">
                <div className="" id="logo">
                    <div className="font-extrabold italic text-black text-2xl">ERS</div>
                </div>
                <div
                    className="md:hidden"
                    id="menu-icon"
                    onClick={handleNavbar}
                >
                    {!showNavbar ? <List size={32} /> : <X size={32} />}
                </div>
                <div id="desktopNavbar" className={`md:flex justify-between items-center hidden w-full`}>
                    <div className="flex items-center">
                        <ul className="flex">
                            <li className="">
                                {inputs.map((input) => (
                                    <NavLink
                                        key={input.id}
                                        className={`px-4 py-1.5 mr-2 transition-all text-slate-800 font-medium text-lg rounded-full hover:bg-orange-100 hover:text-orange-600`}
                                        to={input.route}
                                    >
                                        {input.content}
                                    </NavLink>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <DarkModeSwitch
                            className="mr-2 px-2 py-2"
                            style={{}}
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={32}
                        />
                        <a
                            className="text-base font-medium px-4 py-1.5 rounded-3xl border border-orange-600 text-orange-600 mr-2 bg-orange-100 shadow-orange-100 drop-shadow-xl"
                            href="/download"
                        >
                            Download CV
                        </a>
                        <a
                            className="text-base font-medium px-4 py-1.5 rounded-3xl bg-orange-600 text-orange-50 drop-shadow-xl"
                            href="/contact"
                        >
                            Contact Me!
                        </a>
                    </div>
                </div>
                {showNavbar && (
                    <ul className={`flex flex-col justify-center items-center absolute top-0 h-screen bg-gradient-to-b from-stone-950 to-stone-800 text-orange-100 transition-all duration-1000 ${showNavbar ? "left-0 w-10/12" : "-left-80 w-10/12"}`}>
                        {inputs.map((input) => (
                            <li key={input.id} className="px-4 cursor-pointer capitalize py-6 text-2xl translate-x-0 transition-all duration-300">
                                <a onClick={handleNavbar} href={input.route}>{input.content}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav >
        </header>

    );
};

export default Navbar;
