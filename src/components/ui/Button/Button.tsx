import classNames from "classnames";
import {ButtonHTMLAttributes, forwardRef} from "react";
import Typography from "../Typography/Typography";
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
				ref={ref}
				className={classNames(styles.button, classNameByVariant, className)}
				type="button"
				{...rest}>
				<Typography
					color="primary"
					colorVariant="contrast"
					variant="button"
					noWrap>
					{children}
				</Typography>
			</button>
		);
	}
);
Button.displayName = "Button";

export type {Variant as ButtonVariant};
export default Button;
