import classNames from "classnames";
import {AnchorHTMLAttributes, forwardRef} from "react";
import styles from "./Link.module.scss";

type Variant = "primary" | "outline";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: Variant;
}

const Link = forwardRef<HTMLAnchorElement, Props>(
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
				{children}
			</a>
		);
	}
);
Link.displayName = "Link";

export type {Variant as LinkVariant};
export default Link;
