import { ExperienceProps, ExperiencesProps } from './types';

export function Experience({ description }: ExperienceProps) {
    return (
      <div>
        <p>{description}</p>
      </div>
    )
  }

  export default function Experiences(props: ExperiencesProps) {
    const { experienceOne, experienceTwo } = props;
    return (
      <div>
        <h2>These are my following experiences:</h2>
        <ul>
            <li>
                <Experience description={experienceOne} />
            </li>
            <li>
                <Experience description ={experienceTwo}/>
            </li>
        </ul>
      </div>
    )
  }