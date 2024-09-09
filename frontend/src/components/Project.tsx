import { ProjectProps } from './types';

export default function Projects({ title, category, description, url }: ProjectProps) {
    const Project = { title, category, description, url }
    return (
       <div>
           <h1>{Project.title}</h1>
           <p>{Project.category}</p>
           <p>{Project.description}</p>
           <a href={Project.url}>Visit Project</a>
       </div>
    )
}