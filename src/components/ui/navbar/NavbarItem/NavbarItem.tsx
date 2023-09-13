import classNames from "classnames";
import Link from "next/link";
import {ComponentProps, forwardRef} from "react";
import Typography from "../../Typography/Typography";
import styles from "./NavbarItem.module.scss";

interface Props extends ComponentProps<typeof Link> {}

const NavbarItem = forwardRef<HTMLAnchorElement, Props>(
	({className, children, ...rest}, ref) => {
		return (
			<Link ref={ref} className={classNames(styles.link, className)} {...rest}>
				<Typography
					className={styles.text}
					color="secondary"
					variant="link"
					textTransform="capitalize">
					{children}
				</Typography>
			</Link>
		);
	}
);
NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
