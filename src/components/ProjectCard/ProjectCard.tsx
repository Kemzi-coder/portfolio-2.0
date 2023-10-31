import {Project} from "@prisma/client";
import Image from "next/image";
import {FC} from "react";
import {Typography} from "../ui";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";
import {RouteName} from "@/lib/constants";

interface Props {
	project: Project;
}

const ProjectCard: FC<Props> = ({project}) => {
	// todo: add fallback image
	const imagePath = project.previewImage
		? `/images/projects/${project.previewImage}`
		: "";

	return (
		<Link className={styles.card} href={`${RouteName.PROJECTS}/${project.id}`}>
			<Image
				fill
				priority
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className={styles.image}
				src={imagePath}
				alt={`${project.name} project`}
			/>
			<div className={styles.content}>
				<Typography className={styles.title} color="secondary" variant="h3">
					{project.name}
				</Typography>
				<Typography color="secondary">{project.description}</Typography>
			</div>
		</Link>
	);
};

export default ProjectCard;
