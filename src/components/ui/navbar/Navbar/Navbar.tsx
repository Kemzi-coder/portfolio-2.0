import React, {Children, HTMLAttributes, forwardRef} from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
	listProps?: HTMLAttributes<HTMLUListElement>;
}

const Navbar = forwardRef<HTMLElement, Props>(
	({listProps, children, ...rest}, ref) => {
		const {className, ...restList} = listProps || {};
		return (
			<nav ref={ref} {...rest}>
				<ul className={classNames(styles.list, className)} {...restList}>
					{Children.map(children, child => (
						<li>{child}</li>
					))}
				</ul>
			</nav>
		);
	}
);
Navbar.displayName = "Navbar";

export default Navbar;
