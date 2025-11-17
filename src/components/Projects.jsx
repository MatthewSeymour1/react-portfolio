import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import ProjectCard from './ui/project-card';

export default function Projects() {

    const [projects] = useState(projectsJSON);

    return(
        <section id="Projects" className="py-20 sm:py-32 ">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

                    <div className="space-y-6">
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        Projects I have worked on.
                        </p>

                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}
