import {Container, Section, SectionTitle} from "@/components/ui";
import {ProjectSectionId} from "@/lib/constants";
import {FC} from "react";
import styles from "./OverviewSection.module.scss";

interface Props {}

const OverviewSection: FC<Props> = () => {
	return (
		<Section id={ProjectSectionId.OVERVIEW}>
			<Container>
				<SectionTitle className={styles.title}>Overview</SectionTitle>
			</Container>
		</Section>
	);
};

export default OverviewSection;
