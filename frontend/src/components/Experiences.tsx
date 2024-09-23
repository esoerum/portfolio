import { ExperiencesProps, ExperienceProps } from './types';
import Experience from './Experience';
import type { PropsWithChildren } from "react";

  export default function Experiences(props: Readonly<PropsWithChildren<ExperiencesProps>>) {
    const { experiences, children } = props;
    return (
      <section>
        <h2>These are my following experiences:</h2>
        {children}
        <ul>
          {experiences.map((experience: ExperienceProps) => (
            <li key={experience.id}><Experience description={experience.description}/></li>
          ))}
        </ul>
      </section>
    )
  }