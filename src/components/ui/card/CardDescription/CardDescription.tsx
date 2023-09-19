import {forwardRef} from "react";
import Typography, {TypographyProps} from "../../Typography/Typography";
import classNames from "classnames";
import styles from "./CardDescription.module.scss";

interface Props extends TypographyProps {}

const CardDescription = forwardRef<HTMLParagraphElement, Props>(
	({children, className, ...rest}, ref) => {
		return (
			<Typography
				ref={ref}
				className={classNames(styles.description, className)}
				color="inherit"
				{...rest}>
				{children}
			</Typography>
		);
	}
);
CardDescription.displayName = "CardDescription";

export default CardDescription;
