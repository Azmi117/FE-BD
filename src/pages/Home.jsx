import React from "react";
import Navbar from "../components/Navbar";
import Wheel from "../components/Wheel";

const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="flex justify-center mt-5">
                <Wheel/>
            </div>
        </>
    )
}

export default Home;