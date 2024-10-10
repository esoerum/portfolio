import { HeaderProps } from "./types"
  export default function Header(props: HeaderProps) {
    const { student, degree, points } = props;
    return (
      <header>
        <h2>{student}</h2>
        <p>{degree} - {points} points</p>
      </header>
    )
  }