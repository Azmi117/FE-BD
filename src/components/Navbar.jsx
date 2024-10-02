import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Box from "./Box";

const Navbar = ({children}) => {
    const [Boxy, setBoxy] = useState(false);

    const handleBox = () => {
        setBoxy(!Boxy);
    }

    return(
        <>
            <nav className="w-full h-[3rem] bg-[#FF3EA5] flex items-center justify-between">
                <div className="ms-5">
                    <h1 className="text-white edu-au-vic-wa-nt-dots-regular">Happy Birth Day</h1>
                </div>
                <div className="me-7">
                    <button onClick={handleBox}>
                        <img src="https://images.pexels.com/photos/27782182/pexels-photo-27782182/free-photo-of-a-woman-in-a-white-shirt-and-hat-is-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-8 h-8 rounded-full"/>
                    </button>
                    {Boxy && (
                        <Box/>
                    )}
                </div>
                {children}
            </nav>
        </>
    )
}

export default Navbar;