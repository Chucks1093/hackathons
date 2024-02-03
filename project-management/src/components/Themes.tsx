import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuGroup,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function Themes() {
	const [position, setPosition] = useState('bottom');

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<MoreHorizontal />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[24rem]">
				<DropdownMenuLabel>Themes</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup className='grid grid-cols-4 p-1 gap-1 '>
					{Array.from({ length: 9 }).map((item, index) => (
						<DropdownMenuItem className='h-[7rem] p-0 border border-red-600' key={index}>
							<img className='object-cover w-full h-full block ' src={`/themes/theme-${index+1}.jpg`} alt="" />
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
