import Project from './Project';
import { ProjectProps, ProjectsProps } from './types';
import type { PropsWithChildren } from "react";

export default function Projects(props: Readonly<PropsWithChildren<ProjectsProps>>) {
    const { projects = [], children } = props;
    return (
        <section>
            <h2>Projects</h2>
            {children}
            <ul className="project-ul">
                {projects.map((project: ProjectProps) => (
                    <li key={project.id || project.title}><Project id={project.id} title={project.title} category={project.category} description={project.description} url={project.url} /></li>
                ))}
            </ul>
        </section>
    )
}