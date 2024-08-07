import { NextRequest } from 'next/server';
import { ReactElement } from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const { name, email, subject, message } = await req.json();
	const host = process.env.EMAIL as string;

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
		return Response.json({ error }, { status: 500 });
	}
}
