import React from "react";

const Testimonial = () => {
    return (
        <div className="w-full h-[70vh] testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -bottom-[1px] -left-[2px] z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto pt-20">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize text-white">
                    Testimonial
                </h2>
            </div>
        </div>
    );
};

export default Testimonial;
