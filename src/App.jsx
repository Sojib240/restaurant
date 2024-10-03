import React, { useRef } from "react";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
    // const heroRef = useRef(null)

    return (
        <>
            <Navbar />
            <HomePage />
            <Footer />
        </>
    );
};

export default App;
