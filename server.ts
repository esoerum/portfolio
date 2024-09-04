import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/statics/*", serveStatic({root: "./"}));

// app.get('/json', async (context) => {
//     const data = await readFile('./data.json', "utf-8");
//     // return context.json(data);
//     return context.json(JSON.parse(data));
//     // return context.json({id: 13})
// });

const port = 3999;

console.log("Server is running YEAH")

serve( {
    fetch: app.fetch,
    port,
});