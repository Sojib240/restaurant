import React from "react";

const SignatureDishes = () => {
    const signatureData = [
        { id: 1, image: "/Extra lamb.JPG", styles: "col-span-2" },
        { id: 2, image: "/Ghormah_sabsy.JPG", styles: "col-span-2" },
        { id: 3, image: "/Grilled Chicken.JPG", styles: "col-span-1" },
        { id: 4, image: "/Grilled fish.JPG", styles: "col-span-3" },
        { id: 5, image: "/GrilledSteak3.JPG", styles: "col-span-2" },
        { id: 6, image: "/HaneedChicken.JPG", styles: "col-span-2" },
        { id: 7, image: "/HaneedLamb.JPG", styles: "col-span-1" },
        { id: 8, image: "/KabsahLamb.JPG", styles: "col-span-1" },
        { id: 9, image: "/LadiesFinger_rice.JPG", styles: "col-span-1" },
        { id: 10, image: "/Mandy_lamb.JPG", styles: "col-span-1" },
        { id: 11, image: "/Spicypotato.JPG", styles: "col-span-1" },
        { id: 12, image: "/LambTagine.jpg", styles: "col-span-3" },
    ];
    return (
        <div className="w-full px-5 py-20 min-h-screen">
            <div className="h-full max-w-[1500px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                    Our Signature Dishes
                </h2>
                <div className="main h-full flex">
                    <div className="grid grid-cols-5 gap-2 grid-rows-auto">
                        {signatureData.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`${item.styles} h-80 rounded-md`}
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureDishes;
