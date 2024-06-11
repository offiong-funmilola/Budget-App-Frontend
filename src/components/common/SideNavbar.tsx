import { IoIosNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg";


function SideNavbar() {
 
  let user = localStorage.getItem('user') 
  let currentUser = user ? JSON.parse(user) : undefined
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
