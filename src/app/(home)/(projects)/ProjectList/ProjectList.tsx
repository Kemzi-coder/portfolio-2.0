import {ProjectCard} from "@/components";
import {Project} from "@prisma/client";
import {FC} from "react";
import styles from "./ProjectList.module.scss";

interface Props {
	projects: Project[];
}

const ProjectList: FC<Props> = ({projects}) => {
	if (projects.length === 0) {
		return (
			<div>
				<p>No projects yet.</p>
			</div>
		);
	}

	return (
		<div className={styles.list}>
			{projects.map(project => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default ProjectList;
