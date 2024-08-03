import Image from 'next/image';
import Link from 'next/link';
import { RiExternalLinkLine } from 'react-icons/ri';
import { CardBody, CardContainer, CardItem } from './ui/3dCard';
import { projects, projectsHeadingHighlight, projectsHeadingTitle } from '@/data';
import { AnimatedTooltip } from './ui/AnimatedTooltip';

export function MainProjects() {
	return (
		<section id='projects' className='py-20 flex flex-col items-center justify-center w-full'>
			<h2 className='heading max-w-[80vw] md:max-w-2xl lg:max-w-[60vw]'>
				{projectsHeadingTitle}
				<span className='text-purple'>{projectsHeadingHighlight}</span>
			</h2>

			<div className='flex flex-wrap items-center justify-center gap-12 mt-12'>
				{projects.map(({ id, title, des, img, iconLists, link }) => (
					<CardContainer key={id}>
						<CardBody className='relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] h-full w-full lg:max-w-[500px] rounded-xl p-6 border'>
							<CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
								{title}
							</CardItem>
							<CardItem
								as='p'
								translateZ='60'
								className='mt-3 font-light text-sm lg:text-base line-clamp-2'
								style={{ color: '#BEC1DD' }}
							>
								{des}
							</CardItem>
							<CardItem translateZ='100' className='w-full mt-8'>
								<Image
									src={img}
									height='1000'
									width='1000'
									className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
									alt={`bg ${title}`}
								/>
							</CardItem>

							<div className='flex justify-between items-center mt-14'>
								<CardItem translateZ={20} className='text-xs font-normal dark:text-white'>
									<div className='flex items-center'>
										<AnimatedTooltip items={iconLists} />
									</div>
								</CardItem>

								<CardItem
									translateZ={20}
									as={Link}
									href={link}
									target='__blank'
									className='text-xs font-bold flex justify-center items-center'
								>
									<p className='flex lg:text-xl md:text-xs text-sm text-purple'>Acesse</p>
									<RiExternalLinkLine className='ms-3' color='#CBACF9' size='1.75em' />
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</section>
	);
}
