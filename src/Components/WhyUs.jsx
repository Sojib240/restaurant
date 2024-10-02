import React from "react";
import { SiCodefresh } from "react-icons/si";
import { FaShoppingBasket } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { PiMosqueFill } from "react-icons/pi";

const WhyUs = () => {
    const whyUsData = [
        { id: 1, image: <SiCodefresh />, title: "fresh food" },
        { id: 2, image: <FaShoppingBasket />, title: "easy to order" },
        { id: 3, image: <PiBowlFoodFill />, title: "appetizing taste" },
        { id: 4, image: <PiMosqueFill />, title: "authentic arabic cuisine" },
    ];
    return (
        <div className="w-full pt-10 pb-32">
            <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                why us?
            </h2>
            <div className="max-w-[1300px] mx-auto flex justify-between gap-10 items-center">
                {whyUsData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center gap-5 w-1/4 ${
                                item.id == 4 ? "border-none" : "border-r-[1px]"
                            }`}
                        >
                            <span className="text-6xl text-orangeShade-300">
                                {item.image}
                            </span>
                            <h2 className="text-[25px] capitalize font-JosefinSans_semibold">
                                {item.title}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyUs;
