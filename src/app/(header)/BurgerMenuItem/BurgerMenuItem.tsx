import {Typography} from "@/components/ui";
import classNames from "classnames";
import React, {AnchorHTMLAttributes, forwardRef} from "react";
import styles from "./BurgerMenuItem.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const BurgerMenuItem = forwardRef<HTMLAnchorElement, Props>(
	({className, children, ...rest}, ref) => {
		return (
			<a ref={ref} className={classNames(styles.link, className)} {...rest}>
				<Typography
					className={styles.text}
					color="secondary"
					variant="link"
					textTransform="capitalize">
					{children}
				</Typography>
			</a>
		);
	}
);
BurgerMenuItem.displayName = "BurgerMenuItem";

export default BurgerMenuItem;
