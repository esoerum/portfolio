import './style.css'
import { Project } from './types';


// Function to render projects to the DOM
const renderProjects = (projects: Project[]) => {
    const projectList = document.getElementById('project-list');
    if (!projectList) {
        return;
    }
    //Empty the list
    projectList.innerHTML = '';

    //Add each project to the list
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>Category: ${project.category}</p>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View project</a>
        `;
        projectList.appendChild(projectElement);
    });
}

// Function to fetch projects from the server
const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch('http://localhost:3999/projects');

        // Check if the response is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const projects: Project[] = await response.json();
            return projects;
        } else {
            console.error('Error: Expected JSON response');
            return [];
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

fetchProjects().then(projects => {
    renderProjects(projects);
});

// Function to add a project to the server
const addProject = async (project: Project): Promise<any> | never => {
    console.log(JSON.stringify(project));
    let response;
    try {
        response = await fetch('http://localhost:3999/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });
        return response.json();
    } catch (error) {
        console.error('Error adding project:', error);
    }
};

//Event listener for the form
document.querySelector("form")?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const project: Project = {
        title: (document.querySelector("input[name='title']") as HTMLInputElement).value,
        category: (document.querySelector("input[name='category']") as HTMLInputElement).value,
        description: (document.querySelector("textarea[name='description']") as HTMLTextAreaElement).value,
        url: (document.querySelector("input[name='url']") as HTMLInputElement).value
    };
    console.log(project);
    let response = await addProject(project);
    fetchProjects().then(projects => {
        renderProjects(projects);
    });
});

//Adding http:// to the url input field
const url = document.querySelector<HTMLInputElement>("#url")!;
url.addEventListener("focus", () => {
    if (url.innerHTML.length === 0)
        url.value = "http://";
}
);