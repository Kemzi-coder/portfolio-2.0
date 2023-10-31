import prisma from "@/prisma/client";

const getProjectById = async (id: number) => {
	const project = await prisma.project.findUnique({where: {id}});
	return project;
};

export {getProjectById};
