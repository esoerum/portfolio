import { DB } from "@/db/db";
import { Project } from "../types";
import { Result } from "@/types";
import { UUID } from "crypto";

export const createProjectRepository = (db: DB) => {

    // Function to create a project in the database
	const create = async (data: Project) => {
		try {
			const insertProject = db.prepare(`
                INSERT INTO projects (id, title, category, description, url, is_public, created_at) 
                VALUES (@id, @title, @category, @description, @url, @isPublic, @createdAt)`);

			const insertTransaction = db.transaction((project: Project) => {
				let proj = {
					...project,
					createdAt: project.createdAt?.toISOString(),
					isPublic: String(project.isPublic),
				};
				insertProject.run(proj);
			});
			insertTransaction(data);
            return { success: true, data };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

    //Function to list all projects in the database
    const list = async () => {
        try {
            const projects = db.prepare("SELECT * FROM projects").all();
            return { success: true, data: projects };

        } catch (error) {
            const err: Result<Project[]> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };
            return err;
        }

    };

    //Function to get a project by id
    const getById = async (id: UUID) => {
        try {
            const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id);
            return { success: true, data: project };
        } catch (error) {
            const err: Result<Project> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };
            return err;
        }
    };

    //Function to update a project
    const update = async (id: UUID, data: Project) => {
        try {
            const updateProject = db.prepare(`
                UPDATE projects 
                SET title = @title, category = @category, description = @description, url = @url, is_public = @isPublic
                WHERE id = @id
            `);

            const updateTransaction = db.transaction((project: Project) => {
                let proj = {
                    ...project,
                    isPublic: String(project.isPublic),
                };
                updateProject.run(proj);
            });
            updateTransaction(data);
            return { success: true, data };
        } catch (error) {
            const err: Result<Project> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };  
            return err;
        }
    };

    //Function to remove a project
    const remove = async(id: UUID) => {
        try {
            db.prepare("DELETE FROM projects WHERE id = ?").run(id);
            return { success: true, data: null };
        } catch (error) {
            const err: Result<Project> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };
            return err;
        }
    };

    //Function to publish a project, set publish to true
    const publish = async (id: UUID) => {
        try {
            db.prepare("UPDATE projects SET is_public = 'true' WHERE id = ?").run(id);
            return { success: true, data: null };
        } catch (error) {
            const err: Result<Project> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };
            return err;
        }
    };

    //Function to unpublish a project, set publish to false
    const unpublish = async (id: UUID) => {
        try {
            db.prepare("UPDATE projects SET is_public = 'false' WHERE id = ?").run(id);
            return { success: true, data: null };
        } catch (error) {
            const err: Result<Project> = {
                success: false,
                error: { code: "500", message: "Internal Server Error" },
            };
            return err;
        }
    };


	return {create, list, getById, update, remove, publish, unpublish};
};

export type ProjectRepository = ReturnType<typeof createProjectRepository>;
