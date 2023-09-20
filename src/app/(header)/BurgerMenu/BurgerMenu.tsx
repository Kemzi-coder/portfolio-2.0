import classNames from "classnames";
import {Children, HTMLAttributes, forwardRef} from "react";
import styles from "./BurgerMenu.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
	listProps?: HTMLAttributes<HTMLUListElement>;
}

const BurgerMenu = forwardRef<HTMLElement, Props>(
	({listProps, className, children, ...rest}, ref) => {
		const {className: listClassName, ...restList} = listProps || {};
		return (
			<nav ref={ref} className={classNames(styles.menu, className)} {...rest}>
				<ul className={classNames(styles.list, listClassName)} {...restList}>
					{Children.map(children, child => (
						<li>{child}</li>
					))}
				</ul>
			</nav>
		);
	}
);
BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;
