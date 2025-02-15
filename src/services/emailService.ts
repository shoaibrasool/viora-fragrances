import emailjs from "@emailjs/browser";
import { EmailParams } from "../types/emailTypes";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;

export const sendOrderEmail = async (emailParams: EmailParams) => {
  try {
    console.log(emailParams);
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailParams,
      USER_ID
    );
    console.log("Email sent successfully!", response.status, response.text);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
