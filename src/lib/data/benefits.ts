interface Benefit {
	id: number;
	image: string;
	title: string;
	description: string;
}

const benefits: Benefit[] = [
	{
		id: 1,
		image: "/images/benefits/benefits-speed.svg",
		title: "Passion",
		description: "I enjoy doing my job."
	},
	{
		id: 2,
		image: "/images/benefits/benefits-tech.svg",
		title: "Quick learner",
		description: "I am a self-taught programmer."
	},
	{
		id: 3,
		image: "/images/benefits/benefits-google.svg",
		title: "Googling :)",
		description: "I know how to google fast and accurate."
	}
];

export type {Benefit};
export default benefits;
