import React from "react";

const About = () => {
    return (
        <div className="w-full py-32 px-5 flex items-center bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="bg1 w-[101%] absolute -bottom-[1px] -left-[2px] z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="w-[6%] absolute top-0 right-0 z-30 h-auto mr-10">
                <img className="w-full" src="/lamp.png" alt="" />
            </div>
            <div className=" max-w-[1800px] mx-auto flex justify-between items-center gap-14">
                <div className="w-[50%]">
                    <h2 className="text-white text-[45px] font-Hidayatullah pb-6 text-center">
                        About us
                    </h2>
                    <p className="text-white text-[25px] font-JosefinSans_Regular text-center">
                        We, Arab Nation, situated at Malad West, Mumbai,
                        Maharashtra are one of the leading Arabic restaurants
                        and we constantly strive to serve the most authentic
                        Arabic food to our patrons. Our skilled chefs, well
                        mannered staff and amazing ambience has made our
                        restaurant a customer favourite destination. We also
                        take orders for parties and various other events and
                        serve freshly prepare, lip smacking and delicious food
                        for the same.
                    </p>
                </div>
                <div className="w-[50%] flex justify-center relative">
                    <div className="w-2/3">
                        <img className="w-full" src="/item2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
