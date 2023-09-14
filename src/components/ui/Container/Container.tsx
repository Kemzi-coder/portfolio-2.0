import React, {FC, HTMLAttributes} from "react";
import styles from "./Container.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<Props> = ({children}) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
