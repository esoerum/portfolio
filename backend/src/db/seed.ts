import { DB } from "./db";
import { readFile } from "fs/promises";
import { Project } from "../features/projects/types";
import { projectsSchema } from "../features/projects/lib/validate";

export const seed = async (db: DB) => {
    const file = await readFile("src/data/projects.json", "utf-8");
    const projects = projectsSchema.parse(JSON.parse(file));
    const insertProject = db.prepare(`
        INSERT INTO projects (id, title, category, description, url, is_public, created_at) 
        VALUES (@id, @title, @category, @description, @url, @isPublic, @createdAt)`);

    const tr = db.transaction((projects: Project[]) => {
        
        for (const project of projects) {
            let proj = {...project, createdAt: project.createdAt?.toISOString(), isPublic: String(project.isPublic)};
            insertProject.run(proj);
        }
    });
    tr(projects);
};
