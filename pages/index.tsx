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
  Education as TEducation,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../Interfaces/sanityInterfaces";
import {
  fetchEducation,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils";

type Props = {
  pageInfo: PageInfo;
  education: TEducation[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  education,
  skills,
  projects,
  socials,
}: Props) => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
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
  const pageInfo: PageInfo = await fetchPageInfo();
  const education: TEducation[] = await fetchEducation();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      education,
      skills,
      projects,
      socials,
    },
    revalidate: 120
  };
};
