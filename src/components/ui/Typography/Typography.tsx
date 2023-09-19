import classNames from "classnames";
import {ElementType, HTMLAttributes, forwardRef} from "react";
import styles from "./Typography.module.scss";

type Color =
	| "primary"
	| "secondary"
	| "textPrimary"
	| "surface"
	| "background"
	| "success"
	| "danger"
	| "inherit";
type ColorVariant = "main" | "contrast";
type Variant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subheading1"
	| "subheading2"
	| "body1"
	| "body2"
	| "button"
	| "link"
	| "tab";
type TextTransform = "uppercase" | "lowercase" | "capitalize";

interface Props extends HTMLAttributes<HTMLElement> {
	color?: Color;
	as?: ElementType;
	colorVariant?: ColorVariant;
	variant?: Variant;
	noWrap?: boolean;
	textTransform?: TextTransform;
}

const variantToElementMapping: {[key in Variant]: ElementType} = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subheading1: "h6",
	subheading2: "h6",
	body1: "p",
	body2: "p",
	button: "span",
	link: "span",
	tab: "span"
};

const Typography = forwardRef<HTMLElement, Props>(
	(
		{
			children,
			className,
			noWrap,
			textTransform,
			as,
			variant = "body1",
			color = "textPrimary",
			colorVariant = "main",
			...rest
		},
		ref
	) => {
		const Component = as || variantToElementMapping[variant] || "p";

		const styleClassNames = {
			[styles["typography--no-wrap"]]: noWrap,
			[styles[`typography--text-transform-${textTransform}`]]: textTransform,
			[styles[`typography--variant-${variant}`]]: variant,
			[styles[`typography--color-${color}-${colorVariant}`]]:
				color && color !== "inherit",
			[styles["typography--color-inherit"]]: color === "inherit"
		};

		return (
			<Component
				ref={ref}
				className={classNames(styleClassNames, className)}
				{...rest}>
				{children}
			</Component>
		);
	}
);
Typography.displayName = "Typography";

export type {Props as TypographyProps};
export default Typography;
