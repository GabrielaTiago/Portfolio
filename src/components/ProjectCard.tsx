import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';

const languageColors: { [key: string]: string } = {
	JavaScript: '#f1e05a',
	TypeScript: '#3178c6',
	Python: '#3572A5',
	Java: '#b07219',
	Ruby: '#701516',
	PHP: '#4F5D95',
	'C++': '#f34b7d',
	C: '#555555',
	'C#': '#178600',
	Go: '#00ADD8',
	Rust: '#dea584',
	Swift: '#ffac45',
	Kotlin: '#F18E33',
	Dart: '#00B4AB',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Shell: '#89e051',
	Lua: '#000080',
	Vue: '#41b883',
	React: '#61dafb',
};

function getLanguageColor(language: string | null): string {
	if (!language) return '#6e7681'; // default color
	return languageColors[language] || '#6e7681'; // default gray if language not in map
}

interface ProjectCardProps {
	name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	topics: string[];
	html_url: string;
}

export function ProjectCard({ name, description, stargazers_count, forks_count, language, topics, html_url }: Readonly<ProjectCardProps>) {
	return (
		<Card
			className='group relative p-6 hover:bg-card/80 transition-all rounded-3xl border-white/[0.1] hover:shadow-xl duration-200 shadow-input dark:shadow-none'
			style={{
				background: 'rgb(4,7,29)',
				backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
			}}
		>
			<a href={html_url} target='_blank' rel='noopener noreferrer' className='block'>
				<span className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg bg-card/50 lg:block' />
				<div className='relative z-10 space-y-4'>
					<div className='flex items-start justify-between gap-4'>
						<div className='flex-1 min-w-0'>
							<h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2'>
								{name}
								<FiExternalLink className='w-4 h-4 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all' />
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{description}</p>
						</div>
					</div>

					<div className='flex items-center gap-4 text-sm text-muted-foreground'>
						<div className='flex items-center gap-1.5'>
							<span className='w-3 h-3 rounded-full' style={{ backgroundColor: getLanguageColor(language) }} />
							<span>{language}</span>
						</div>
						<div className='flex items-center gap-1.5'>
							<FiStar className='w-4 h-4' />
							<span>{stargazers_count.toLocaleString()}</span>
						</div>
						<div className='flex items-center gap-1.5'>
							<FiGitBranch className='w-4 h-4' />
							<span>{forks_count.toLocaleString()}</span>
						</div>
					</div>

					<div className='flex flex-wrap gap-2'>
						{topics.map((topic: string) => (
							<Badge key={topic} variant='secondary' className='bg-primary/10 text-primary hover:bg-primary/20 text-xs'>
								{topic}
							</Badge>
						))}
					</div>
				</div>
			</a>
		</Card>
	);
}
