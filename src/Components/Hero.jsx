import React from "react";

const Hero = () => {
    return (
        <div className="heroBg w-full px-5 bg-orangeShade-300 relative z-50 overflow-hidden">
            {/* <div className="w-[50%] absolute right-0 bottom-0 h-auto">
                <img className="w-full" src="/Group 1.svg" alt="" />
            </div> */}

            <div className="bg w-[101%] absolute -bottom-[1px] left-0 rotate-180">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="max-w-[1800px] pt-[410px] pb-40 mx-auto relative">
                <div className="w-[6%] absolute top-0 right-0 z-50 h-auto">
                    <img className="w-full" src="/lamp.png" alt="" />
                </div>
                <div className="flex">
                    <div className=" text-left w-full flex flex-col justify-start items-left gap-8 relative">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[60px] leading-[90px] font-Hidayatullah text-white">
                                relish the most
                            </h2>
                            <h2 className="text-[60px] leading-[90px] font-Hidayatullah text-white">
                                tempting delicacies with us!
                            </h2>
                        </div>
                        <div className="flex gap-3">
                            <button className="text-white bg-greenShade-100 px-10 py-3 rounded-full text-[20px] capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular">
                                Menu
                            </button>
                            <button className="text-white bg-greenShade-100 px-10 py-3 rounded-full text-[20px] capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular">
                                order online
                            </button>
                            <button className="text-white bg-greenShade-100 px-10 py-3 rounded-full text-[20px] capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular">
                                book a table
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
