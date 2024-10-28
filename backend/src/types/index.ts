import { UUID } from "crypto";
import { projectSchema } from "../lib/validate";
import { z } from "zod";

export type Success<T> = {
	success: true;
	data: T;
};

export type Result<T> =
	| Success<T>
	| {
			success: false;
			error: {
				code: string;
				message: string;
			};
	  };
export type Project = z.infer<typeof projectSchema>;