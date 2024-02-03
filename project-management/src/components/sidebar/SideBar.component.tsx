import sideLinks from "./SideBar.data"
import SideBarLink from "./SideBarLink.component"
import UserInfo from "./UserInfo";
import { LogOut } from 'lucide-react';

function SideBar() {
  return (
    <div className="flex flex-col justify-between w-[20%] border border-red-600 h-screen py-6 px-4">
      <UserInfo />
      <div className="flex-1 pt-8">
         {sideLinks.map(link => (
            <SideBarLink to={link.to} icon={link.icon} label={link.label} notifyCount={link.notifyCount} />
         ))}

      </div>
      <SideBarLink to="/" icon={LogOut} label="Log out" />

    </div>
  )
}
export default SideBar