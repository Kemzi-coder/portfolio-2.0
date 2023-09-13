import classNames from "classnames";
import {
	TabPanel as ReactTabPanel,
	ReactTabsFunctionComponent,
	TabPanelProps
} from "react-tabs";
import styles from "./TabPanel.module.scss";

const TabPanel: ReactTabsFunctionComponent<TabPanelProps> = ({
	className,
	...rest
}) => {
	return (
		<ReactTabPanel
			className={classNames(styles.panel, className)}
			selectedClassName={styles["panel--selected"]}
			{...rest}
		/>
	);
};
TabPanel.tabsRole = "TabPanel";

export default TabPanel;
