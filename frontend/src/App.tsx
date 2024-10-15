import "/src/styles/App.css";
import IntroHeader from "./features/intro/components/IntroHeader.tsx";
import Experiences from "./features/experiences/components/Experiences.tsx";
import { Contact } from "./features/intro/components/Contact.tsx";
import { ExperienceProps } from "./features/experiences/components/Experience.tsx";
import ProjectsPage from "./features/projects/pages/index.tsx";

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
	return (
		<> {/* Eventuelt flytte ut header, experiences og contact. Disse gjenbrukes ikke, kanskje de skal pakkes inn i en intro-komponent*/}
			<IntroHeader student={student} degree={degree} points={points} />
			<Experiences experiences={experiences}>
				{/* <p>Children element if needed later</p> */}
			</Experiences>
			<Contact email={email} />
			<ProjectsPage />
		</>
	);
}

export default App;
