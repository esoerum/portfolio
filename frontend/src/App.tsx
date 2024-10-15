import "/src/styles/App.css";
import IntroHeader from "./components/IntroHeader.tsx";
import Experiences from "./features/experiences/components/Experiences.tsx";
import { Contact } from "./features/intro/components/Contact.tsx";
import { ProjectProps } from "./features/projects/components/Project.tsx";
import { ExperienceProps } from "./features/experiences/components/Experience.tsx";
import Projects from "./features/projects/components/Projects.tsx";
import CreateProjectForm from "./features/projects/components/CreateProjectForm.tsx";
import { useEffect, useState } from "react";
import { ofetch } from "ofetch";

//Flytte ut hardkodede data til en egen fil, config fil eller lignende
const student = "Espen Sørum";
const degree = "Bachelor in Informatics";
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
		<> {/* Eventuelt flytte ut header, experiences og contact. Disse gjenbrukes ikke, kanskje de skal pakkes inn i en intro-komponent*/}
			<IntroHeader student={student} degree={degree} points={points} />
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
