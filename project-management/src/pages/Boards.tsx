import { PanelsTopLeft  } from "lucide-react"
import Themes from "@/components/Themes";

function Boards() {
  return (
    <div className="px-6">
      <header className="flex justify-between items-center mt-4">
         <div className="flex justify-center items-center gap-1">
            <PanelsTopLeft />
            <h1 className="font-bold text-xl">Boards</h1>
         </div>
         <Themes />
      </header>
    </div>
  )
}
export default Boards