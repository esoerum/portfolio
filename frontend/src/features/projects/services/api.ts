import { ofetch } from "ofetch";
import { ProjectProps } from "../components/Project";
import { endpoints } from "../../../config/urls";
// import { projectSchema, projectsSchema } from "../helpers/validate";

//API service for handling projects
const url = endpoints.projects;
//Fetching the projects from the server
export const fetchProjects = async (): Promise<ProjectProps[]> => {
    const projects = await ofetch(url);
    return projects;
};

//Creating a new project
export const createProject = async (project: ProjectProps) => {
    return ofetch(url, {
        method: "PUT",
        body: JSON.stringify(project),
        headers: {
            "Content-Type": "application/json",
        },  
    });
};

//Removing a project
export const deleteProject = async (id: string) => {
    return ofetch(`${url}/${id}`, {
        method: "DELETE",
    });
}