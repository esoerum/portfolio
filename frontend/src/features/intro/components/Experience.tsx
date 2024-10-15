export type ExperienceProps = {
  id?: number;
  description: string;
}
export default function Experience(props: ExperienceProps) {
    const { description } = props;
      return (
        <>
          <p>{description}</p>
          </>
      )
    }