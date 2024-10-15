import "/src/styles/App.css";
import ProjectsPage from "./features/projects/pages/index.tsx";
import { IntroPage } from "./features/intro/pages/index.tsx";



function App() {
	return (
		<> 
			<IntroPage />
			<ProjectsPage />
		</>
	);
}

export default App;
