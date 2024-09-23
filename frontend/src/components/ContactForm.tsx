import { useState } from "react";

export type ContactFormProps = {
	onContactButtonClicked: (name: string, text: string) => void;
};

export default function ContactForm(props: ContactFormProps) {
	const { onContactButtonClicked } = props;
	const [name, setName] = useState("");
	const [text, setText] = useState("");

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!name || !text) return;
		onContactButtonClicked(name, text);
		setName("");
		setText("");
	};

	return (
		<section>
			<form onSubmit={sendMessage} className="project-form">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					placeholder="John Travolta"
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="text">Message:</label>
				<textarea
					id="text"
					name="text"
					value={text}
					placeholder="Your message here"
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<button type="submit">Send</button>
			</form>
		</section>
	);
}