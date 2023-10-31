import {Container, Section, Typography} from "@/components/ui";
import {HomeSectionId} from "@/lib/constants";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
	return (
		<Section id={HomeSectionId.CONTACT}>
			<Container>
				<Typography
					className={styles.title}
					variant="h1"
					color="background"
					colorVariant="contrast">
					Contact me
				</Typography>

				<Typography className={styles.subtitle} variant="h6">
					Fill out the short form and send it to me, I&apos;ll get back to you
					shortly!
				</Typography>
				<div className={styles.form}>
					<ContactForm />
				</div>
			</Container>
		</Section>
	);
};

export default ContactSection;
