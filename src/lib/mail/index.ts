import nodemailer from "nodemailer";
import {ContactMailInfo} from "./types";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_FROM = process.env.SMTP_FROM;
const SMTP_TO = process.env.SMTP_TO;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_FROM || !SMTP_TO || !SMTP_PASSWORD) {
	throw new Error(
		"Some SMTP variables are not defined in the .env file. Check the .env.local.example file to verify its structure."
	);
}

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: false,
	auth: {
		user: SMTP_FROM,
		pass: SMTP_PASSWORD
	}
});

const sendContactMail = async ({
	name,
	email,
	message
}: ContactMailInfo): Promise<void> => {
	await transporter.sendMail({
		from: SMTP_FROM,
		to: SMTP_TO,
		subject: `${name} has contacted!`,
		text: "",
		html: `
			<div>
				<h1>${name}</h1>
				<h2>${email}</h2>
				<p>${message}</p>
			</div>
		`
	});
};

export type {ContactMailInfo};
export {sendContactMail};
