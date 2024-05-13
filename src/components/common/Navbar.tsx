import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <div className="w-full h-[10vh] p-10 flex items-center justify-between bg-purple-900">
            <NavLink to='/' className={({isActive}) => isActive ? "w-42 p-3 border-2 border-white text-white font-bold mr-auto text-xl" : "w-42 p-3 border-2 border-purple-900 text-purple-900 bg-white font-bold mr-auto text-xl"}>Budget App</NavLink>
            <div className=" flex gap-5 justify-between">
                <NavLink to='/signup' className={({isActive}) => isActive ? "font-bold text-xl text-orange-300 " : "font-bold text-white text-xl"}>Signup</NavLink>
                <NavLink to='/login' className={({isActive}) => isActive ? "font-bold text-orange-300 text-xl" : "font-bold text-white text-xl"}> Login </NavLink>      
            </div>
        </div>
    )
}

export default Navbar