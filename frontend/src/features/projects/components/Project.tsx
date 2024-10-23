import type { PropsWithChildren } from "react";
import { FaLock, FaUnlock } from 'react-icons/fa';

export type ProjectProps = {
    id: string;
    title: string;
    category: string;
    description: string;
    url?: string;
    createdAt?: Date;
    isPublicProject?: boolean;
}
export type ProjectsProps = {
    projects: ProjectProps[];
    onRemoveProjectButtonClicked: (id: string) => void;
}

export default function Project(props: Readonly<PropsWithChildren<ProjectProps>>) {
    const { title, category, description, url, isPublicProject, children } = props
    return (
       <article className='project'>
        <div className="project-visibility">
                {isPublicProject ? (
                    <>
                        <FaUnlock className="icon public" aria-label="Public project" />
                        <span>Public project</span>
                    </>
                ) : (
                    <>
                        <FaLock className="icon private" aria-label="Private project" />
                        <span>Private project</span>
                    </>
                )}
            </div>
           <h3>{title}</h3>
           <p>Category: {category}</p>
           <p>{description}</p>
           {url ? <a href={url}>View Project</a> : null}
           {children}
       </article>
    )
}