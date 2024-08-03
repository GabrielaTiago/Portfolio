export const navItems = [
	{ name: 'Sobre', link: '#about' },
	{ name: 'Projetos', link: '#projects' },
	{ name: 'Experiência', link: '#workexperience' },
	{ name: 'Contato', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'Priorizo o contato com o cliente, promovendo a comunicação aberta',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[55vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: 'Sou flexível com comunicações em diferentes fusos',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'Minhas principais tecnologias',
		description: 'Sempre me desenvolvendo',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center lg:max-w-72',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Entusiasta de tecnologia com paixão por desenvolvimento',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},
	{
		id: 5,
		title: 'Atualmente estou construindo um sistema para controle de manutenções veiculares',
		description: 'Em primeira mão',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center sm:max-w-72 lg:max-w-96',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Vamos iniciar um projeto juntos?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center items-center max-w-full text-center',
		img: '',
		spareImg: '',
	},
];

export const mainTechnologies = {
	leftLists: ['ReactJS', 'NodeJS', 'Java'],
	rightLists: ['TS', 'Python', 'C#'],
};

export const projectsHeadingTitle = 'Uma pequena seleção dos meus ';
export const projectsHeadingHighlight = 'projetos xodozinhos';

export const projects = [
	{
		id: 1,
		title: 'Trackit',
		des: 'App React para registrar e monitorar hábitos diários com calendário interativo e fácil gestão.',
		img: '/trackit.gif',
		iconLists: [
			{ id: 1, name: 'JavaScript', image: '/js.svg' },
			{ id: 2, name: 'React', image: '/re.svg' },
			{ id: 3, name: 'Styled Components', image: '/sc.svg' },
			{ id: 4, name: 'Axios', image: '/ax.svg' },
		],
		link: 'https://trackit-gabrielatiago.vercel.app',
	},
	{
		id: 2,
		title: 'MyWallet',
		des: 'Aplicação que permite aos usuários gerenciar suas finanças pessoais de forma fácil e eficiente.',
		img: '/mywallet.png',
		iconLists: [
			{ id: 1, name: 'JavaScript', image: '/js.svg' },
			{ id: 2, name: 'React', image: '/re.svg' },
			{ id: 3, name: 'Styled Components', image: '/sc.svg' },
			{ id: 4, name: 'Axios', image: '/ax.svg' },
		],
		link: 'https://mywallet-gabrielatiago.vercel.app',
	},
	{
		id: 3,
		title: 'Cineflex',
		des: 'Um sistema de compra de ingressos de cinema. O usuário escolhe um filme, a hora e os lugares disponíveis, gerando um bilhete com suas escolhas.',
		img: '/cineflex.gif',
		iconLists: [
			{ id: 1, name: 'JavaScript', image: '/js.svg' },
			{ id: 2, name: 'React', image: '/re.svg' },
			{ id: 3, name: 'Styled Components', image: '/sc.svg' },
			{ id: 4, name: 'Axios', image: '/ax.svg' },
		],
		link: 'https://cineflex-gabrielatiago.vercel.app',
	},
];
