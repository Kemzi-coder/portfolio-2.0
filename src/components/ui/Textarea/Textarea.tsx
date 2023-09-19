import classNames from "classnames";
import {TextareaHTMLAttributes, forwardRef} from "react";
import styles from "./Textarea.module.scss";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isInvalid?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({className, isInvalid, ...rest}, ref) => {
		return (
			<textarea
				ref={ref}
				className={classNames(
					styles.textarea,
					{[styles["textarea--invalid"]]: isInvalid},
					className
				)}
				{...rest}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export type {Props as TextareaProps};
export default Textarea;
