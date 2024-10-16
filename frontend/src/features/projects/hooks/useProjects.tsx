import { useCallback, useEffect, useState } from "react";
import { ProjectProps } from "../components/Project";
import { fetchProjects, createProject, deleteProject } from "../services/api";

//Custom hook for handling projects
export function useProjects() {
    const [projectsList, setProjectsList] = useState<ProjectProps[]>([]);

    //Initializing the data from the server, fetching the projects
    const initializeData = useCallback(async () => {
        try {
            const projects = await fetchProjects();
            setProjectsList(projects);
            console.log("Fetched projects:", projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
            console.log("Failed to fetch projects");
        }
    }, []);

    useEffect(() => {
        initializeData();
    }, [initializeData]);

    //Handling the creation of a new project
    const handleOnCreateProjectButtonClicked = useCallback(async (
        title: string,
        category: string,
        description: string,
        url: string
    ) => {  
        try {
            const project = {
                id: crypto.randomUUID(),
                title: title,
                category: category,
                description: description,
                url: url,
            };
            const response = await createProject(project);
            console.log("Created project:", response);
            initializeData();
        } catch (error) {
            console.error("Error creating project:", error);
        }
    }, [initializeData]);

    //Handling the removal of a project
    const handleOnRemoveProjectButtonClicked = useCallback(async (id: string) => {
        try {
            const response = await deleteProject(id);
            console.log(response.message);
            setProjectsList((projectsList) =>
                projectsList.filter((project) => project.id !== id)
            );
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    }, []);
    
    return {
        projectsList,
        handleOnCreateProjectButtonClicked,
        handleOnRemoveProjectButtonClicked,
    }

}