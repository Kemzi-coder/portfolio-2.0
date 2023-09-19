import {BenefitCard} from "@/components";
import styles from "./BenefitList.module.scss";
import {Benefit} from "@/lib/data";
import {FC} from "react";

interface Props {
	benefits: Benefit[];
}

const BenefitList: FC<Props> = ({benefits}) => {
	return (
		<div className={styles.list}>
			{benefits.map(benefit => (
				<BenefitCard key={benefit.id} benefit={benefit} />
			))}
		</div>
	);
};

export default BenefitList;
