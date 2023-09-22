import {ButtonLink, Container, Typography} from "@/components/ui";
import {SectionId} from "@/lib/constants";
import LanguageButtons from "../LanguageButtons/LanguageButtons";
import ScrollDownLink from "../ScrollDownLink/ScrollDownLink";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
	return (
		<section id={SectionId.HERO} className={styles.section}>
			<Container>
				<div className={styles.inner}>
					<div className={styles.content}>
						<Typography
							className={styles.title}
							variant="h1"
							color="background"
							colorVariant="contrast">
							Hello, my name is <br />
							Max Kyrychenko
						</Typography>
						<Typography className={styles.subtitle} variant="h6">
							I am javascript developer and open to working with you.
						</Typography>
						<div className={styles.buttons}>
							<ButtonLink href={`#${SectionId.PROJECTS}`}>
								Find out more
							</ButtonLink>
							<ButtonLink
								variant="outline"
								href="https://github.com/Kemzi-coder"
								target="_blank">
								Github
							</ButtonLink>
						</div>
					</div>
				</div>
				{/* TODO: Implement internationalization */}
				{/* <div className={styles["bottom-left-block"]}>
					<LanguageButtons />
				</div> */}
				<div className={styles["bottom-center-block"]}>
					<ScrollDownLink href={`#${SectionId.PROJECTS}`} />
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
