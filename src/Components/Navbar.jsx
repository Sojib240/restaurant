import React, { useEffect, useRef, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
    const [navPosition, setnavPosition] = useState(false);
    window.addEventListener("scroll", (e) => {
        const currentScroll = window.scrollY;
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
    const navRef = useRef();
    const [navHeight, setnavHeight] = useState(0);
    const [show, setshow] = useState(false);

    useEffect(() => {
        const height = navRef.current.getBoundingClientRect().height;
        setnavHeight(height);
        console.log(navHeight);
    }, [navHeight]);
    return (
        <>
            <header className="w-full">
                <div
                    ref={navRef}
                    className={`navbar w-full px-6 pt-3 pb-5 absolute top-0 left-0 z-[99]`}
                >
                    <div className="max-w-[1800px] mx-auto flex flex-col justify-between items-center gap-4 md:flex-row">
                        {/*  */}
                        <div className="flex justify-between items-center w-full md:w-auto">
                            <div className="logo w-40 sm:w-40 lg:w-40 pb-2">
                                <img
                                    className="w-full"
                                    src="/logo_name.png"
                                    alt=""
                                />
                            </div>
                            <div
                                onClick={() => console.log("clicked")}
                                className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex md:hidden cursor-pointer relative"
                            >
                                <span className="text-lg text-greenShade-300">
                                    <RiMenu4Fill />
                                </span>
                            </div>
                        </div>
                        {/*  */}
                        <div className="menu opacity-0 md:opacity-100 md:flex items-center gap-5 pt-3 hidden">
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
                    </div>
                </div>

                <div
                    className={`py-6 w-full bg-white absolute top-[110px] left-0 translate-y-[100px] z-[999]  ${
                        show == true
                            ? " visible opacity-100"
                            : "invisible opacity-0"
                    }`}
                >
                    <div className="menu flex flex-col">
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            Home
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            About
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            Must Try
                        </a>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            Blog
                        </a>

                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg px-6 py-3"
                            href=""
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </header>
            {/* <div
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
                    <div className="menu items-center gap-5 hidden lg:flex">
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
                    <div className="menu-btn w-6 h-6 rounded-md bg-greenShade-300 justify-center items-center flex lg:hidden cursor-pointer relative">
                        <span className="text-lg text-white">
                            <RiMenu4Fill />
                        </span>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Navbar;
