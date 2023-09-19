import {forwardRef} from "react";
import Input, {InputProps} from "../Input/Input";
import Textarea, {TextareaProps} from "../Textarea/Textarea";
import styles from "./TextField.module.scss";

interface BaseProps {
	error?: string;
	label: string;
}

interface MultilineProps extends BaseProps {
	isMultiline: true;
	textareaProps?: TextareaProps;
	inputProps?: never;
}

interface NonMultilineProps extends BaseProps {
	isMultiline?: false;
	inputProps?: InputProps;
	textareaProps?: never;
}

type Props = MultilineProps | NonMultilineProps;

const TextField = forwardRef<any, Props>(
	({isMultiline, textareaProps, inputProps, label, error}, ref) => {
		const elementJSX = isMultiline ? (
			<Textarea ref={ref} isInvalid={!!error} {...textareaProps} />
		) : (
			<Input ref={ref} isInvalid={!!error} {...inputProps} />
		);

		return (
			<label className={styles.label}>
				<span className={styles.text}>{label}</span>
				{elementJSX}
				{error ? <span className={styles.error}>{error}</span> : null}
			</label>
		);
	}
);
TextField.displayName = "TextField";

export default TextField;
