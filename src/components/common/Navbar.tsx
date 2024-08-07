import { NavLink, useNavigate } from "react-router-dom";
import { useClientRequestContext } from "../context/RequestContext"; 
import { useUtilityContext } from "../context/UtilityContext";
import logo from "../../assets/hfm-logo.png";

function Navbar() {
  const navigate = useNavigate();
 
  const { currentUser} = useClientRequestContext()
  const {clearStorage} = useUtilityContext()
   

  const logUserOut = () => {
    clearStorage();
    navigate("/login");
  };
  return (
    <div className="w-full h-[10vh] p-10 flex items-center justify-between bg-purple-900">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "w-42 p-3 font-bold mr-auto text-xl"
            : "w-42 p-3 font-bold mr-auto text-xl"
        }
      >
        <div className="w-14 h-14">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
      </NavLink>
      {currentUser && (
        <div className="flex gap-5 justify-between">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "w-full h-10 flex items-center gap-1 text-purple-900 text-lg mt-auto"
                : "w-full h-10 flex items-center gap-1 text-black text-lg mt-auto"
            }
            onClick={logUserOut}
          >
            Logout
          </NavLink>
        </div>
      )}
      {!currentUser && (
        <div className="flex gap-5 justify-between">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-xl text-orange-300 "
                : "font-bold text-white text-xl"
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-orange-300 text-xl"
                : "font-bold text-white text-xl"
            }
          >
            {" "}
            Login{" "}
          </NavLink>
          <NavLink 
            to='/dashboard' 
            className={({isActive}) => isActive 
                ? "font-bold text-orange-300 text-xl" 
                : "font-bold text-white text-xl"
            }
            > 
            Dashboard 
            </NavLink>   
        </div>
      )}
    </div>
  );
}

export default Navbar;
