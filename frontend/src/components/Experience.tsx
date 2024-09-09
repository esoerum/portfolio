import { ExperienceProps, ExperiencesProps } from './types';

export function Experience({ description }: ExperienceProps) {
    return (
      <div>
        <p>{description}</p>
      </div>
    )
  }

  export default function Experiences({ experienceOne, experienceTwo, description}: ExperiencesProps) {
    return (
      <div>
        <h2>These are my following experiences:</h2>
        <ul>
            <li>
                <Experience description={experienceOne} />
            </li>
            <p>{description}</p>
            <li>
                <Experience description ={experienceTwo}/>
            </li>
            <p>{description}</p>
        </ul>
      </div>
    )
  }