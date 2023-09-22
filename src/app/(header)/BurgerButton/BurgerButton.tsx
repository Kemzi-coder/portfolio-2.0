import React, {ButtonHTMLAttributes, FC} from "react";
import styles from "./BurgerButton.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
}

const BurgerButton: FC<Props> = ({className, isActive, ...rest}) => {
	return (
		<button
			className={classNames(
				styles.button,
				{[styles["button--active"]]: isActive},
				className
			)}
			type="button"
			{...rest}>
			<span />
			<span />
			<span />
		</button>
	);
};

export default BurgerButton;
