import {Typography} from "@/components/ui";
import {FC} from "react";
import styles from "./ContactFormStatus.module.scss";

type FormStatus = "success" | "error";

interface Props {
	status: FormStatus | null;
}

const ContactFormStatus: FC<Props> = ({status}) => {
	if (!status) {
		return null;
	}

	const color = status === "success" ? "success" : "danger";
	const message =
		status === "success"
			? "The form has been successfully submitted."
			: "Something went wrong.";
	return (
		<Typography className={styles.status} color={color}>
			{message}
		</Typography>
	);
};

export type {Props as ContactFormStatusProps};
export default ContactFormStatus;
