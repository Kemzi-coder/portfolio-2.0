import classNames from "classnames";
import {
	Tab as ReactTab,
	ReactTabsFunctionComponent,
	TabProps
} from "react-tabs";
import styles from "./Tab.module.scss";
import Typography from "../../Typography/Typography";

const Tab: ReactTabsFunctionComponent<TabProps> = ({
	className,
	children,
	...rest
}) => {
	return (
		<ReactTab
			className={classNames(styles.tab, className)}
			selectedClassName={styles["tab--selected"]}
			disabledClassName={styles["tab--disabled"]}
			{...rest}>
			<Typography
				color="primary"
				colorVariant="contrast"
				textTransform="uppercase"
				variant="tab"
				noWrap>
				{children}
			</Typography>
		</ReactTab>
	);
};
Tab.tabsRole = "Tab";

export default Tab;
