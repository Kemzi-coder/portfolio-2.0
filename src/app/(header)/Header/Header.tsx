import {Logo} from "@/components";
import React from "react";
import styles from "./Header.module.scss";
import {Container, Link, Navbar, NavbarItem} from "@/components/ui";
import classNames from "classnames";
import {SectionId} from "@/lib/constants";

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.inner}>
					<div className={classNames(styles.block, styles["block--left"])}>
						<Logo />
					</div>
					<div className={classNames(styles.block, styles["block--center"])}>
						<Navbar>
							<NavbarItem href={`#${SectionId.PROJECTS}`}>Projects</NavbarItem>
							<NavbarItem href={`#${SectionId.BENEFITS}`}>Benefits</NavbarItem>
							<NavbarItem href={`#${SectionId.CONTACT}`}>Contact</NavbarItem>
						</Navbar>
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
			</Container>
		</header>
	);
};

export default Header;
