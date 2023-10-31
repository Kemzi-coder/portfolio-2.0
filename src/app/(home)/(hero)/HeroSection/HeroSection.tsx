import {
	ButtonLink,
	Container,
	Typography,
	ScrollDownLink
} from "@/components/ui";
import {HomeSectionId} from "@/lib/constants";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
	return (
		<section id={HomeSectionId.HERO} className={styles.section}>
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
							<ButtonLink href={`#${HomeSectionId.PROJECTS}`}>
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
					<ScrollDownLink href={`#${HomeSectionId.PROJECTS}`} />
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
