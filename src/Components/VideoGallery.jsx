import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

const VideoGallery = () => {
    const swiper = useSwiper();

    return (
        <div className="w-full px-6 py-20">
            <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                Videos
            </h2>
            <div className="max-w-[1300px] mx-auto">
                <div className="slider relative w-full">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        // navigation={{
                        //     nextEl: ".arrowLeft",
                        //     prevEl: ".arrowRight",
                        // }}
                        // navigation={true}
                        modules={[Navigation]}
                        className=""
                        // onSlideChange={() => console.log("slide change")}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                className="w-[100%] h-[350px]"
                                src="https://www.youtube.com/embed/muDpH2Ty2tg?si=WEFb8LlzaQEuFbDG"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                        <div className="w-full h-full absolute top-0 left-0 flex justify-between items-center z-50"></div>
                    </Swiper>
                    {/* <div className="">
                            <span
                                onClick={() => swiper.slidePrev()}
                                className="arrowLeft "
                            >
                                <FaArrowLeft />
                            </span>
                            <span
                                onClick={() => swiper.slideNext()}
                                className="arrowRight "
                            >
                                <FaArrowRight />
                            </span>
                            </div> */}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
