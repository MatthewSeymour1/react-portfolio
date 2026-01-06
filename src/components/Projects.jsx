import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'motion/react';

export default function Projects() {
  const [projects] = useState(projectsJSON);

  const projectCards = projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ));

    return (
    <section id="projects" className="py-20 sm:pt-32 sm:pb-40">
      <div className="space-y-10">
        <motion.div className="space-y-6 sm:space-y-8 max-w-2xl" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1}} transition={{duration: 1}} >
          <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Projects I have worked on.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {projectCards}
        </div>
      </div>
    </section>
    )
};