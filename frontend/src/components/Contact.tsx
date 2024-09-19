import { ContactProps } from './types'



 export function Contact(props: ContactProps) {
  const { email } = props;
  
    return (
      <div>
        <h3>Contact</h3>
        <button onClick={() => alert("Contact me on: "+ email) }>Display E-mail</button>
      </div>
    )
  }