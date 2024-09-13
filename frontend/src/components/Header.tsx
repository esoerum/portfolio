import { HeaderProps } from "./types"
  export default function Header(props: HeaderProps) {
    const { student, degree, points } = props;
    return (
      <header>
        <h1>{student}</h1>
        <p>{degree} - {points} points</p>
      </header>
    )
  }