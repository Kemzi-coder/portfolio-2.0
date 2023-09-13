import React, {HTMLAttributes, forwardRef} from "react";
import Typography from "../../Typography/Typography";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, Props>(
	({children}, ref) => {
		return <Typography ref={ref}>{children}</Typography>;
	}
);
CardDescription.displayName = "CardDescription";

export default CardDescription;
