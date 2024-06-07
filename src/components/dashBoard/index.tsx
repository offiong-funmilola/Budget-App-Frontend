//import BudgetContext from "../context/BudgetContext"
//import { ContextType } from "../../type"
//import { useContext } from "react"
//import Login from "../auth/Login"

import DashboardLayout from "../layout/DashboardLayout"
import { Outlet } from "react-router-dom"


function Dashboard() {
  //const {currentUser} = useContext(BudgetContext) as ContextType
    
  // if(!currentUser) {
  //     return(
  //         <Login/>
  //     )
  // }

  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <Outlet/>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
