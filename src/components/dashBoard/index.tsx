//import Login from "../auth/Login";
import DashboardLayout from "../layout/DashboardLayout";
import { Outlet } from "react-router-dom";


function Dashboard() {
  // let currentUser = localStorage.getItem("user");
  // currentUser = currentUser ? JSON.parse(currentUser) : undefined;

  // if(!currentUser){
  //   return <Login/>
  // }

  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
