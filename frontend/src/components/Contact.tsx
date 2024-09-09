import { ContactProps } from './types'

 export function Contact({email}: ContactProps) {
    return (
      <div>
        <p>Email: {email}</p>
      </div>
    )
  }