import {forwardRef} from "react";
import Input, {InputProps} from "../Input/Input";
import Textarea, {TextareaProps} from "../Textarea/Textarea";

interface MultilineProps {
	isMultiline: true;
	textareaProps?: TextareaProps;
	inputProps?: never;
}

interface NonMultilineProps {
	isMultiline?: false;
	inputProps?: InputProps;
	textareaProps?: never;
}

type Props = MultilineProps | NonMultilineProps;

const TextField = forwardRef<any, Props>(
	({isMultiline, textareaProps, inputProps}, ref) => {
		if (isMultiline) {
			return <Textarea ref={ref} {...textareaProps} />;
		}

		return <Input ref={ref} {...inputProps} />;
	}
);
TextField.displayName = "TextField";

export default TextField;
