import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";

const Facilities = () => {
    const facilitiesData = [
        { id: 1, icon: <MdDeliveryDining />, title: "Home Delivery" },
        { id: 2, icon: <FaShoppingBag />, title: "Take Away" },
        { id: 3, icon: <FaCreditCard />, title: "Ease of Payment" },
        { id: 4, icon: <GiPartyPopper />, title: "Party orders" },
    ];
    return (
        <div className=" Facilities pt-20 pb-28 px-6 w-full relative">
            <div className="w-full">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Facilities
                </h2>
                <div className="w-full flex items-center max-w-[1300px] mx-auto ">
                    {facilitiesData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="w-1/4 flex flex-col justify-between items-center"
                            >
                                <span className="p-7 rounded-2xl bg-greenShade-100 text-5xl text-white mb-4">
                                    {item.icon}
                                </span>
                                <h2 className="text-[20px] font-Serenata_Regular">
                                    {item.title}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
