import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gabriela Tiago Portfolio',
	description:
		'Sou um desenvolvedora de software dedicada a criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias e metodologias de desenvolvimento, meu objetivo é transformar ideias complexas em realidade. Navegue pelo meu portfólio e descubra os projetos em que trabalhei, destacando meu compromisso com a qualidade, a performance e a excelência em cada linha de código.',
	keywords:
		'desenvolvedor de software, software develloper, freelancer, freelancer em tecnologia, soluções de software personalizadas, custom software solutions, inovação tecnológica, technological innovation, desenvolvimento web, web development,desenvolvimento de aplicativos, app development, serviços de programação, programming services, desenvolvimento full-stack, full-stack development, programador freelancer, freelance programmer, criador de software, oftware creator,web design, projetos de TI, IT projects, serviços de desenvolvimento ágil, agile development services',
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
