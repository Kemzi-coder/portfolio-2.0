"use client";

import React, {FC} from "react";
import {Tab, TabList, TabPanel, Tabs, Typography} from "@/components/ui";
import ProjectList from "../ProjectList/ProjectList";
import {Project, ProjectCategory} from "@prisma/client";

interface Props {
	projects: Project[];
	categories: ProjectCategory[];
}

const ProjectTabs: FC<Props> = ({projects, categories}) => {
	if (categories.length === 0) {
		return <Typography>No project categories to be displayed.</Typography>;
	}

	return (
		<Tabs>
			<TabList>
				{categories.map(category => (
					<Tab key={category.id}>{category.name}</Tab>
				))}
			</TabList>
			{categories.map(category => {
				const categoryProjects = projects.filter(
					p => p.categoryId === category.id
				);
				return (
					<TabPanel key={category.id}>
						<ProjectList projects={categoryProjects} />
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProjectTabs;
