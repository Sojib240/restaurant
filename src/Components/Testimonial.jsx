import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

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
        <div className="w-full pt-40 pb-28 px-5 testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -bottom-[1px] -left-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -top-[1px]  -right-[2px] z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="max-w-[1300px] mx-auto">
                <div className="slider">
                    <Swiper
                        loop
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper pb-20"
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
