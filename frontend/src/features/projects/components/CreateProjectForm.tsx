import { useState } from 'react';

export type CreateProjectFormProps = {
    onCreateProjectButtonClicked: (title: string, category: string, description: string, url: string, isPublic: boolean) => void;
};

export default function CreateProjectForm(props: CreateProjectFormProps) {
    const { onCreateProjectButtonClicked } = props;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const createProject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !category || !description) return;
        onCreateProjectButtonClicked(title, category, description, url, isPublic);
        setTitle("");
        setCategory("");
        setDescription("");
        setUrl("");
        setIsPublic(false);
    };

    return (
        <section>
            <form onSubmit={createProject} className="project-form">
                <h2>Add project</h2>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    placeholder="Example: Single-page-application (SPA)"
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label htmlFor="category">Category:</label>
                <input 
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    placeholder="Example: Javascript"
                    onChange= {(e) => setCategory(e.target.value)}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Example: This project shows you the benefits of..."
                    onChange= {(e) => setDescription(e.target.value)}
                ></textarea>
                <label htmlFor="url">Link:</label>
                <input 
                    type="string"
                    id="url"
                    name="url"
                    value={url}
                    placeholder="http://www.example.com"
                    onChange= {(e) => setUrl(e.target.value)}
                />
                 <div className="toggle-wrapper">
    <label htmlFor="public">
        Make project public:
        <input
            type="checkbox"
            id="public"
            name="public"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
        />
        <div className="toggle-switch"></div>
    </label>
</div>
                <button type="submit" id="form-button">Submit project</button>
            </form>
        </section>
    );
}