import React from "react";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

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
        <nav className="fixed z-50 container px-5 mx-auto flex py-5 gap-6 items-center justify-between md:justify-normal">
            <div className="" id="logo">
                <div className="w-8 h-8 bg-red-800"></div>
            </div>
            <div
                className="md:hidden"
                id="menu-icon"
                onClick={handleNavbar}
            >
                {showNavbar ? "Close" : "Open"}
            </div>
            <div id="desktopNavbar" className={`md:flex justify-between items-center hidden  w-full`}>
                <div className="flex items-center">
                    <ul className="">
                        <li className="">
                            {inputs.map((input) => (
                                <NavLink
                                    key={input.id}
                                    className={`px-4 py-1.5 mr-2 transition-all text-slate-800 font-medium text-lg rounded-lg hover:bg-orange-100`}
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
                </div>
            </div>
            <div id="mobileNavbar" className={`${showNavbar ? 'flex' : 'hidden'} flex-col`}>
                <div className="flex flex-col items-center">
                    <ul className="">
                        <li className="">
                            {inputs.map((input) => (
                                <NavLink
                                    key={input.id}
                                    className={`px-4 py-1.5 mr-2 transition-all text-slate-800 font-medium text-lg rounded-lg hover:bg-orange-100`}
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
