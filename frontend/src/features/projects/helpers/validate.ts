import { z } from "zod";


export { projectSchema, projectsSchema };

// Zod validation schema for a project
const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    url: z.string(),
    createdAt: z.date().optional(),
});

const projectsSchema = z.array(projectSchema);