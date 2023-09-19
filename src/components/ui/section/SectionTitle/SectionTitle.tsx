import classNames from "classnames";
import {forwardRef} from "react";
import Typography, {TypographyProps} from "../../Typography/Typography";
import styles from "./SectionTitle.module.scss";

interface Props extends TypographyProps {}

const SectionTitle = forwardRef<HTMLElement, Props>(
	({children, className, ...rest}, ref) => {
		return (
			<Typography
				ref={ref}
				className={classNames(styles.title, className)}
				color="background"
				colorVariant="contrast"
				variant="h2"
				{...rest}>
				{children}
			</Typography>
		);
	}
);
SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
