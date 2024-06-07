import { IoIosNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg";
import {User} from '../../type'

function SideNavbar() {
  let currentUser:User  = JSON.parse(localStorage.getItem('user') || '') 
  
  return (
    <div className="w-full h-full flex items-center justify-start px-5 gap-6">
      < IoIosNotificationsOutline  className="text-3xl text-purple-900"/>
      <div className="w-3/4 h-full flex items-center justify-start gap-4">
        <CgProfile className="text-3xl"/>
        <p className="text-xl text-purple-900">{currentUser?.name || ''}</p>
      </div>
    </div>
  )
}

export default SideNavbar
