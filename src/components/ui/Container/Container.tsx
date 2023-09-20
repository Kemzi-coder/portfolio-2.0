import React, {FC, HTMLAttributes} from "react";
import styles from "./Container.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<Props> = ({children}) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Container;
