import './style.css'

//Definerer type for prosjekter
type Project = {
    title: string,
    category: string,
    description: string,
    url: string
}

// Funksjon for å legge til prosjekter i HTML
const addProjectsToHTML = (projects: Project[]) => {
    const projectList = document.getElementById('project-list');
    if (!projectList) {
        return;
    }
    //Tømmer eksiterende prosjekter
    projectList.innerHTML = '';

    //Legger til prosjekter
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Category:</strong> ${project.category}</p>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">Se prosjekt</a>
        `;
        projectList.appendChild(projectElement);
    });
};

// Function to fetch projects from the server
const fetchProjectsFromServer = async (): Promise<Project[]> => {
    try {
        const response = await fetch('https://localhost:3999/myprojects.json');
        
        // Log the response to inspect it
        console.log('Response:', response);

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

fetchProjectsFromServer().then(projects => {
    console.log(projects);
    addProjectsToHTML(projects);
});