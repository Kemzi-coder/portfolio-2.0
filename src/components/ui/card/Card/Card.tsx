import classNames from "classnames";
import {HTMLAttributes, forwardRef} from "react";
import styles from "./Card.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, Props>(
	({className, children, ...rest}, ref) => {
		return (
			<div ref={ref} className={classNames(styles.card, className)} {...rest}>
				{children}
			</div>
		);
	}
);
Card.displayName = "Card";

export default Card;
