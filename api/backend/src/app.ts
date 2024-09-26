import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

let dummyData = [
    {
        id: "1",
        title: "Web applications",
        description: "Frontend and backend",
        createdAt: new Date("2024-01-01"),
        category: ["react"],
        },
        {
        id: "2",
        title: "Python",
        description: "Scripting and automation",
        createdAt: new Date("2024-01-04"),
        category: ["scripting"],
        },
        {
        id: "3",
        title: "Backend development with Java", 
        description: "Spring Boot and RESTful APIs",
        createdAt: new Date("2024-01-07"),
        category: ["java"],
        },
        {
        id: "4",
        title: "Cloud computing",
        description: "AWS, GCP, Azure",
        createdAt: new Date("2024-01-02"),
        category: ["cloud"],
        },
]


app.get("/projects", (c) => {
    return c.json(dummyData);
});

app.put("/projects", async (c) => {

    let project = await c.req.json();
    project.createdAt = new Date();
    //Validering
    
    dummyData.push(project);
});


app.delete("/projects/:id", (c) => {
    const id = c.req.param("id");
    dummyData = dummyData.filter((project) => project.id !== id);
    return c.json({ message: "Project deleted" });
});
export default app
