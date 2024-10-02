import React from "react";
import Hero from "../Components/Hero";
import Serve from "../Components/Serve";
import Facilities from "../Components/Facilities";
import About from "../Components/About";
import WhyUs from "../Components/WhyUs";
import VideoGallery from "../Components/VideoGallery";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import SignatureDishes from "../Components/SignatureDishes";
import Testimonial from "../Components/Testimonial";

const HomePage = () => {
    return (
        <div className="w-full h-full">
            <Hero />
            <Serve />
            <Facilities />
            <About />
            <SignatureDishes />
            <WhyUs />
            <Testimonial />
            <VideoGallery />
            <ContactUs />
        </div>
    );
};

export default HomePage;
