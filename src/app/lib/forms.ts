export type FormType = "request-demo" | "contact";

export type SubmitPayload = {
  formType: FormType;
  website?: string; // honeypot

  // Request demo
  schoolName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  studentCount?: string;
  deploymentType?: string;

  // Contact
  name?: string;
  message?: string;
};

export async function submitForm(payload: SubmitPayload) {
  const res = await fetch("/.netlify/functions/send-mail", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || "Failed to submit form");
  }

  return data as { ok: true };
}
