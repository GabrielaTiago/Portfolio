export const navItems = [
	{ name: 'Sobre', link: '#about' },
	{ name: 'Projetos', link: '#projects' },
	{ name: 'Experiência', link: '#workexperience' },
	{ name: 'Contato', link: '/contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'Desenvolvendo soluções com foco nas necessidades do cliente',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[55vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: 'Disponível para colaboração remota',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'Principais tecnologias que domino',
		description: 'Sempre aprendendo',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center lg:max-w-72',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Buscando inovação através do código',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},
	{
		id: 5,
		title: 'Projeto em desenvolvimento: Sistema de gestão de manutenção veicular',
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
	rightLists: ['TS', 'Next.js', 'C#'],
};

export const projectsHeadingTitle = 'Alguns dos meus ';
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

export const workHeadingTitle = 'Minhas ';
export const workHeadingHighlight = 'experinências profissionais';

export const workExperience = [
	{
		id: 1,
		title: 'System Support Engineer - Thoughtworks',
		desc: 'Trabalho com suporte técnico e desenvolvimento de soluções para garantir a eficiência dos sistemas de TI dos clientes. AWS, Kubernetes, Docker, Linux, SQL, Java, Prometheus, Grafana.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
	{
		id: 2,
		title: 'Desenvolvedora Web Full Stack - Banco do Brasil',
		desc: 'Trabalhei no desenvolvimento da plataforma web interna do setor de Consórcios, utiizando React.js, JavaScript, Java, Spring Boot e PostgreSQL',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 4,
		title: 'Desenvolvedora Frontend Freelance',
		desc: 'Desenvolvi um sistema de gerenciamento de trabalhadores utilizando TypeScript e Next.js, implementando funcionalidades de cadastro, controle e monitoramento de colaboradores',
		className: 'md:col-span-2',
		thumbnail: '/exp3.svg',
	},
	{
		id: 3,
		title: 'Desenvolvedora de Chatbots - KRMV Gestão e Desenvolvimento',
		desc: 'Projetei e desenvolvi fluxogramas para robôs de WhatsApp, criando estratégias de interação eficazes, otimizando a comunicação e a eficiência no atendimento',
		className: 'md:col-span-2',
		thumbnail: '/exp2.svg',
	},
];

export const approachHeading = 'Minha ';
export const approachHeadingHighlight = 'abordagem';

export const approachs = [
	{
		id: 1,
		order: 'Fase 1',
		title: 'Planejamento e Estratégia',
		desc: 'Definimos juntos a visão estratégica do projeto, mapeando objetivos, público-alvo e funcionalidades essenciais. Criamos um plano detalhado de arquitetura, experiência do usuário e requisitos técnicos para garantir um resultado excepcional.',
		className: 'bg-emerald-900',
		animationSpeed: 5.1,
		colors: [[0, 255, 255]],
	},
	{
		id: 2,
		order: 'Fase 2',
		title: 'Desenvolvimento e Atualização de Progresso',
		desc: 'Transformo o planejamento em realidade através de código limpo e eficiente. Com atualizações regulares sobre o progresso, mantenho total transparência durante todo o processo de desenvolvimento, garantindo que suas expectativas sejam atendidas.',
		className: 'bg-pink-900',
		animationSpeed: 3,
		colors: [
			[255, 166, 158],
			[221, 255, 247],
		],
	},
	{
		id: 3,
		order: 'Fase 3',
		title: 'Entrega e Lançamento',
		desc: 'Executo uma série rigorosa de testes de qualidade e otimizações finais para garantir um produto impecável. Ofereço suporte completo durante o lançamento e período inicial de operação, assegurando uma transição suave para seu novo projeto.',
		className: 'bg-sky-600',
		animationSpeed: 3,
		colors: [[125, 211, 252]],
	},
];

export const footerHeadingP1 = 'Pronto para levar';
export const footerHighlight = ' suas ideias ';
export const footerHeadingP2 = 'para o próximo nível?';
export const footerTxt = 'Entre em contato comigo agora e vamos discutir como posso te ajudar a atingir seus objetivos';
export const footerTxtBtn = 'Vamos conversar!';

export const socialMedia = [
	{ id: 1, img: '/git.svg', link: 'https://github.com/GabrielaTiago' },
	{ id: 2, img: '/link.svg', link: 'https://www.linkedin.com/in/gabrielatiago/' },
];

export const contactHeading = 'Eu tenho o que você precisa!';
export const contactPhone = '+55 62 99176-9161';
export const contactAddress = 'Brasília, DF, Brasil';
