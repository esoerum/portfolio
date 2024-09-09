import '/styles/App.css'
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

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} description='Funny work' />
      <Contact email={email} />
      <Project title='Project 1' category='Web-development' description='Web-design' url='https://www.example.com' />
    </div>
  )
}

export default App

