import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type SideLinkType = {
   to: string;
   icon: LucideIcon,
   label: string;
   className?: string;
   notifyCount?: number;
}
function SideBarLink({ to, icon: Icon, label, className, notifyCount }: SideLinkType) {
	return (
		<NavLink to={to} end className=" block mb-4  ">
			{({ isActive }) => (
				<div
					className={`flex justify-between gap-3 py-[.5rem] px-3 hover:bg-gray-100 items-center relative  ${
						isActive ? 'bg-blue-100 text-black' : 'text-slate-200'
					}`}
				>
               {isActive && <span className='absolute w-1 rounded-md h-full bg-blue-300 left-0 top-0'></span>}
					<Icon
						className={`${className}`}
						color=' rgb(147 197 253 / 1)'
                  size="1.2rem"
					/>

					<h1 className={`relative mr-auto text-[.94rem] ${isActive? "text-blue-400" : "text-gray-500"}`}>{label}</h1>
					{notifyCount && (
						<span className="w-5 h-5 bg-blue-400 text-slate-200   flex justify-center items-center   rounded-full text-[.9rem]">
							{notifyCount}
						</span>
					)}
				</div>
			)}
		</NavLink>
	);
}

export default SideBarLink;
