"use server";

import { Resend } from "resend";

type ActionState = { status: "idle" | "success" | "error"; message?: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const senderEmail = (formData.get("senderEmail") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!senderEmail || !message) {
    return { status: "error", message: "Missing fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mohammed.elahmar@uit.ac.ma",
      subject: "New Message from Command Center",
      replyTo: senderEmail,
      text: message,
    });

    if (data.error) {
      return { status: "error", message: "Failed to send email" };
    }

    return { status: "success", message: "Signal transmitted successfully." };
  } catch (error) {
    console.error("Resend send error", error);
    return { status: "error", message: "Failed to send email" };
  }
}
