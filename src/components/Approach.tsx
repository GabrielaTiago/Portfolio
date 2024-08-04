import { AceternityIcon, CanvasRevealEffect, Card } from './ui/CanvasRevealEffect';
import { approachHeading, approachHeadingHighlight, approachs } from '@/data';

export function Approach() {
	return (
		<section className='w-full py-20'>
			<h1 className='heading'>
				{approachHeading}
				<span className='text-purple'>{approachHeadingHighlight}</span>
			</h1>

			<div className='mt-12 flex flex-col lg:flex-row items-center justify-center w-full gap-4'>
				{approachs.map((approach) => (
					<Card key={approach.id} title={approach.title} icon={<AceternityIcon order={approach.order} />} des={approach.desc}>
						<CanvasRevealEffect
							animationSpeed={approach.animationSpeed}
							containerClassName={approach.className}
							colors={approach.colors}
						/>
					</Card>
				))}
			</div>
		</section>
	);
}
