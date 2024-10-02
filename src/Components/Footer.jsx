import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full bg-greenShade-300 px-6 pt-24 pb-8 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto">
                <div className="flex justify-center w-full mb-16">
                    <div className="logo w-[120px]">
                        <img src="/logo.png" alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex gap-28">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-Serenata_Regular font-bold text-white">
                                USEFUL LINKS
                            </h2>
                            <div className="">
                                <p className="text-white">PRIVACY POLICY</p>
                                <p className="text-white">ORDER ONLINE</p>
                                <p className="text-white">WE SERVE</p>
                                <p className="text-white">ABOUT US</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-Serenata_Regular font-bold text-white">
                                HOME
                            </h2>
                            <div className="">
                                <p className="text-white">BOOK A TABLE</p>
                                <p className="text-white">FACILITIES</p>
                                <p className="text-white">WHY US</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-Serenata_Regular font-bold text-white">
                                CONTACT
                            </h2>
                            <div className="">
                                <p className="text-white">
                                    Palm Court Bldg M, 5011B, 5th Floor, New
                                    <br />
                                    Link Road, Beside Goregaon Sports <br />
                                    Complex Malad West, Mumbai. <br /> 400064,
                                    Maharashtra
                                </p>
                                <p className="text-white">+91-8888888888</p>
                                <p className="text-white">
                                    websupport@justdial.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-Serenata_Regular font-bold text-white">
                                CONNECT
                            </h2>
                            <div className="flex gap-3">
                                <span className="text-white text-2xl">
                                    <FaSquareFacebook />
                                </span>
                                <span className="text-white text-2xl">
                                    <IoLogoLinkedin />
                                </span>
                                <span className="text-white text-2xl">
                                    <FaInstagramSquare />
                                </span>
                                <span className="text-white text-2xl">
                                    <FaSquareXTwitter />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <h2 className="font-Serenata_Regular text-white text-lg pt-20">
                    @ Copyrights 2020 - 2021 Arab Nation. All Rights Reserved.
                </h2>
            </div>
        </div>
    );
};

export default Footer;
