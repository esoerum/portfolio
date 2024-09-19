export type ContactFormProps = {
    name: string;
    text: string;
}

const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
}


export default function ContactForm(props: ContactFormProps) {
    const { name, text } = props;
    return (
        <section>
            <form onSubmit={sendMessage} className="project-form">
                <label htmlFor="name">Name:
                <input type="text" id="name" name="name" value={name} placeholder="John Travolta" />
                </label>
                <label htmlFor="text">Message:
                <textarea id="text" name="text" value={text} placeholder="Your message here"></textarea>
                <button type="submit">Send</button>
                </label>
            </form>
        </section>
    )

}