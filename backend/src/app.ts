import { Hono } from "hono";
import { cors } from "hono/cors";
import { UUID } from "node:crypto";
import fs from "node:fs/promises";
import { Project } from "./features/projects/types";

//Ha med V1 i /api/v1/projects


const app = new Hono();

app.use("/*", cors());

// Route to get all projects
app.get("/api/v1/projects", async (ctx) => {
	const data = await fs.readFile("./src/data/projects.json", "utf8");
	const dataAsJson = JSON.parse(data);
	return ctx.json(dataAsJson);
});

//Route to get one project by id
app.get("/api/v1/projects/:id", async (ctx) => {
	const id = ctx.req.param("id");
	const data = await fs.readFile("./src/data/projects.json", "utf8");
	const projects = JSON.parse(data) as Project[];
	const project = projects.find((project) => project.id === id);
	return ctx.json(project);
});

// Route to add a new project
app.post("/api/v1/projects", async (ctx) => {
	const data = await fs.readFile("./src/data/projects.json", "utf-8");
	const projects = JSON.parse(data);
	const project = (await ctx.req.json()) as Project;
	project.createdAt = new Date();
	projects.push(project);
	await fs.writeFile(
		"./src/data/projects.json",
		JSON.stringify(projects, null, 2)
	);
	return ctx.json(project);
});
// Route to update a project
app.patch("/api/v1/projects/:id", async (ctx) => {
	const id = ctx.req.param("id");
	const data = await fs.readFile("./src/data/projects.json", "utf-8");
	const projects = JSON.parse(data) as Project[];
	const project = (await ctx.req.json()) as Project;
	const foundProject = projects.find((project) => project.id === id);
	if (!foundProject) {
		return ctx.json({ message: "Project not found" }, 400);
	}
	await fs.writeFile(
		"./src/data/projects.json",
		JSON.stringify(projects, null, 2)
	);
	return ctx.body(null, 204);
});

// Route to delete a project
app.delete("/api/v1/projects/:id", async (ctx) => {
	const id = ctx.req.param("id");
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
	return ctx.json({ message: "Project deleted" });
});

export default app;
