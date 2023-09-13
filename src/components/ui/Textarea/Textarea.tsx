import classNames from "classnames";
import {TextareaHTMLAttributes, forwardRef} from "react";
import styles from "./Textarea.module.scss";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({className, ...rest}, ref) => {
		return (
			<textarea
				ref={ref}
				className={classNames(styles.textarea, className)}
				{...rest}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export type {Props as TextareaProps};
export default Textarea;
