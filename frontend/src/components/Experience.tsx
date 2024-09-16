import { ExperienceProps } from './types';

export default function Experience(props: ExperienceProps) {
    const { description } = props;
      return (
        <>
          <p>{description}</p>
          </>
      )
    }