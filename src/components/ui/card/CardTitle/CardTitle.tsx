import {HTMLAttributes, forwardRef} from "react";
import Typography from "../../Typography/Typography";
import styles from "./CardTitle.module.scss";
import classNames from "classnames";

interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, "color"> {}

const CardTitle = forwardRef<HTMLHeadingElement, Props>(
	({children, className, ...rest}, ref) => {
		return (
			<Typography
				ref={ref}
				className={classNames(styles.title, className)}
				color="inherit"
				variant="h3"
				{...rest}>
				{children}
			</Typography>
		);
	}
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
