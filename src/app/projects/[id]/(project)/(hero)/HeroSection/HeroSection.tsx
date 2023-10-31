import {
	ButtonLink,
	Container,
	ScrollDownLink,
	Typography
} from "@/components/ui";
import {ProjectSectionId} from "@/lib/constants";
import {Project} from "@prisma/client";
import {FC} from "react";
import styles from "./HeroSection.module.scss";

interface Props {
	name: Project["name"];
	url: Project["url"];
	repoUrl: Project["repoUrl"];
}

const HeroSection: FC<Props> = ({name, repoUrl, url}) => {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.inner}>
					<div className={styles.content}>
						<Typography
							className={styles.title}
							variant="h1"
							color="background"
							colorVariant="contrast">
							{name}
						</Typography>
						<Typography className={styles.subtitle} variant="h6">
							This page contains the case study of Dopefolio Open-Source Project
							which includes the Project Overview, Tools Used and Live Links to
							the official product.
						</Typography>
						<div className={styles.buttons}>
							<ButtonLink href={url} target="_blank">
								Project link
							</ButtonLink>
							<ButtonLink variant="outline" href={repoUrl} target="_blank">
								Github repo
							</ButtonLink>
						</div>
					</div>
				</div>
				<div className={styles["bottom-center-block"]}>
					<ScrollDownLink href={`#${ProjectSectionId.OVERVIEW}`} />
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
