import {RouteName, HomeSectionId} from "../constants";

interface NavItem {
	id: number;
	text: string;
	href: string;
}

const navItems: NavItem[] = [
	{
		id: 1,
		text: "Projects",
		href: `${RouteName.HOME}#${HomeSectionId.PROJECTS}`
	},
	{
		id: 2,
		text: "Benefits",
		href: `${RouteName.HOME}#${HomeSectionId.BENEFITS}`
	},
	{id: 3, text: "Contact", href: `${RouteName.HOME}#${HomeSectionId.CONTACT}`}
];

export type {NavItem};
export default navItems;
