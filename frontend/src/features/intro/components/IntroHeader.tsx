export type IntroHeaderProps = {
  student: string;
  degree: string;
  points: number;
}
  export default function Header(props: IntroHeaderProps) {
    const { student, degree, points } = props;
    return (
      <header>
        <h2>{student}</h2>
        <p>{degree} - {points} points</p>
      </header>
    )
  }