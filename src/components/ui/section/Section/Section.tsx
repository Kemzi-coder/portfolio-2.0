import classNames from "classnames";
import {HTMLAttributes, forwardRef} from "react";
import styles from "./Section.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, Props>(
	({children, className, ...rest}, ref) => {
		return (
			<section
				ref={ref}
				className={classNames(styles.section, className)}
				{...rest}>
				{children}
			</section>
		);
	}
);
Section.displayName = "Section";

export default Section;
