import { Hono } from "hono";
import { cors } from "hono/cors";
import { UUID } from "node:crypto";
import fs from "node:fs/promises";
type Project = {
	id: UUID;
	title: string;
	category: string;
	description: string;
	url: string;
	createdAt?: Date;
};
const app = new Hono();

app.use("/*", cors());

app.get("/projects", async (context) => {
	const data = await fs.readFile("./src/projects.json", "utf8");
	const dataAsJson = JSON.parse(data);
	return context.json(dataAsJson);
	// return c.json(dummyData);
});

app.put("/projects", async (c) => {
	const data = await fs.readFile("./src/projects.json", "utf-8");
	const projects = JSON.parse(data);
	const project = await c.req.json() as Project;
	project.createdAt = new Date();
	projects.push(project);
	await fs.writeFile(
		"./src/projects.json",
		JSON.stringify(projects, null, 2)
	);
	return c.json(project);
	// let project = await c.req.json();
	// //Validering
	// dummyData.push(project);
});
app.delete("/projects/:id", async (c) => {
	const id = c.req.param("id");
	const data = await fs.readFile("./src/projects.json", "utf-8");
	const projects = JSON.parse(data) as Project[];
	console.log(projects);
	const newProjects = projects.filter(
		(project: Project) => project.id !== id
	);
	console.log(newProjects);
	await fs.writeFile(
		"./src/projects.json",
		JSON.stringify(newProjects, null, 2)
	);
	return c.json({ message: "Project deleted" });
});
// app.delete("/projects/:id", (c) => {
//     const id = c.req.param("id");
//     dummyData = dummyData.filter((project) => project.id !== id);
//     return c.json({ message: "Project deleted" });
// });
export default app;
