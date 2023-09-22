"use client";

import {Tab, TabList, TabPanel, Tabs, Typography} from "@/components/ui";
import {Project, ProjectCategory} from "@prisma/client";
import {FC} from "react";
import ProjectList from "../ProjectList/ProjectList";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import styles from "./ProjectTabs.module.scss";

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
						<div className={styles.list}>
							<ProjectList projects={categoryProjects} />
						</div>
						<div className={styles.slider}>
							<ProjectSlider projects={categoryProjects} />
						</div>
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProjectTabs;
