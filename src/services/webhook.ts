import type { FormData } from "../types/form";

export async function sendFormData(data: FormData) {
  const WEBHOOK_URL =
    "https://amanverma007.app.n8n.cloud/webhook-test/contact-form";
  //  "https://amanverma007.app.n8n.cloud/webhook/contact-form";
  // const TEST_URL =
  //   "https://amanverma007.app.n8n.cloud/webhook-test/contact-form";

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}
