"use client";

import {Button, ButtonLink, TextField} from "@/components/ui";
import {SectionId} from "@/lib/constants";
import {ContactMailInfo} from "@/lib/mail";
import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import ContactFormStatus, {
	ContactFormStatusProps
} from "../ContactFormStatus/ContactFormStatus";
import styles from "./ContactForm.module.scss";

interface FormValues extends ContactMailInfo {}

const ContactForm: FC = () => {
	const [status, setStatus] = useState<ContactFormStatusProps["status"]>(null);
	const {
		register,
		handleSubmit,
		formState: {isSubmitting, errors}
	} = useForm<FormValues>({
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
	});

	const onSubmit: SubmitHandler<FormValues> = async values => {
		setStatus(null);

		const response = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(values)
		});

		if (!response.ok) {
			setStatus("error");
			return;
		}

		setStatus("success");
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ContactFormStatus status={status} />
			<div className={styles.fields}>
				<TextField
					label="Full name"
					error={errors.name?.message}
					inputProps={{
						placeholder: "Max Kyrychenko",
						...register("name", {
							required: "Name is required.",
							maxLength: {
								value: 200,
								message: "Name must be at most 200 characters."
							}
						})
					}}
				/>
				<TextField
					label="Email"
					error={errors.email?.message}
					inputProps={{
						placeholder: "it.maxkirichenko@gmail.com",
						...register("email", {
							required: "Email is required.",
							maxLength: {
								value: 200,
								message: "Email must be at most 200 characters."
							},
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
								message: "Email is invalid."
							}
						})
					}}
				/>
				<TextField
					label="Message"
					isMultiline
					error={errors.message?.message}
					textareaProps={{
						placeholder: "Have a nice day!",
						...register("message", {
							required: "Message is required.",
							minLength: {
								value: 10,
								message: "Message must be at least 10 characters."
							},
							maxLength: {
								value: 200,
								message: "Message must be at most 200 characters."
							}
						})
					}}
				/>
			</div>
			<div className={styles.buttons}>
				<Button type="submit" disabled={isSubmitting}>
					Send
				</Button>
				<ButtonLink href={`#${SectionId.HERO}`} variant="outline">
					To the top
				</ButtonLink>
			</div>
		</form>
	);
};

export default ContactForm;
