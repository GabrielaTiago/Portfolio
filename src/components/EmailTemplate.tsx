import { FC } from 'react';

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
	<div className='flex flex-col gap-2'>
		<p>
			<strong>Name: </strong>
			{name}
		</p>
		<p>
			<strong>Email: </strong>
			{email}
		</p>
		<p>
			<strong>Mensagem: </strong>
			{message}
		</p>
	</div>
);

export default EmailTemplate;
