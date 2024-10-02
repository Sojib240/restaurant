import React from "react";

const Navbar = () => {
    return (
        <div className="navbar w-full px-12 fixed top-0 left-0 z-[999999999]">
            <div className="py-5 w-full flex justify-between gap-4">
                <div className="logo w-40">
                    <img className="w-full" src="/logo_name.png" alt="" />
                </div>
                <div className="menu flex items-center gap-7">
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
            </div>
        </div>
    );
};

export default Navbar;
