import classNames from "classnames";
import {
	TabList as ReactTabList,
	ReactTabsFunctionComponent,
	TabListProps
} from "react-tabs";
import styles from "./TabList.module.scss";

const TabList: ReactTabsFunctionComponent<TabListProps> = ({
	className,
	...rest
}) => {
	return (
		<ReactTabList className={classNames(styles.list, className)} {...rest} />
	);
};
TabList.tabsRole = "TabList";

export default TabList;
