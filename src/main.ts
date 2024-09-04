import './style.css'

//Definerer type for prosjekter
type Project = {
    title: string,
    category: string,
    description: string,
    url: string
}

//Funksjon for å hente ut prosjekter fra JSON-fil
// const fetchProjectsFromJsonFile = async () => {
//     const response = await ('./myprojects.json');
//     const projects: Project[] = await response.json();
//     return projects;
    
// }

//Funksjon for å legge til prosjekter i HTML
