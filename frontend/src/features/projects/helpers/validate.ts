import { z } from "zod";




// Zod validation schema for a project
const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    category: z.union([z.string(), z.array(z.string())]),
    description: z.string(),
    url: z.string().optional(),
    createdAt: z.string().transform((str) => new Date(str)).optional(),
    isPublicProject: z.boolean().optional(),
});

const projectsSchema = z.array(projectSchema);

export { projectSchema, projectsSchema };