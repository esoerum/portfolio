import './style.css'

//Definerer type for prosjekter
type Project = {
    title: string,
    category: string,
    description: string,
    url: string
}

//Funksjon for å hente ut prosjekter fra JSON-fil
const fetchProjectsFromJsonFile = async () => {
    const response = await fetch('./myprojects.json');
    const projects: Project[] = await response.json();
    return projects;
}

fetchProjectsFromJsonFile().then(projects => {
    console.log(projects);
    //Legge til logikk for å håndtere prosjektene
});
//Funksjon for å legge til prosjekter i HTML

