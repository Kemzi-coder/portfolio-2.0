import {ContactMailInfo, sendContactMail} from "@/lib/mail";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
	const {name, email, message}: ContactMailInfo = await request.json();

	await sendContactMail({name, email, message});

	return NextResponse.json({success: true});
}
