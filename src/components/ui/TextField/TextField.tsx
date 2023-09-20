import {forwardRef} from "react";
import Input, {InputProps} from "../Input/Input";
import Textarea, {TextareaProps} from "../Textarea/Textarea";
import styles from "./TextField.module.scss";
import Typography from "../Typography/Typography";

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
				<Typography className={styles.text} as="span">
					{label}
				</Typography>
				{elementJSX}
				{error ? (
					<Typography
						className={styles.error}
						color="danger"
						variant="body2"
						as="span">
						{error}
					</Typography>
				) : null}
			</label>
		);
	}
);
TextField.displayName = "TextField";

export default TextField;
