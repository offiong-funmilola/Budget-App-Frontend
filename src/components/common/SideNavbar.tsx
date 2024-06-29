import { IoIosNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg";


function SideNavbar() {
 
  let user = localStorage.getItem('user') 
  let currentUser = user ? JSON.parse(user) : undefined
  return (
    <div className="w-full h-full flex items-center justify-start px-5 gap-6">
      <div className="w-8 h-8 relative">
        < IoIosNotificationsOutline  className="text-4xl text-purple-900"/>
        <div className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-purple-500 text-white">
          <p className="w-full flex items-center justify-center">2</p>
        </div>
      </div>
      <div className="w-3/4 h-full flex items-center justify-start gap-4">
        <CgProfile className="text-3xl"/>
        <p className="text-xl text-purple-900">{currentUser?.name || ''}</p>
      </div>
    </div>
  )
}

export default SideNavbar
