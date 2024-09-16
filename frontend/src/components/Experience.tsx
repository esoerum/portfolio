import { ExperienceProps } from './types';
import type { PropsWithChildren } from "react";

export default function Experience(props: Readonly<PropsWithChildren<ExperienceProps>>) {
    const { description, children } = props;
      return (
        <section>
        {children}
          <p>{description}</p>
          </section>
      )
    }