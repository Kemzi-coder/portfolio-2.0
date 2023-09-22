"use client";

import {Logo} from "@/components";
import {Container, Link, Navbar, NavbarItem} from "@/components/ui";
import {navItems} from "@/lib/data";
import {useListenClickOutside} from "@/lib/hooks";
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerMenuItem from "../BurgerMenuItem/BurgerMenuItem";
import styles from "./Header.module.scss";

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const burgerMenuRef = useRef(null);

	const toggleMenuIsOpen = () => setMenuIsOpen(prev => !prev);
	const handleMenuClose = () => setMenuIsOpen(false);

	useEffect(() => {
		if (menuIsOpen) {
			document.body.classList.add("body--lock");
		} else {
			document.body.classList.remove("body--lock");
		}
	}, [menuIsOpen]);

	useListenClickOutside(burgerMenuRef, () => setMenuIsOpen(false));

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.inner}>
					<div className={classNames(styles.block, styles["block--left"])}>
						<Logo />
					</div>
					<div className={classNames(styles.block, styles["block--center"])}>
						<Navbar className={styles.navbar}>
							{navItems.map(navItem => (
								<NavbarItem key={navItem.id} href={navItem.href}>
									{navItem.text}
								</NavbarItem>
							))}
						</Navbar>
						<div className={styles["burger-button-wrapper"]}>
							<BurgerButton isActive={menuIsOpen} onClick={toggleMenuIsOpen} />
						</div>
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
				<div
					className={classNames(styles["burger-menu-wrapper"], {
						[styles["burger-menu-wrapper--open"]]: menuIsOpen
					})}>
					<BurgerMenu ref={burgerMenuRef} className={styles["burger-menu"]}>
						{navItems.map(navItem => (
							<BurgerMenuItem
								key={navItem.id}
								onClick={handleMenuClose}
								href={navItem.href}>
								{navItem.text}
							</BurgerMenuItem>
						))}
					</BurgerMenu>
				</div>
			</Container>
		</header>
	);
};

export default Header;
