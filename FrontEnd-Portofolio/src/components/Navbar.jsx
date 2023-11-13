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
        <nav className="z-50 container px-5 mx-auto flex py-5 gap-6 items-center justify-between md:justify-normal fixed">
            <div className="" id="logo">
                <div className="font-extrabold italic text-white text-2xl">ERS</div>
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
            {/* <div id="mobileNavbar" className={`${showNavbar ? 'flex' : 'hidden'}`}>
                <ul className="absolute top-16 left-0 flex-col w-full h-[cal(100vh-77px)] bg-slate-50 border-t-2">
                    <li className="text-center">
                        {inputs.map((input) => (
                            <NavLink
                                key={input.id}
                                className={`block w-full px-4 py-1.5 mr-2 transition-all text-slate-800 font-medium text-lg rounded-lg hover:bg-orange-100`}
                                to={input.route}
                            >
                                {input.content}
                            </NavLink>
                        ))}
                    </li>
                    <li><DarkModeSwitch
                        className="mr-2 px-2 py-2"
                        style={{}}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={32} />
                    </li>
                    <li>
                        <a
                            className="text-base font-medium px-4 py-1.5 rounded-3xl border border-orange-600 text-orange-600 mr-2"
                            href="/download"
                        >
                            Download CV
                        </a>
                        <a
                            className="text-base font-medium px-4 py-1.5 rounded-3xl bg-orange-600 text-white"
                            href="/contact"
                        >
                            Contact Me!
                        </a>
                    </li>
                </ul>
            </div> */}
        </nav >
    );
};

export default Navbar;
