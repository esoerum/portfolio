import { ExperienceProps } from './Experience';
import Experience from './Experience';
import type { PropsWithChildren } from "react";

export type ExperiencesProps = {
  experiences : ExperienceProps[];
}
  export default function Experiences(props: Readonly<PropsWithChildren<ExperiencesProps>>) {
    const { experiences, children } = props;
    return (
      <section>
        <h3>These are my following experiences:</h3>
        {children}
        {experiences.length === 0 ? (
          <p>No experiences available.</p>
        ) : (
        <ul>
          {experiences.map((experience: ExperienceProps) => (
            <li key={experience.id}><Experience description={experience.description}/></li>
          ))}
        </ul>
        )}
      </section>
        
    )
  }