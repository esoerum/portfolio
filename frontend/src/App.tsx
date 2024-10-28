import "/src/styles/App.css";
import ProjectsPage from "./features/projects/pages/index.tsx";
import { IntroPage } from "./features/intro/pages/index.tsx";
import Layout from "./components/Layout";




function App() {
	return (
		<Layout>
			<IntroPage />
			<ProjectsPage />
		</Layout>
	);
}

export default App;
