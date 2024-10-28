import { Hono } from "hono";
import { cors } from "hono/cors";
import { UUID } from "node:crypto";
import fs from "node:fs/promises";


//Ha med V1 i /api/v1/projects

type Project = {
	id: UUID;
	title: string;
	category: string;
	description: string;
	url: string;
	createdAt?: Date;
	isPublic: boolean;
};
const app = new Hono();

app.use("/*", cors());

// Route to get all projects
app.get("/api/v1/projects", async (context) => {
	const data = await fs.readFile("./src/data/projects.json", "utf8");
	const dataAsJson = JSON.parse(data);
	return context.json(dataAsJson);
});

//Route to get one project by id
app.get("/api/v1/projects/:id", async (context) => {
	const id = context.req.param("id");
	const data = await fs.readFile("./src/data/projects.json", "utf8");
	const projects = JSON.parse(data) as Project[];
	const project = projects.find((project) => project.id === id);
	return context.json(project);
});

// Route to add a new project
app.post("/api/v1/projects", async (c) => {
	const data = await fs.readFile("./src/data/projects.json", "utf-8");
	const projects = JSON.parse(data);
	const project = await c.req.json() as Project;
	project.createdAt = new Date();
	projects.push(project);
	await fs.writeFile(
		"./src/data/projects.json",
		JSON.stringify(projects, null, 2)
	);
	return c.json(project);
	
});
// Route to update a project
// app.patch("/api/v1/projects/:id", async (c) => {


// Route to delete a project
app.delete("/api/v1/projects/:id", async (c) => {
	const id = c.req.param("id");
	const data = await fs.readFile("./src/data/projects.json", "utf-8");
	const projects = JSON.parse(data) as Project[];
	console.log(projects);
	const newProjects = projects.filter(
		(project: Project) => project.id !== id
	);
	console.log(newProjects);
	await fs.writeFile(
		"./src/data/projects.json",
		JSON.stringify(newProjects, null, 2)
	);
	return c.json({ message: "Project deleted" });
});

export default app;
