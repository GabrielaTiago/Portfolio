import Image from 'next/image';
import Link from 'next/link';
import { IoIosSend } from 'react-icons/io';
import { MagicButton } from './MagicButton';
import {
    footerHeadingP1,
    footerHeadingP2,
    footerHighlight,
    footerTxt,
    footerTxtBtn,
    socialMedia
    } from '@/data';

export function Footer() {
	return (
		<footer className='w-full pt-20 pb-10' id='contact'>
			<div className='w-full absolute left-0 -bottom-70 min-h-96'>
				<Image src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50 ' width={100} height={100} />
			</div>

			<div className='flex flex-col items-center'>
				<h2 className='heading max-w-[80vw] md:max-w-2xl lg:max-w-[58vw]'>
					{footerHeadingP1}
					<span className='text-purple'>{footerHighlight}</span>
					{footerHeadingP2}
				</h2>
				<p className='text-white-200 md:mt-10 my-5 text-center'>{footerTxt}</p>
				<Link href='/contact'>
					<MagicButton title={footerTxtBtn} icon={<IoIosSend />} position='right' />
				</Link>
			</div>
			<div className='flex mt-16 w-full md:flex-row flex-col justify-center items-center'>
				<div className='flex items-center md:gap-3 gap-6'>
					{socialMedia.map((info) => (
						<Link href={info.link} key={info.id} target='__blank'>
							<div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
								<Image src={info.img} alt='icons' width={20} height={20} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
