import {Typography} from "@/components/ui";
import classNames from "classnames";
import {AnchorHTMLAttributes, FC} from "react";
import styles from "./ScrollDownLink.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const ScrollDownLink: FC<Props> = ({className, ...rest}) => {
	return (
		<a className={classNames(styles.link, className)} {...rest}>
			<Typography className={styles.text}>Scroll down</Typography>
			<div className={styles.icon} />
		</a>
	);
};

export default ScrollDownLink;
