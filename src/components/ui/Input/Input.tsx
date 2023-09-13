import classNames from "classnames";
import React, {InputHTMLAttributes, forwardRef} from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(
	({className, ...rest}, ref) => {
		return (
			<input
				ref={ref}
				className={classNames(styles.input, className)}
				{...rest}
			/>
		);
	}
);
Input.displayName = "Input";

export type {Props as InputProps};
export default Input;
