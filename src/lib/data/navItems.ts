import {SectionId} from "../constants";

interface NavItem {
	id: number;
	text: string;
	href: string;
}

const navItems: NavItem[] = [
	{id: 1, text: "Projects", href: `#${SectionId.PROJECTS}`},
	{id: 2, text: "Benefits", href: `#${SectionId.BENEFITS}`},
	{id: 3, text: "Contact", href: `#${SectionId.CONTACT}`}
];

export type {NavItem};
export default navItems;
