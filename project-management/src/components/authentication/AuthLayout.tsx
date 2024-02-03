
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="authlayout h-screen flex justify-center items-center">
      <div className="w-[95%] lg:w-[35%] md:w-[70%] rounded-md bg-white">
         <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout;