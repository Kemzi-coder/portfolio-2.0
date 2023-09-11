import classNames from "classnames";
import React, {ButtonHTMLAttributes, FC, forwardRef} from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, Props>(
	({children, className, variant = "primary", ...rest}, ref) => {
		const classNameByVariant = {
			[styles.primary]: variant === "primary",
			[styles.outline]: variant === "outline"
		};

		return (
			<button
				className={classNames(styles.button, classNameByVariant, className)}
				type="button"
				{...rest}>
				{children}
			</button>
		);
	}
);
Button.displayName = "Button";

export type {Variant as ButtonVariant};
export default Button;
