import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

const dummyData = [
    {
        id: "1",
        title: "Web applications",
        description: "Frontend and backend",
        createdAt: new Date("2024-01-01"),
        categories: ["web, react, node, fullstack"],
        },
        {
        id: "2",
        title: "Python",
        description: "Scripting and automation",
        createdAt: new Date("2024-01-04"),
        categories: ["python", "scripting, automation, programming, backend"],
        },
        {
        id: "3",
        title: "Backend development with Java", 
        description: "Spring Boot and RESTful APIs",
        createdAt: new Date("2024-01-07"),
        categories: ["java", "backend, restful, spring boot"],
        },
        {
        id: "4",
        title: "Cloud computing",
        description: "AWS, GCP, Azure",
        createdAt: new Date("2024-01-02"),
        categories: ["cloud, aws, gcp, azure"],
        },
]


app.get("/projects", (c) => {
    return c.json(dummyData);
});


export default app
