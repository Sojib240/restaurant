import React from "react";

const Serve = () => {
    const cardData = [
        {
            id: 1,
            image: "/item1.webp",
            title: "starters",
            desc: "enjoy variety of lip smacking starters made by our skilled and expert chefs",
        },
        {
            id: 2,
            image: "/item2.webp",
            title: "main course",
            desc: "enjoy a wide range of delectable dishes cooked to perfection by our chefs",
        },
        {
            id: 3,
            image: "/item3.webp",
            title: "desserts",
            desc: "surprise your taste buds with our delicious and authentic arabic desserts",
        },
        {
            id: 4,
            image: "/item4.webp",
            title: "drinks",
            desc: "we serve a wide range of non-alcoholic drinks to satiate our patrons",
        },
    ];
    return (
        <div className="serve px-6 py-20 bg-opacity-0">
            <div className="mx-auto max-w-[1800px]">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    We Serve
                </h2>
                <div className="flex gap-10">
                    {cardData.map((item) => {
                        return (
                            <div className="card w-1/4 p-4">
                                <div className="image bg-greenShade-300 overflow-hidden rounded-tl-[50px] rounded-tr-[50px] p-10 relative ">
                                    <div className="bg1 w-[101%] absolute -bottom-[1px] -left-[2px]">
                                        <img
                                            className="w-full"
                                            src="/wave3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        className="w-full[80%]"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-center text-[25px] mt-6 font-JosefinSans_semibold capitalize">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-center capitalize leading-6 pt-3 font-JosefinSans_Regular">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Serve;
