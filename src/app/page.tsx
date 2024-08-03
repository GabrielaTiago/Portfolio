// Aceternity UI Components
import { FloatingNav } from '@/components/ui/FloatingNavbar';

// Components
import { Hero } from '@/components/Hero';
import { Grid } from '@/components/Grid';
import { MainProjects } from '@/components/MainProjects';

// Data
import { navItems } from '@/data';

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-10'>
			<div className=' w-full md:max-w-2xl lg:max-w-[68rem]'>
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<MainProjects />
			</div>
		</main>
	);
}
