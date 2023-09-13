import classNames from "classnames";
import {AnchorHTMLAttributes, forwardRef} from "react";
import Typography from "../Typography/Typography";
import styles from "./ButtonLink.module.scss";

type Variant = "primary" | "outline";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: Variant;
}

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
	({children, className, variant = "primary", ...rest}, ref) => {
		const classNameByVariant = {
			[styles.primary]: variant === "primary",
			[styles.outline]: variant === "outline"
		};

		return (
			<a
				ref={ref}
				className={classNames(styles.link, classNameByVariant, className)}
				{...rest}>
				<Typography color="primary" colorVariant="contrast" variant="button">
					{children}
				</Typography>
			</a>
		);
	}
);
ButtonLink.displayName = "ButtonLink";

export type {Variant as ButtonLinkVariant};
export default ButtonLink;
