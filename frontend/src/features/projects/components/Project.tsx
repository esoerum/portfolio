import type { PropsWithChildren } from "react";

export type ProjectProps = {
    id: string;
    title: string;
    category: string;
    description: string;
    url?: string;
    createdAt?: Date;
}
export type ProjectsProps = {
    projects: ProjectProps[];
    onRemoveProjectButtonClicked: (id: string) => void;
}

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