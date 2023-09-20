"use client";

import {Logo} from "@/components";
import {Container, Link, Navbar, NavbarItem} from "@/components/ui";
import {SectionId} from "@/lib/constants";
import classNames from "classnames";
import {useState} from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import styles from "./Header.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerMenuItem from "../BurgerMenuItem/BurgerMenuItem";

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuOpen = () => setMenuIsOpen(prev => !prev);

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.inner}>
					<div className={classNames(styles.block, styles["block--left"])}>
						<Logo />
					</div>
					<div className={classNames(styles.block, styles["block--center"])}>
						<Navbar className={styles.navbar}>
							<NavbarItem href={`#${SectionId.PROJECTS}`}>Projects</NavbarItem>
							<NavbarItem href={`#${SectionId.BENEFITS}`}>Benefits</NavbarItem>
							<NavbarItem href={`#${SectionId.CONTACT}`}>Contact</NavbarItem>
						</Navbar>
						<BurgerButton
							className={styles["burger-button"]}
							isActive={menuIsOpen}
							onClick={toggleMenuOpen}
						/>
					</div>
					<div className={classNames(styles.block, styles["block--right"])}>
						<div className={styles["social-links"]}>
							<Link href="https://t.me/maxkemzi" target="_blank">
								Telegram
							</Link>
							<Link
								href="https://www.linkedin.com/in/maxkirichenko/"
								target="_blank">
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
				<BurgerMenu
					className={classNames(styles["burger-menu"], {
						[styles["burger-menu--active"]]: menuIsOpen
					})}>
					<BurgerMenuItem href={`#${SectionId.PROJECTS}`}>
						Projects
					</BurgerMenuItem>
					<BurgerMenuItem href={`#${SectionId.BENEFITS}`}>
						Benefits
					</BurgerMenuItem>
					<BurgerMenuItem href={`#${SectionId.CONTACT}`}>
						Contact
					</BurgerMenuItem>
				</BurgerMenu>
			</Container>
		</header>
	);
};

export default Header;
