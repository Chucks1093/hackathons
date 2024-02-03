import { PanelsTopLeft, Users , Activity  } from 'lucide-react';

const sideLinks = [
   {
      label: "Boards",
      icon: PanelsTopLeft,
      to: "/dashboard",
      notifyCount: 3
   },
   {
      label: "Teams",
      icon: Users,
      to: "/dashboard/teams"
   },
   {
      label: "Analytics",
      icon: Activity,
      to: "/dashboard/analytics"
   }
]
export default sideLinks;