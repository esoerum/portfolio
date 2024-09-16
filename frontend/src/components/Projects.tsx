import Project from './Project';
import { ProjectProps, ProjectsProps } from './types';

export default function Projects (props: ProjectsProps) {
    const { projects = [] } = props;
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map((project: ProjectProps) => (
                    <Project key={project.id} title={project.title} category={project.category} description={project.description} url={project.url} />
                ))}
            </ul>
        </section>
    )
}