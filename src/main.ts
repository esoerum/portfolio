import './style.css'

//Definerer type for prosjekter
type projects = {
    title: string,
    category: string,
    description: string,
    url: URL
}

//Funksjon for å hente ut prosjekter fra JSON-fil
const fetchProjectsFromJsonFile = async () => {
    const response = await ('./myprojects.json')
    
}

//Funksjon for å legge til prosjekter i HTML
