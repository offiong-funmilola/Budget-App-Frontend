import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdSavings } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import {useUtilityContext} from '../../components/context/UtilityContext'
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const { clearStorage } = useUtilityContext();

  const logUserOut = () => {
    clearStorage();
    navigate("/login");
  };

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="w-full h-10 relative lg:flex item-center justify-between">
      <div className="hidden lg:w-1/3 lg:flex flex-col gap-1">
        <h3 className="text-xl font-semibold font-sans">
          Personal Financial Management
        </h3>
        <p className="text-lg font-sans">Check your financial status</p>
      </div>
      <div className="w-[32px] h-8 bg-white border border-purple-900 flex items-center justify-center lg:hidden">
        {show ? (
          <LiaTimesSolid
            className="text-2xl text-purple-900"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenuAlt2
            className="text-2xl text-purple-900"
            onClick={handleMenu}
          />
        )}
      </div>

      <div className="absolute lg:relative w-1/3 rounded-full bg-white right-0 top-0 ">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="w-full h-8 bg-white px-10 md:px-12 py-4 rounded-full text-lg placeholder:text-gray-500"
        />
        <FaSearch className="text-sm md:text-lg absolute top-2.5 lg:top-2 left-5 text-gray-500" />
      </div>
      {show && (
        <div className="relative left-0 bottom-0 w-1/3 self-start z-50">
          <div className="w-full h-full bg-white rounded-xl">
            <nav className="w-full h-full px-5 py-10 flex flex-col justify-start gap-5 ">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-centers p-2">
                  <MdOutlineDashboard className="text-2xl" />
                </div>
                <p>Dashboard</p>
              </NavLink>
              <NavLink
                to="/dashboard/income"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <GiReceiveMoney className="text-2xl" />
                </div>
                <p>Income</p>
              </NavLink>
              <NavLink
                to="/dashboard/savings"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <MdSavings className="text-2xl" />
                </div>
                <p>Savings</p>
              </NavLink>
              <NavLink
                to="/dashboard/analytics"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <GrAnalytics className="text-2xl" />
                </div>
                <p>Analytics</p>
              </NavLink>
              <NavLink
                to="/dashboard/Category"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <AiOutlineTransaction className="text-2xl" />
                </div>
                <p>Add Category</p>
              </NavLink>
              <NavLink
                to="/dashboard/summary"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg"
                }
                onClick={handleMenu}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <HiOutlineDocumentReport className="text-2xl" />
                </div>
                <p>Report</p>
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg mt-auto"
                    : "w-full h-10 flex items-center gap-1 text-black text-lg mt-auto"
                }
                onClick={logUserOut}
              >
                <div className="w-10 h-8 flex items-center justify-center p-2">
                  <IoLogOutOutline className="text-2xl" />
                </div>
                <p>Logout</p>
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardNavbar;
