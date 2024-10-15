import { ofetch } from "ofetch";
import { useEffect, useState } from "react";
import { ProjectProps } from "../components/Project";
import Projects from "../components/Projects";
import CreateProjectForm from "../components/CreateProjectForm";

const ProjectsPage = () => {
    const [projectsList, setProjectsList] = useState<ProjectProps[]>([]);
	//Initializing the data from the server
	//Endre feilhåndtering til å bruke state eller try/catch
	const initializeData = () => {
		console.log("fetching data");
		ofetch("http://localhost:3000/projects")
			.then((projects: ProjectProps[]) => {
				console.log("data fetched");
				setProjectsList(projects);
				console.log("data initialized");
			})
			.catch((error) => {
				console.error("Error fetching projects:", error);
			});
	};
	useEffect(() => {
		initializeData();
	}, []);

	//Handling the creation of a new project
	const handleOnCreateProjectButtonClicked = (
		title: string,
		category: string,
		description: string,
		url: string
	  ) => {
		console.log("Project created: ", title, category, description, url);
		const project = {
		  id: crypto.randomUUID(),
		  title: title,
		  category: category,
		  description: description,
		  url: url,
		};
		ofetch("http://localhost:3000/projects", {
		  method: "PUT",
		  body: JSON.stringify(project),
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		  .then((response: { message: string; project: ProjectProps }) => {
			console.log(response.message);
			initializeData();
		  })
		  .catch((error) => {
			console.error("Error creating project:", error);
		  });
	  };
	//Handling the removal of a project
	const handleOnRemoveProjectButtonClicked = (id: string) => {
		console.log("Project removed: ", id);
		ofetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" })
		  .then((response: { message: string }) => {
			console.log(response.message);
			setProjectsList((projectsList) =>
			  projectsList.filter((project) => project.id !== id)
			);
		  })
		  .catch((error) => {
			console.error("Error deleting project:", error);
		  });
	};
    return (
        <>
        <Projects projects={projectsList} onRemoveProjectButtonClicked={handleOnRemoveProjectButtonClicked}>
        </Projects>
        <CreateProjectForm
				onCreateProjectButtonClicked={
					handleOnCreateProjectButtonClicked
				}
			/>
        </>
    )
}

export default ProjectsPage;