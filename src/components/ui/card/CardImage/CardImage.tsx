import React, {forwardRef} from "react";
import Image, {ImageProps} from "next/image";

const CardImage = forwardRef<HTMLImageElement, ImageProps>(
	({alt = "card", ...rest}, ref) => {
		return <Image ref={ref} alt={alt} {...rest} />;
	}
);
CardImage.displayName = "CardImage";

export default CardImage;
