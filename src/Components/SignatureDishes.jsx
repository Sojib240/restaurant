import React from "react";

const SignatureDishes = () => {
    return (
        <div className="w-full px-6 py-20 min-h-screen">
            <div className="h-full max-w-[1800px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Our Signature Dishes
                </h2>
                <div className="main h-full flex">
                    <div className="1  w-1/2 h-full bg-blue-200"></div>
                    <div className="2 w-1/2 bg-blue-800 h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDishes;
