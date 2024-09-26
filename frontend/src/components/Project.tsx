import { ProjectProps } from './types';
import type { PropsWithChildren } from "react";

export default function Project(props: Readonly<PropsWithChildren<ProjectProps>>) {
    const { title, category, description, url, children } = props
    return (
       <article className='project'>
           <h3>{title}</h3>
           <p>Category: {category}</p>
           <p>{description}</p>
           {url ? <a href={url}>View Project</a> : null}
           {children}
       </article>
    )
}