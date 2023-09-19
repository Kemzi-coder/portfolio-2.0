import classNames from "classnames";
import React, {InputHTMLAttributes, forwardRef} from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({className, isInvalid, ...rest}, ref) => {
		return (
			<input
				ref={ref}
				className={classNames(
					styles.input,
					{[styles["input--invalid"]]: isInvalid},
					className
				)}
				{...rest}
			/>
		);
	}
);
Input.displayName = "Input";

export type {Props as InputProps};
export default Input;
