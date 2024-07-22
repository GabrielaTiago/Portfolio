/* eslint-disable @next/next/no-img-element */

// Aceternity UI Components
import { BackgroundGradient } from './BackgroundGradient';
import { GridGlobe } from './GridGlobe';

// Components
import { Techs } from '../Techs';

// Utils
import { cn } from '@/lib/utils';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto', className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col',
				className
			)}
			style={{
				background: 'rgb(4,7,29)',
				backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
			}}
		>
			{/* Components with imgs */}
			<div className='w-full h-full absolute'>
				{img && <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />}
			</div>

			{/* Globe */}
			{id === 2 && <GridGlobe />}

			{/* Tech stack */}
			{id === 3 && <Techs />}

			{/* Some card and Working project */}
			<div className={`absolute -right-2 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
				{spareImg && <img src={spareImg} alt={spareImg} className='object-cover object-center w-full h-full' />}
			</div>

			{/* Background Gradient */}
			{id === 6 && (
				<BackgroundGradient>
					<div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
				</BackgroundGradient>
			)}

			{/* Content of the card (description, title)*/}
			<div
				className={cn(
					titleClassName,
					'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'
				)}
			>
				<div className='font-sans font-extralight text-sm md:max-w-48 md:text-xs lg:text-base text-[#C1C2D3]'>{description}</div>
				<div className='font-sans text-lg lg:text-2xl max-w-md font-bold'>{title}</div>
			</div>
		</div>
	);
};
