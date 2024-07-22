// Aceternity UI Components
import { FloatingNav } from '@/components/ui/FloatingNavbar';

// Components
import { Hero } from '@/components/Hero';
import { Grid } from '@/components/Grid';

// Data
import { navItems } from '@/data';

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-10'>
			<div className='max-w-7xl w-full'>
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
			</div>
		</main>
	);
}
