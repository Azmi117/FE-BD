import React from "react";
import { Link } from "react-router-dom";

const Box = () => {
    return(
        <>
        <div className="absolute top-9 right-2 w-20 h-auto rounded-md bg-white shadow-lg z-10">
            <div className="bg-white rounded-t-md hover:bg-gray-200">
                <Link to={'/profile'} className="block py-2 ms-5 hover:bg-gray-200 rounded-md">Profile</Link>
            </div>
            <div className="bg-white rounded-b-md">
                <button className="block w-full py-2 hover:bg-gray-200 rounded-b-md">Logout</button>
            </div>
        </div>
        </>
    )
}

export default Box;