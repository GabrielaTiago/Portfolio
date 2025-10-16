import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gabriela Tiago | Desenvolvedora de Software',
	description:
		'Desenvolvedora de software especializada em soluções inovadoras e eficientes. Portfólio com projetos full-stack, desenvolvimento web e aplicativos.',
	keywords:
		'desenvolvedor de software, software developer, freelancer, desenvolvimento web, full-stack, React, TypeScript, Node.js, Next.js, Java, Python, C#, portfólio, projetos, aplicativos, soluções de software, inovação tecnológica',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Gabriela Tiago | Desenvolvedora de Software',
		description: 'Desenvolvedora de software especializada em soluções inovadoras e eficientes.',
		url: 'https://gabrielatiago.com.br',
		siteName: 'Gabriela Tiago Portfolio',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Gabriela Tiago - Desenvolvedora de Software',
			},
		],
		locale: 'pt_BR',
		type: 'website',
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
