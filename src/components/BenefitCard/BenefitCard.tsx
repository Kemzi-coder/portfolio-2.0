import {Benefit} from "@/lib/data";
import {FC} from "react";
import {Card, CardDescription, CardImage, CardTitle} from "../ui";
import styles from "./BenefitCard.module.scss";

interface Props {
	benefit: Benefit;
}

const BenefitCard: FC<Props> = ({benefit}) => {
	return (
		<Card>
			<CardImage className={styles.image} src={benefit.image} alt="benefit" />
			<CardTitle className={styles.title}>{benefit.title}</CardTitle>
			<CardDescription>{benefit.description}</CardDescription>
		</Card>
	);
};

export default BenefitCard;
