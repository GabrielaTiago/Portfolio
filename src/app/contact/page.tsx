'use client';
import { Spinner } from '@chakra-ui/spinner';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { RiSmartphoneFill } from 'react-icons/ri';
import { Input } from '@/components/ui/Input';
import { Label, LabelInputContainer } from '@/components/ui/Label';
import { MagicButton } from '@/components/MagicButton';
import { TextArea } from '@/components/ui/TextArea';
import { contactAddress, contactHeading, contactPhone } from '@/data';
import { sendEmail } from '@/lib/mail';

interface ContactData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const initState: ContactData = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
	const [data, setData] = useState<ContactData>(initState);
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			await sendEmail(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className='bg-black-100 h-screen flex justify-center items-center flex-col mx-auto py-10 px-5 lg:px-10'>
			<div className='max-w-md w-full h-fit rounded-3xl p-6 md:p-8 shadow-input border dark:border-white/[0.2] border-black/[0.1]'>
				<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center'>{contactHeading}</h2>

				<div className='mt-5 flex flex-col justify-center items-center gap-1 text-white-100 dark:text-neutral-300 text-base'>
					<span className='flex items-center gap-2'>
						<FaHome className='text-purple' width={8} height={8} /> {contactAddress}
					</span>
					<span className='flex items-center gap-2'>
						<RiSmartphoneFill className='text-purple' width={8} height={8} /> {contactPhone}
					</span>
				</div>

				<form className='my-8 space-y-4 ' onSubmit={handleSubmit}>
					<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
						<LabelInputContainer>
							<Label htmlFor='name'>Nome</Label>
							<Input id='name' placeholder='' type='text' required onChange={handleChange} />
						</LabelInputContainer>
						<LabelInputContainer>
							<Label htmlFor='email'>Seu Email</Label>
							<Input id='email' placeholder='' type='email' required onChange={handleChange} />
						</LabelInputContainer>
					</div>
					<LabelInputContainer>
						<Label htmlFor='subject'>Assunto</Label>
						<Input id='subject' placeholder='' type='text' required onChange={handleChange} />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor='message'>Mensagem</Label>
						<TextArea id='message' placeholder='' required onChange={handleChange} />
					</LabelInputContainer>

					<MagicButton
						title={!loading ? 'Enviar' : ''}
						icon={!loading ? <IoIosMail /> : <Spinner className='h-4 w-4' />}
						position='right'
						type='submit'
						disabled={loading}
					/>
				</form>
			</div>
		</main>
	);
}
