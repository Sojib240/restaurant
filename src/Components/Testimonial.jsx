import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            logo: <FaQuoteLeft />,
            title: "James F. Nowlin",
            desc: "Eveniet reprehenderit delectus possimus nemo placeat repudiandae deleniti debitis. Id in minus, temporibus voluptatum ullam",
        },
        {
            id: 2,
            logo: <FaQuoteLeft />,
            title: "Mary J. Robards",
            desc: "impedit sequi excepturi, recusandae perspiciatis accusantium iure consequatur vitae quasi a, quisquam molestias pariatur aperiam vero. Natus, inventore officia a illum",
        },
        {
            id: 3,
            logo: <FaQuoteLeft />,
            title: "Jose B. Massey",
            desc: "Incidunt iusto accusamus id repellat. Ab ad excepturi a reprehenderit autem ut maxime architecto perferendis culpa eligendi atque amet perspiciatis laboriosam ratione",
        },
        {
            id: 4,
            logo: <FaQuoteLeft />,
            title: "Marcus T. Shepherd",
            desc: "est dolor cumque aperiam id repudiandae, ipsam reiciendis! Numquam, dolorum nulla. Doloribus exercitationem suscipit mollitia possimus modi molestiae reiciendis",
        },
        {
            id: 5,
            logo: <FaQuoteLeft />,
            title: "Ulrich Eisenhauer",
            desc: "Consectetur harum cumque in similique rem, aperiam doloribus consequuntur autem est hic laudantium ab temporibus magni ullam maiores voluptatibus.",
        },
    ];
    return (
        <div className="w-full pt-24 pb-40 testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -bottom-[1px] -left-[2px] z-40">
                <img className="w-full" src="/wave4.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto">
                <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize text-white">
                    Testimonial
                </h2>
                <div className="slider mt-6 pb-5">
                    <Swiper
                        loop
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {testimonialData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move"
                                >
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div className="flex items-center gap-5">
                                            <span className="text-5xl text-orangeShade-300">
                                                {item.logo}
                                            </span>
                                            <h2 className="text-[25px] font-JosefinSans_semibold text-white">
                                                {item.title}
                                            </h2>
                                        </div>
                                        <p className="text-[18px] font-JosefinSans_Regular text-white">
                                            {item.desc}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
