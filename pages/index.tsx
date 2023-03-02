import type { GetStaticProps } from "next";
import {
  About,
  Contact,
  Education,
  Header,
  Hero,
  Projects,
  Skills,
} from "../components";
import {
  IEducation,
  IPageInfo,
  IProject,
  ISkill,
  ISocial,
} from "../models/sanity";
import {
  fetchEducation,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils";

type Props = {
  pageInfo: IPageInfo;
  education: IEducation[];
  skills: ISkill[];
  projects: IProject[];
  socials: ISocial[];
};

const Home = ({ pageInfo, education, skills, projects, socials }: Props) => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="education" className="snap-center">
        <Education education={education} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: IPageInfo = await fetchPageInfo();
  const education: IEducation[] = await fetchEducation();
  const skills: ISkill[] = await fetchSkills();
  const projects: IProject[] = await fetchProjects();
  const socials: ISocial[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      education,
      skills,
      projects,
      socials,
    },
    revalidate: 120,
  };
};
