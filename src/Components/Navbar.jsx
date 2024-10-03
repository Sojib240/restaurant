import React, { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
    const [navPosition, setnavPosition] = useState(false);
    window.addEventListener("scroll", (e) => {
        const currentScroll = window.scrollY;
        console.log(currentScroll);
        const heroHeight = document
            .querySelector(".hero")
            .getBoundingClientRect().height;

        if (currentScroll >= heroHeight) {
            setnavPosition(true);
        }
        if (currentScroll < heroHeight) {
            setnavPosition(false);
        }
    });
    return (
        <header className="w-full">
            <div
                className={`navbar w-full px-6 pt-10 pb-5 absolute top-0 left-0 z-[999999999]`}
            >
                <div className=" max-w-[1800px] mx-auto flex justify-between items-center gap-4">
                    <div className="logo w-32 sm:w-40 pb-2">
                        <img className="w-full" src="/logo_name.png" alt="" />
                    </div>
                    <div className="menu items-center gap-3 flex md:gap-5 lg:gap-6">
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            Home
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            About
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            Must Try
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            Blog
                        </a>

                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-white text-lg"
                            href=""
                        >
                            Contact
                        </a>
                    </div>
                    <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center hidden md:hidden cursor-poinlink relative">
                        <span className="text-lg text-white">
                            <RiMenu4Fill />
                        </span>
                    </div>
                </div>
            </div>

            <div
                className={`fixed-navbar w-full px-6 py-2 ${
                    navPosition === true
                        ? "-translate-y-0"
                        : "-translate-y-[100%]"
                } fixed top-0 left-0  z-[999999999] lg:px-12 transition-all duration-500 bg-white`}
            >
                <div className=" max-w-[1800px] mx-auto flex justify-between items-center gap-4">
                    <div className="logo w-32 md:w-40 pb-2">
                        <img className="w-full" src="/logo_name.png" alt="" />
                    </div>
                    <div className="menu items-center gap-5 lg:flex">
                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            Home
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            About
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            Must Try
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            Blog
                        </a>

                        <a
                            className="link2 relative font-JosefinSans_semibold capitalize text-black text-lg"
                            href=""
                        >
                            Contact
                        </a>
                    </div>
                    <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center flex lg:hidden cursor-poinlink relative ter">
                        <span className="text-lg text-white">
                            <RiMenu4Fill />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
