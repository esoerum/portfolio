import "/src/styles/App.css";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { Contact } from "./components/Contact";
// import Project from "./components/Project";
import { ExperienceProps, ProjectProps } from "./components/types";
import Projects from "./components/Projects";
import CreateProjectForm from "./components/CreateProjectForm";
import { useEffect, useState } from "react";
import { ofetch } from "ofetch";

const student = "Halgeir Geirson";
const degree = "Bachelor IT";
const points = 180;
const experiences: ExperienceProps[] = [
	{ id: 1, description: "Creating frameworks with .NET and C#" },
	{ id: 2, description: "Javascript / Typescript and React" },
	{ id: 3, description: "Backend development with Java" },
	{ id: 4, description: "Python" },
];
const email = "student@hiof.no";

function App() {
	const [projectsList, setProjectsList] = useState<ProjectProps[]>([]);

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
		setProjectsList((projectsList) => [...projectsList, project]);
	};
	const handleOnRemoveProjectButtonClicked = (id: string) => {
		console.log("Project removed: ", id);
		ofetch(`http://localhost:3000/projects/${id}`, {method: "DELETE"})
			.then((response: {message: string}) => {
				console.log(response);
				
				initializeData();
			})
			.catch((error) => {
				console.error("Error deleting project:", error);
			});
	};
	return (
		<>
			<Header student={student} degree={degree} points={points} />
			<Experiences experiences={experiences}>
				{/* <p>Children element if needed later</p> */}
			</Experiences>
			<Contact email={email} />
			<Projects
				projects={projectsList}
				onRemoveProjectButtonClicked={
					handleOnRemoveProjectButtonClicked
				}
			>
				{/* <p>Children element if needed later</p> */}
			</Projects>
			<CreateProjectForm
				onCreateProjectButtonClicked={
					handleOnCreateProjectButtonClicked
				}
			/>
		</>
	);
}

export default App;
