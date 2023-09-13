import classNames from "classnames";
import {
	Tabs as ReactTabs,
	ReactTabsFunctionComponent,
	TabsProps
} from "react-tabs";
import styles from "./Tabs.module.scss";

const Tabs: ReactTabsFunctionComponent<TabsProps> = ({className, ...rest}) => {
	return <ReactTabs className={classNames(styles.tabs, className)} {...rest} />;
};
Tabs.tabsRole = "Tabs";

export default Tabs;
