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
			<svg className={styles.icon} viewBox="0 0 100 100" width="80">
				<path
					className={classNames(styles.line, styles["line--top"])}
					d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
				/>
				<path className={styles.line} d="m 70,50 h -40" />
				<path
					className={classNames(styles.line, styles["line--bottom"])}
					d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
				/>
			</svg>
		</button>
	);
};

export default BurgerButton;
