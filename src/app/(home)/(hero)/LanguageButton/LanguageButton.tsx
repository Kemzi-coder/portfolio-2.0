import {Typography} from "@/components/ui";
import React, {ButtonHTMLAttributes, FC} from "react";
import styles from "./LanguageButton.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
}

const LanguageButton: FC<Props> = ({
	children,
	className,
	isActive,
	...rest
}) => {
	return (
		<button
			className={classNames(
				styles.button,
				{[styles["button--active"]]: isActive},
				className
			)}
			type="button"
			{...rest}>
			<Typography color="inherit" textTransform="uppercase" variant="button">
				{children}
			</Typography>
		</button>
	);
};

export default LanguageButton;
