import '/src/styles/App.css'
import Header from "./components/Header";
import Experiences from "./components/Experience";
import {Contact} from "./components/Contact";
import Project from "./components/Project";

function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'student@hiof.no'
  //Project-example
  const projectTitle = 'Project 1';
  const projectCategory = 'Web-development';
  const projectDescription = 'Web-design';
  const projectUrl = 'https://www.example.com';

  return (
    <>
      <Header student={student} degree={degree} points={points} />
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} description='Funny work' />
      <Contact email={email} />
      <Project title={projectTitle} category={projectCategory} description={projectDescription} url={projectUrl} />
    </>
  )
}

export default App

