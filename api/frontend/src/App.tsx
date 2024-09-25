import "/src/styles/App.css";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { Contact } from "./components/Contact";
// import Project from "./components/Project";
import { ExperienceProps, ProjectProps } from "./components/types";
import Projects from "./components/Projects";
import CreateProjectForm from "./components/CreateProjectForm";
import { useState } from "react";

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
//Project-example - Ended being a list for use with mapping
const projects: ProjectProps[] = [
	{
		id: 1,
		title: "Prosjekt 1",
		category: "Javascript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna massa, commodo ac nisi id, tristique faucibus ipsum. Morbi justo est, mollis nec risus sit amet, rhoncus blandit risus",
		url: "www.example.com",
	},
	{
		id: 2,
		title: "Prosjekt 2",
		category: "React",
		description:
			"Ut semper odio vel sem congue volutpat. Mauris tempus eget felis a cursus. Nulla congue at erat efficitur egestas. Curabitur non massa massa. Sed tempus pharetra tortor vitae dapibus.",
		url: "www.example.com",
	},
	{
		id: 3,
		title: "Prosjekt 3",
		category: "Typescript",
		description:
			"Etiam nisl mi, convallis varius turpis eu, pharetra faucibus neque. Sed sit amet turpis elementum mi viverra bibendum.",
		url: "www.example.com",
	},
	{
		id: 4,
		title: "Prosjekt 4",
		category: "Python",
		description:
			"Aenean vulputate, ligula at porttitor congue, neque sapien gravida tortor, in venenatis augue risus et metus. Donec vestibulum urna in risus tincidunt, id blandit sapien tempus.",
		url: "www.example.com",
	},
	{
	id: 5,
	title: "Prosjekt 5",
	category: "Typescript",
	description:
		"Aenean vulputate, ligula at porttitor congue, neque sapien gravida tortor, in venenatis augue risus et metus. Donec vestibulum urna in risus tincidunt, id blandit sapien tempus.",
	url: "www.example.com",
	}

];

function App() {
	const [projectsList, setProjectsList] = useState(projects);

	const handleOnCreateProjectButtonClicked = (
		title: string,
		category: string,
		description: string,
		url: string
	) => {
		console.log("Project created: ", title, category, description, url);
		const project = {
			id: projectsList.length + 1,
			title: title,
			category: category,
			description: description,
			url: url,
		};
		setProjectsList((projectsList) => [...projectsList, project]);
	};
	const handleOnRemoveProjectButtonClicked = (id: number) => {
		console.log("Project removed: ", id);
		const newProjectsList = projectsList.filter(
			(project) => project.id !== id
		);
		setProjectsList(newProjectsList);
	};
	return (
		<>
			<Header student={student} degree={degree} points={points} />
			<Experiences experiences={experiences}>
				{/* <p>Children element if needed later</p> */}
			</Experiences>
			<Contact email={email} />
			<Projects projects={projectsList} onRemoveProjectButtonClicked={handleOnRemoveProjectButtonClicked}>
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