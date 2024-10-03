import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
        <div className="w-screen min-h-screen bg-[#EF5A6F] flex justify-center items-center overflow-x-hidden">
            <div className="w-72 bg-[#FFF1DB] shadow-md rounded-md">
                <div>
                    <h1 className="relative left-32 text-slate text-xl text-[#C75B7A] py-2 pacifico-regular">Login</h1>
                </div>
                <div className="flex justify-center p-2">
                    <div className="bg-[#D4BDAC]">
                        <img src="https://www.svgrepo.com/show/494757/email.svg" alt="" className="w-8 h-8"/>
                    </div>
                    <input type="email" className="px-1"/>
                </div>
                <div className="flex justify-center p-2">
                    <div className="bg-[#D4BDAC]">
                        <img src="https://www.svgrepo.com/show/517588/lock.svg" alt="" className="w-8 h-8"/>
                    </div>
                    <input type="password" className="px-1"/>
                </div>
                <div className="flex justify-center py-5 bg-">
                    <button className="w-56 bg-[#C75B7A] text-white hover:text-gray-300 rounded-md">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;