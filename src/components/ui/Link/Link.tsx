import React, {AnchorHTMLAttributes, forwardRef} from "react";
import Typography from "../Typography/Typography";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = forwardRef<HTMLAnchorElement, Props>(
	({children, ...rest}, ref) => {
		return (
			<a ref={ref} {...rest}>
				<Typography variant="link">{children}</Typography>
			</a>
		);
	}
);
Link.displayName = "Link";

export default Link;
