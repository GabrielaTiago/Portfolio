import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

export function Grid() {
	return (
		<section id='about'>
			<BentoGrid className='w-full py-20'>
				{gridItems.map(({ id, title, description, img, className, titleClassName, imgClassName, spareImg }) => (
					<BentoGridItem
						key={id}
						id={id}
						title={title}
						description={description}
						img={img}
						className={className}
						titleClassName={titleClassName}
						imgClassName={imgClassName}
						spareImg={spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
}
