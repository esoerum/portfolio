import { useProjects } from "../hooks/useProjects";
import Projects from "../components/Projects";
import CreateProjectForm from "../components/CreateProjectForm";

const ProjectsPage = () => {
	const { projectsList, handleOnCreateProjectButtonClicked, handleOnRemoveProjectButtonClicked } = useProjects();
    
    return (
        <section className="my-projects">
        <Projects projects={projectsList} onRemoveProjectButtonClicked={handleOnRemoveProjectButtonClicked} />
		<CreateProjectForm onCreateProjectButtonClicked={handleOnCreateProjectButtonClicked} />
        </section>
    )
}

export default ProjectsPage;