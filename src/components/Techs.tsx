// Data
import { mainTechnologies } from '@/data';

export function Techs() {
	return (
		<div className='flex gap-[7.45px] lg:gap-[10px] w-fit absolute right-5 h-full'>
			<div className='flex flex-col gap-2'>
				{mainTechnologies.leftLists.map((item) => (
					<span
						key={item}
						className='p-3 lg:p-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
					>
						{item}
					</span>
				))}
			</div>
			<div className='flex flex-col-reverse gap-2'>
				{mainTechnologies.rightLists.map((item) => (
					<span
						key={item}
						className='p-3 lg:p-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
