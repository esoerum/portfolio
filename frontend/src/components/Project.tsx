import { ProjectProps } from './types';

export default function Projects(props: ProjectProps) {
    const { title, category, description, url } = props
    return (
       <div>
           <h2>{title}</h2>
           <p>{category}</p>
           <p>{description}</p>
           <a href={url}>Visit Project</a>
       </div>
    )
}