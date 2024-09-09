import { HeaderProps } from "./types"
  export default function Header(props: HeaderProps) {
    return (
      <header>
        <h1>{props.student}</h1>
        <p>{props.degree} - {props.points} points</p>
      </header>
    )
  }