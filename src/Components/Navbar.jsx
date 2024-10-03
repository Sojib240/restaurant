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
                className={`navbar w-full px-6 py-5 absolute top-0 left-0 z-[999999999] lg:px-12`}
            >
                <div className=" w-full flex justify-between items-center gap-4">
                    <div className="logo w-32 sm:w-40 pb-2">
                        <img className="w-full" src="/logo_name.png" alt="" />
                    </div>
                    <div className="menu items-center gap-6 lg:flex">
                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            Home
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            About
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            Must Try
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            Blog
                        </a>

                        <a
                            className="link relative font-JosefinSans_semibold uppercase text-white text-base"
                            href=""
                        >
                            Contact
                        </a>
                    </div>
                    <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center flex lg:hidden cursor-poinlink relative ter">
                        <span className="text-base text-white">
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
                <div className=" w-full flex justify-between items-center gap-4">
                    <div className="logo w-32 sm:w-32 pb-2">
                        <img className="w-full" src="/logo_name.png" alt="" />
                    </div>
                    <div className="menu items-center gap-5 lg:flex">
                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            Home
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            About
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            Must Try
                        </a>
                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            Blog
                        </a>

                        <a
                            className="link2 relative font-JosefinSans_semibold uppercase text-black text-base"
                            href=""
                        >
                            Contact
                        </a>
                    </div>
                    <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center flex lg:hidden cursor-poinlink relative ter">
                        <span className="text-base text-white">
                            <RiMenu4Fill />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
