import {Project} from "@prisma/client";
import {FC} from "react";
import HeroSection from "../(hero)";
import OverviewSection from "../(overview)";

interface Props {
	project: Project;
}

const ProjectPage: FC<Props> = ({project}) => {
	const {name, url, repoUrl} = project;

	return (
		<main>
			<HeroSection name={name} url={url} repoUrl={repoUrl} />
			<OverviewSection />
		</main>
	);
};

export default ProjectPage;
