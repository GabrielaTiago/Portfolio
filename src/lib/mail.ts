interface EmailProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export async function sendEmail({ name, email, subject, message }: EmailProps) {
	const apiEndpoint = '/api/email/';

	try {
		const res = await fetch(apiEndpoint, {
			method: 'POST',
			body: JSON.stringify({ name, email, subject, message }),
		});
		if (res.status === 200) console.log('Email sent');
	} catch (error) {
		console.error(error);
		return;
	}
}
