import { ProjectProps } from './types';

export default function Project(props: ProjectProps) {
    const { title, category, description, url } = props
    return (
       <article className='project'>
           <h3>{title}</h3>
           <p>Category: {category}</p>
           <p>{description}</p>
           <a href={url}>View Project</a>
       </article>
    )
}