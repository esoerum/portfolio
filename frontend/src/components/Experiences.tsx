import { ExperiencesProps, ExperienceProps } from './types';
import Experience from './Experience';

  export default function Experiences(props: ExperiencesProps) {
    const { experiences } = props;
    return (
      <section>
        <h2>These are my following experiences:</h2>
        <ul>
          {experiences.map((experience: ExperienceProps) => (
            <li><Experience key={experience.id} description={experience.description}/></li>
          ))}
        </ul>
      </section>
    )
  }