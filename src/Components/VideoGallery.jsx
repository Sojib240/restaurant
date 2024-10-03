import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const VideoGallery = () => {
    const videoGalleryData = [
        {
            id: 1,
            video: 'https://www.youtube.com/embed/YZ84iQrbYjw?si=xQjjRJzqevhqpTop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
        },
        {
            id: 2,
            video: 'https://www.youtube.com/embed/eU-qPYse1JI?si=5v08m-DVuWcV3Pmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/embed/xOMMV_qXcQ8?si=nZSW0bTcPFzMPXV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
        },
        {
            id: 4,
            video: 'https://www.youtube.com/embed/Rwe5Aw3KPHY?si=dj4IBQCJp9FPQB0n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
        },
        {
            id: 5,
            video: 'https://www.youtube.com/embed/njX2bu-_Vw4?si=NHGqIW6MTp9nLg9r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
        },
    ];

    return (
        <div className="w-full px-6 py-5 sm:py-20">
            <h2 className="text-[35px] font-Hidayatullah text-center pb-14 capitalize">
                Videos
            </h2>
            <div className="max-w-[1300px] mx-auto">
                <div className="slider mt-6 pb-5">
                    <Swiper
                        loop
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {videoGalleryData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move"
                                >
                                    <div className="flex flex-col justify-center items-center text-center h-[380px]">
                                        <iframe
                                            className="w-full h-full rounded-md"
                                            src={item.video}
                                            allowfullscreen
                                        ></iframe>
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

export default VideoGallery;
