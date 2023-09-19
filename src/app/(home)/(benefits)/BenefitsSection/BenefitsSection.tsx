import {Container, Section, SectionTitle} from "@/components/ui";
import {SectionId} from "@/lib/constants";
import BenefitList from "../BenefitList/BenefitList";
import styles from "./BenefitsSection.module.scss";
import {benefits} from "@/lib/data";

const BenefitsSection = () => {
	return (
		<Section id={SectionId.BENEFITS}>
			<Container>
				<SectionTitle className={styles.title}>Benefits</SectionTitle>
				<BenefitList benefits={benefits} />
			</Container>
		</Section>
	);
};

export default BenefitsSection;
