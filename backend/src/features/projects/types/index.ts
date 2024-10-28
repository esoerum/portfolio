import { z } from "zod";
import { projectSchema } from "../lib/validate";

export type Project = z.infer<typeof projectSchema>;