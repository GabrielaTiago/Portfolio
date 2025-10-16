'use client';

import { MagicButton } from '@/components/MagicButton';
import { ProjectCard } from '@/components/ProjectCard';
import { useEffect, useState } from 'react';

interface Repository {
	id: number;
	name: string;
	description: string;
	html_url: string;
	topics: string[];
	language: string;
	stargazers_count: number;
	forks_count: number;
	created_at: string;
	updated_at: string;
}

export default function Projects() {
	const [repos, setRepos] = useState<Repository[]>([]);
	const [originalRepos, setOriginalRepos] = useState<Repository[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeFilter, setActiveFilter] = useState('');

	useEffect(() => {
		async function fetchGithubRepos() {
			try {
				const response = await fetch('https://api.github.com/users/GabrielaTiago/repos');
				const data = await response.json();

				// Filter repos: exclude readme, Portfolio, and ensure they have description
				const filteredRepos = data.filter(
					(repo: Repository) =>
						repo.description &&
						repo.description.trim() !== '' &&
						repo.name !== 'GabrielaTiago' &&
						repo.name !== 'Portfolio'
				);
				// Sort repositories by creation date (oldest first)
				const sortedRepos = filteredRepos.sort(
					(a: Repository, b: Repository) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
				);

				setRepos(sortedRepos);
				setOriginalRepos(sortedRepos);
			} catch (error) {
				console.error('Error fetching repos:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchGithubRepos();
	}, []);

	if (loading) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-white'></div>
			</div>
		);
	}

	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto p-5 lg:p-10 gap-12'>
			<h1 className='mt-10 text-4xl font-bold text-center text-purple'>Meus Projetos no GitHub</h1>

			<section className='text-center flex flex-wrap justify-center gap-6 flex-row'>
				{['Driven', 'Frontend', 'Backend', 'Fullstack', 'Academicos'].map((filter) => (
					<div className='w-fit' key={filter}>
						<MagicButton
							key={filter}
							title={filter}
							icon={null}
							position=''
							handleClick={() => {
								if (filter === activeFilter) {
									setActiveFilter('');
									setRepos(originalRepos);
								} else {
									setActiveFilter(filter);
									const filtered = originalRepos.filter((repo) =>
										repo.topics.some((topic) => topic.toLowerCase() === filter.toLowerCase())
									);
									setRepos(filtered);
								}
							}}
							otherClasses={activeFilter === filter ? 'default ' : 'outline'}
						/>
					</div>
				))}
			</section>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{repos.map((repo) => (
					<ProjectCard
						key={repo.id}
						name={repo.name}
						description={repo.description || 'Sem descrição disponível'}
						topics={repo.topics}
						language={repo.language}
						stargazers_count={repo.stargazers_count}
						forks_count={repo.forks_count}
						html_url={repo.html_url}
					/>
				))}
			</div>
		</main>
	);
}
