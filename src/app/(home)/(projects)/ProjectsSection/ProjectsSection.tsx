import {Container, Section, SectionTitle} from "@/components/ui";
import {SectionId} from "@/lib/constants";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import styles from "./ProjectsSection.module.scss";
import prisma from "@/prisma/client";

const ProjectsSection = async () => {
	const [projects, categories] = await Promise.all([
		prisma.project.findMany(),
		prisma.projectCategory.findMany()
	]);

	return (
		<Section id={SectionId.PROJECTS}>
			<Container>
				<SectionTitle className={styles.title}>Projects</SectionTitle>
				<ProjectTabs projects={projects} categories={categories} />
			</Container>
		</Section>
	);
};

export default ProjectsSection;
