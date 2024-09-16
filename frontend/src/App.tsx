import '/src/styles/App.css'
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import {Contact} from "./components/Contact";
import Project from "./components/Project";
import { ProjectProps } from './components/types';
import Projects from './components/Projects';

function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experiences = [
    { id: 1, description: 'Worked as a developer at Example Company' },
    { id: 2, description: 'Worked as a developer at Example Company' },
    { id: 3, description: 'Worked as a developer at Example Company' },
  ]
  const email = 'student@hiof.no'
  //Project-example
  const projects: ProjectProps[] = [
    { title: "Test", category: "Web-design", description: "test", url:"www.example.com"}
  ]
  // const projectTitle = 'Project 1';
  // const projectTitleTwo = "Project 2";
  // const projectTitleThree = "Project 3";
  // const projectTitleFour = "Project 4";
  // const projectCategory = 'Web-design';
  // const projectDescription = 'React project';
  // const projectUrl = 'https://www.example.com';
  

  return (
    <>
      <Header student={student} degree={degree} points={points} />
      <Experiences experiences= {experiences}/>
      <Contact email={email} />
      <Projects projects={projects}/>
    </>
  )
}

export default App

