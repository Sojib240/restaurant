import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="navbar w-full px-6 fixed top-0 left-0 z-[999999999] lg:px-12">
            <div className="py-5 w-full flex justify-between items-center gap-4">
                <div className="logo w-32 sm:w-40">
                    <img className="w-full" src="/logo_name.png" alt="" />
                </div>
                <div className="menu hidden items-center gap-7 lg:flex">
                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        Home
                    </a>
                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        About
                    </a>
                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        Menu
                    </a>
                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        Must Try
                    </a>
                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        Blog
                    </a>

                    <a
                        className="font-JosefinSans_semibold text-white text-xl"
                        href=""
                    >
                        Contact
                    </a>
                </div>
                <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center flex lg:hidden cursor-pointer">
                    <span className="text-lg text-white">
                        <RiMenu4Fill />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
