import { FaLocationArrow } from 'react-icons/fa6';

// Aceternity UI Components
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

// Components
import { MagicButton } from './MagicButton';

export const Hero = () => {
	return (
		<div className='pb-22 pt-36'>
			<div>
				<Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
				<Spotlight className='-top-10 left-full w-[50vw] h-[80vh]' fill='purple' />
				<Spotlight className='top-28 left-80 w-[50vw] h-[80vh]' fill='blue' />
			</div>

			<div className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.025] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center'>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
			</div>

			<div className='flex justify-center relative my-20 z-10'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					<p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Inovação em cada linha de código</p>

					<TextGenerateEffect
						words='Transformando Visões em Realidade Digital'
						className='text-center text-[40px] md:text-5xl lg:text-6xl'
					/>

					<p className='text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-xl'>
						Sou a Gabriela uma desenvolvedora de software apaixonada por tecnologia
					</p>

					<a href='#about'>
						<MagicButton title='Conheça meu trabalho' icon={<FaLocationArrow />} position='right' />
					</a>
				</div>
			</div>
		</div>
	);
};
