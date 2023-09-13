import {HTMLAttributes, forwardRef} from "react";
import Typography from "../../Typography/Typography";

interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, "color"> {}

const CardTitle = forwardRef<HTMLHeadingElement, Props>(
	({children, ...rest}, ref) => {
		return (
			<Typography
				ref={ref}
				variant="h3"
				color="surface"
				colorVariant="contrast"
				{...rest}>
				{children}
			</Typography>
		);
	}
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
