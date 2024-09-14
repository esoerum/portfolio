import { ExperiencesProps } from './types';
import Experience from './Experience';



  export default function Experiences(props: ExperiencesProps) {
    const { experienceOne, experienceTwo } = props;
    return (
      <section>
        <h2>These are my following experiences:</h2>
        <ul>
            <li>
                <Experience description={experienceOne} />
            </li>
            <li>
                <Experience description ={experienceTwo}/>
            </li>
        </ul>
      </section>
    )
  }