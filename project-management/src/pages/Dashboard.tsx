import SideBar from "@/components/sidebar/SideBar.component"
import { Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
         <Outlet />  
      </div>
    </div>
  )
}
export default Dashboard