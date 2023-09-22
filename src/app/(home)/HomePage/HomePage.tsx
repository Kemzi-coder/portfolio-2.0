import BenefitsSection from "../(benefits)";
import ContactSection from "../(contact)";
import Header from "../(header)";
import HeroSection from "../(hero)";
import ProjectsSection from "../(projects)";
import FloatingCircle from "../FloatingCircle/FloatingCircle";
import styles from "./HomePage.module.scss";

const HomePage = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<HeroSection />
				<div className={styles["sections-wrapper"]}>
					<div className={styles.sections}>
						<ProjectsSection />
						<BenefitsSection />
						<ContactSection />
					</div>
				</div>
				<div className={styles.circle}>
					<FloatingCircle radius={300} />
				</div>
			</main>
		</>
	);
};

export default HomePage;
