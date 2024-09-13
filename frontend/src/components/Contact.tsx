import { ContactProps } from './types'

 export function Contact(props: ContactProps) {
  const { email } = props;
    return (
      <div>
        <p>Email: {email}</p>
      </div>
    )
  }