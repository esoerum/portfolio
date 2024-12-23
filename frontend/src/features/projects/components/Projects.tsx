import { capitalizeFirstLetter, formatDistance } from "../lib/format.ts";
import Project from "./Project.tsx";
import { ProjectProps, ProjectsProps } from "./Project.tsx";
import type { PropsWithChildren } from "react";


export default function Projects(
	props: Readonly<PropsWithChildren<ProjectsProps>>
) {
	const {children, onRemoveProjectButtonClicked, projects } = props;
	return (
		<section>
			<h2>My Projects</h2>
			{children}
			{projects.length === 0 ? (
				<p>No projects available.</p>
			) : (
				<>
					<ul className="project-ul">
						{projects.map((project: ProjectProps) => (
							<li key={project.id}>
								<Project
									id={project.id}
									title={project.title}
									category={project.category}
									description={project.description}
									url={project.url}
									isPublic={project.isPublic}
									
								>
									<p>
									Published: {" "}
										{project.createdAt ? formatDistance(new Date(project.createdAt)) : "unknown"}
									</p>
									<button
										onClick={() =>
											onRemoveProjectButtonClicked(
												project.id
											)
										}
									>
										Remove project
									</button>
								</Project>
							</li>
						))}
					</ul>
                    Total projects per category:
					<ul>
						{Object.entries(
							projects.reduce((prev, curr) => {
								prev[curr.category] =
									(prev[curr.category] || 0) + 1;
								return prev;
							}, {} as Record<string, number>)
						).map(([category, count]) => (
							<li key={category}>
								{capitalizeFirstLetter(category)}: {count}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}
