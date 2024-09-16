import { ExperienceProps } from './types';

export default function Experience(props: ExperienceProps) {
    const { id, description } = props;
      return (
        <ul>
          <li>{description}</li>
        </ul>
      )
    }