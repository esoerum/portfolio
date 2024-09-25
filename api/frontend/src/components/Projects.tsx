import Project from "./Project";
import { ProjectProps, ProjectsProps } from "./types";
import type { PropsWithChildren } from "react";
// import { ofetch } from "ofetch";
// import React, { useState, useEffect } from "react";


export default function Projects(
	props: Readonly<PropsWithChildren<ProjectsProps>>
) {
	const { projects = [], children, onRemoveProjectButtonClicked } = props;
	// const [projects, setProjects] = useState<ProjectProps[]>([]);
	
	// const initializeData = () => {
    //     console.log("fetching data");
    //     ofetch("http://localhost:3000/projects")
    //         .then((projects: ProjectProps[]) => {
    //             console.log("data fetched");
    //             setProjects(projects);
    //             console.log("data initialized");
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching projects:", error);
    //         });
    // };

    // useEffect(() => {
    //     initializeData();
    // }, []);



	return (
		<section>
			<h2>Projects</h2>
			{children}
			{projects.length === 0 ? (
				<p>No projects available.</p>
			) : (
				<>
					<ul className="project-ul">
						{projects.map((project: ProjectProps) => (
							<li key={project.id || project.title}>
								<Project
									id={project.id}
									title={project.title}
									category={project.category}
									description={project.description}
									url={project.url}
								>
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
								{category}: {count}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}
