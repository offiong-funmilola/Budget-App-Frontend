import { NavLink } from "react-router-dom"
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdSavings } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import { ContextType } from "../../type";
import { useNavigate } from "react-router-dom";


function DashboardSideBar() {
    const navigate = useNavigate()
    const {clearStorage} = useContext(BudgetContext) as ContextType
    
    const logUserOut = () => {
        clearStorage()
        navigate('/login')
    }
  
    return (
        <div className="w-full h-full bg-white rounded-xl">
            <nav className="w-full h-full px-5 py-10 flex flex-col justify-start gap-5 ">
                <NavLink to='/dashboard'  className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'}>
                    <div className="w-10 h-8 flex items-center justify-centers p-2">
                        <MdOutlineDashboard className="text-2xl"/>
                    </div>
                    <p>Dashboard</p>
                </NavLink>
                <NavLink to='/dashboard/income'className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'}>
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <GiReceiveMoney className="text-2xl"/>
                    </div>
                    <p>Income</p>  
                </NavLink>
                <NavLink to='/dashboard/savings' className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'} >
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <MdSavings className="text-2xl"/>
                    </div>
                    <p>Savings</p>  
                </NavLink>
                {/* <NavLink to='/dashboard/analytics' className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'}>
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <GrAnalytics className="text-2xl"/>
                    </div>
                    <p>Analytics</p>
                </NavLink> */}
                <NavLink to='/dashboard/Category' className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'}>
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <AiOutlineTransaction className="text-2xl" />
                    </div>
                    <p>Add Category</p>  
                </NavLink>
                <NavLink to='/dashboard/summary' className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg' : 'w-full h-10 flex items-center gap-1 text-black text-lg'}>
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <HiOutlineDocumentReport className="text-2xl"/>
                    </div>
                    <p>Report</p>  
                </NavLink>
                <NavLink to='/login' className={({isActive})=> isActive ? 'w-full h-10 flex items-center gap-1 text-purple-900 text-lg mt-auto' : 'w-full h-10 flex items-center gap-1 text-black text-lg mt-auto'} onClick={logUserOut}>
                    <div className="w-10 h-8 flex items-center justify-center p-2">
                        <IoLogOutOutline className="text-2xl"/>
                    </div>
                    <p>Logout</p>  
                </NavLink>
            </nav>  
        </div>
    )
}

export default DashboardSideBar
