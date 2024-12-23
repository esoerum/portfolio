import { UUID } from "crypto";
import { z } from "zod";

// Zod validation schema for a project
const projectSchema = z.object({
    id: z.string().uuid().transform((str) => str as UUID),
    title: z.string(),
    category: z.union([z.string(), z.array(z.string())]),
    description: z.string(),
    url: z.string().optional(),
    createdAt: z.string().datetime().transform((str) => new Date(str)),    
    isPublic: z.boolean(),
});

const projectsSchema = z.array(projectSchema);

export { projectSchema, projectsSchema };