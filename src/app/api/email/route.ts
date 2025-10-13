import { NextRequest } from 'next/server';
import { ReactElement } from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

export async function POST(req: NextRequest) {
	const { name, email, subject, message } = await req.json();
	const host = process.env.EMAIL as string;

	// Create the Resend client lazily so builds don't fail when the API key is missing in local or CI environments.
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('RESEND_API_KEY is not set. Skipping send.');
		return Response.json({ error: 'Missing API key' }, { status: 500 });
	}

	const resend = new Resend(apiKey);

	try {
		const { data, error } = await resend.emails.send({
			from: host,
			to: host,
			subject,
			react: EmailTemplate({ name, email, message }) as ReactElement,
		});

		if (error) {
			console.error(error);
			return Response.json({ error }, { status: 400 });
		}

		return Response.json({ data, message: 'Email sent' });
	} catch (error) {
		console.error(error);
		return Response.json({ error }, { status: 500 });
	}
}
