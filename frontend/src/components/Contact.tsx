import ContactForm from './ContactForm';
import { ContactProps } from './types'



 export function Contact(props: ContactProps) {
  const { email } = props;

  const handleOnConctactButtonClicked = () => {
    const contactMessage = "Thank you for your message! I will get back to you as soon as possible.";
    return alert(contactMessage);
  }
  
    return (
      <div>
        <h3>Contact</h3>
        <button onClick={() => alert("Contact me on: "+ email) }>Display E-mail</button>
        <ContactForm onContactButtonClicked={handleOnConctactButtonClicked}/>
        <pre></pre>
      </div>
    )
  }