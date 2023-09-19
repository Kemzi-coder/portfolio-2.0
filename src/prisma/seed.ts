import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
	await prisma.projectsSkills.deleteMany();
	await prisma.project.deleteMany();
	await prisma.skill.deleteMany();
	await prisma.projectCategory.deleteMany();

	const skills = [
		{name: "JavaScript"},
		{name: "TypeScript"},
		{name: "HTML"},
		{name: "CSS"},
		{name: "SCSS"},
		{name: "React.js"},
		{name: "Next.js"},
		{name: "React-native"},
		{name: "Redux"},
		{name: "MobX"},
		{name: "Express.js"},
		{name: "Tailwind CSS"},
		{name: "React Testing Library"},
		{name: "Jest"},
		{name: "SQL & NoSQL"}
	];
	await prisma.skill.createMany({data: skills});

	const projectCategories = [
		{name: "full-stack"},
		{name: "front-end"},
		{name: "back-end"}
	];
	await prisma.projectCategory.createMany({data: projectCategories});

	const fullStackCategory = (await prisma.projectCategory.findUnique({
		where: {name: "full-stack"}
	}))!;
	const projects = [
		{
			categoryId: fullStackCategory.id,
			name: "Cooper",
			description: "A team search full-stack app.",
			url: "https://cooper23.herokuapp.com/",
			repoUrl: "https://github.com/Kemzi-coder/cooper",
			previewImage: "cooper.png",
			startDate: new Date("2022-07-01")
		}
	];
	await prisma.project.createMany({data: projects});
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
