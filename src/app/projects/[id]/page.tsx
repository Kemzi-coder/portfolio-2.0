import {getProjectById} from "@/lib/prisma/projects";
import {ProjectPage} from "./(project)";

const Project = async ({params}: {params: {id: string}}) => {
	const project = await getProjectById(Number(params.id));

	if (!project) {
		throw new Error("Project with provided id is not found.");
	}

	return <ProjectPage project={project} />;
};

export default Project;
