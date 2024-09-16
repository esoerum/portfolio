import '/src/styles/App.css'
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { Contact } from "./components/Contact";
// import Project from "./components/Project";
import { ExperienceProps, ProjectProps } from './components/types';
import Projects from './components/Projects';

function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experiences: ExperienceProps[] = [
    { id: 1, description: 'Creating frameworks with .NET and C#' },
    { id: 2, description: 'Javascript / Typescript and React' },
    { id: 3, description: 'Backend development with Java' },
    { id: 4, description: 'Python' },
  ]
  const email = 'student@hiof.no'
  //Project-example - Ended being a list for use with mapping
  const projects: ProjectProps[] = [
    { title: "Prosjekt 1", category: "Javascript", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna massa, commodo ac nisi id, tristique faucibus ipsum. Morbi justo est, mollis nec risus sit amet, rhoncus blandit risus", url: "www.example.com" },
    { title: "Prosjekt 2", category: "React", description: "Ut semper odio vel sem congue volutpat. Mauris tempus eget felis a cursus. Nulla congue at erat efficitur egestas. Curabitur non massa massa. Sed tempus pharetra tortor vitae dapibus.", url: "www.example.com" },
    { title: "Prosjekt 3", category: "Typescript", description: "Etiam nisl mi, convallis varius turpis eu, pharetra faucibus neque. Sed sit amet turpis elementum mi viverra bibendum.", url: "www.example.com" },
    { title: "Prosjekt 4", category: "Python", description: "Aenean vulputate, ligula at porttitor congue, neque sapien gravida tortor, in venenatis augue risus et metus. Donec vestibulum urna in risus tincidunt, id blandit sapien tempus.", url: "www.example.com" },

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
      <Experiences experiences={experiences}>
        {/* <p>Children element if needed for some reason</p> */}
      </Experiences>
      <Contact email={email} />
      <Projects projects={projects}>
        {/* <p>Children element if needed for some reason</p> */}
      </Projects>
    </>
  )
}

export default App

