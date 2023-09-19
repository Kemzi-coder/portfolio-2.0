import React, {forwardRef} from "react";
import Image, {ImageProps} from "next/image";

const CardImage = forwardRef<HTMLImageElement, ImageProps>(
	({alt = "card", width = 100, height = 100, ...rest}, ref) => {
		return (
			<Image ref={ref} alt={alt} width={width} height={height} {...rest} />
		);
	}
);
CardImage.displayName = "CardImage";

export default CardImage;
