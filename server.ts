import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import fs from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/statics/*", serveStatic({root: "./"}));

app.get('/', async (context) => {
    return context.text("Hello World");
});

app.get('/json', async (context) => {
    const data = await fs.readFile('./myprojects.json', "utf-8");
        // return context.json(data);
    return context.json(JSON.parse(data));
    // return context.json({id: 13})
});

//Denne skal gjøres om og brukes til å legge til prosjekter i HTML
app.post('/json', async (context) => {
    return context.text("Hello World");
});



const port = 3999;

console.log("Server is running as normal")

serve( {
    fetch: app.fetch,
    port,
});