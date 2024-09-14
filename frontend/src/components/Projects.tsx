import Project from './Project';
import { ProjectProps } from './types';

export default function Projects (props: ProjectProps) {
    const { title, category, description, url } = props;
    return (
        <>
        <Project title={title} category={category} description={description} url={url} />
        </>
    )
}