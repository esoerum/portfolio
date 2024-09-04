import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import fs from "node:fs/promises";
import { Project } from "./src/types";

//Server setup
const app = new Hono();

app.use("/*", cors());

app.use("/statics/*", serveStatic({root: "./"}));

app.get('/', async (context) => {
    return context.text("Hello World");
});

//Method that retrieves all projects from the json-file
app.get("/projects", async (context) => {
    const data = await fs.readFile("./myprojects.json", "utf8");
    const dataAsJson = JSON.parse(data);
    return context.json(dataAsJson);
  });

//Post-method that sends in a project to the json-file
app.post('/projects', async (context) => {
    const data = await fs.readFile('./myprojects.json', "utf-8");
    const projects = JSON.parse(data);
    const project: Project = await context.req.json();
    projects.push(project);
    await fs.writeFile('./myprojects.json', JSON.stringify(projects, null, 2));
    return context.json({message: 'Project added'});
});



const port = 3999;

console.log(`Server is running on port ${port}`);

serve( {
    fetch: app.fetch,
    port,
});