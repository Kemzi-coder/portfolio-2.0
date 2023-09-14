import classNames from "classnames";
import {AnchorHTMLAttributes, forwardRef} from "react";
import Typography from "../../Typography/Typography";
import styles from "./NavbarItem.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavbarItem = forwardRef<HTMLAnchorElement, Props>(
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
NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
