import ContactForm from './ContactForm';
import { ContactProps } from './types'
import { useState } from 'react';

 export function Contact(props: ContactProps) {
  const { email } = props;
  const [contactData, setContactData] = useState<{ name: string; text: string } | null>(null);

  const handleOnConctactButtonClicked = (name: string, text: string) => {
    // const contactMessage = `Hey ${name}Thank you for your message! You wrote: ${text}`;
    // alert(contactMessage);
    setContactData({name: name, text: text});
  }

  const handleOnResetButtonClicked = () => {
    setContactData(null);
  }
  
    return (
      <div>
        <h3>Contact</h3>
        <button onClick={() => alert("Contact me on: "+ email) }>Display E-mail</button>
        <ContactForm onContactButtonClicked={handleOnConctactButtonClicked}/>
        <pre>{contactData ? JSON.stringify(contactData, null, 2) : "No form data submitted yet"}</pre>
        <button onClick={handleOnResetButtonClicked}>Reset data</button>
      </div>
    )
  }