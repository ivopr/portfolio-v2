import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import Link from "next/link";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  experiences: Experience[];
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

export default function Home({
  experiences,
  pageInfo,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white overflow-y-scroll w-full snap-y snap-mandatory z-0">
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section className="snap-start" id="experience">
        <Experience experiences={experiences} />
      </section>

      {/* Skills */}
      <section className="snap-start" id="skills">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section className="snap-start" id="projects">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section className="snap-start" id="contact">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link
        className="absolute flex items-center justify-center right-10 bg-black/50 p-2 bottom-4 rounded-sm h-10 w-10"
        href="#hero"
      >
        <ChevronDoubleUpIcon className="h-full w-full" />
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const experiences = await fetchExperiences();
    const pageInfo = await fetchPageInfo();
    const projects = await fetchProjects();
    const skills = await fetchSkills();
    const socials = await fetchSocials();

    return {
      props: {
        experiences: experiences ?? [],
        pageInfo: pageInfo ?? {},
        projects: projects ?? [],
        skills: skills ?? [],
        socials: socials ?? [],
      },
      revalidate: process.env.NODE_ENV === "development" ? 5 : 60 * 30,
    };
  } catch {
    return {
      props: {
        experiences: [] as Experience[],
        pageInfo: {} as PageInfo,
        projects: [] as Project[],
        skills: [] as Skill[],
        socials: [] as Social[],
      },
      revalidate: process.env.NODE_ENV === "development" ? 5 : 60 * 30,
    };
  }
};
