import nodemailer from "nodemailer";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

const required = (name, value) => {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
};

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { allow: "POST" },
      body: "Method Not Allowed",
    };
  }

  try {
    const {
      formType,
      name,
      schoolName,
      contactPerson,
      email,
      phone,
      studentCount,
      deploymentType,
      message,
      website, // honeypot
    } = JSON.parse(event.body || "{}") || {};

    // Honeypot spam protection
    if (typeof website === "string" && website.trim().length > 0) {
      return json(200, { ok: true });
    }

    const smtpHost = required("BREVO_SMTP_HOST", process.env.BREVO_SMTP_HOST);
    const smtpPort = Number(required("BREVO_SMTP_PORT", process.env.BREVO_SMTP_PORT));
    const smtpUser = required("BREVO_SMTP_USER", process.env.BREVO_SMTP_USER);
    const smtpPass = required("BREVO_SMTP_PASS", process.env.BREVO_SMTP_PASS);

    const mailTo = process.env.MAIL_TO || "hello@sableboxx.com";
    const mailFrom = required("MAIL_FROM", process.env.MAIL_FROM);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const cleanFormType =
      typeof formType === "string" && formType.trim() ? formType.trim() : "unknown";

    const subject =
      cleanFormType === "request-demo"
        ? `New demo request${schoolName ? `: ${schoolName}` : ""}`
        : `New website message${name ? `: ${name}` : ""}`;

    const lines = [];
    lines.push(`Form: ${cleanFormType}`);
    lines.push(`Date: ${new Date().toISOString()}`);
    lines.push("");

    if (cleanFormType === "request-demo") {
      lines.push(`School Name: ${schoolName || ""}`);
      lines.push(`Contact Person: ${contactPerson || ""}`);
      lines.push(`Email: ${email || ""}`);
      lines.push(`Phone: ${phone || ""}`);
      lines.push(`Students: ${studentCount || ""}`);
      lines.push(`Deployment: ${deploymentType || ""}`);
    } else {
      lines.push(`Name: ${name || ""}`);
      lines.push(`Email: ${email || ""}`);
      lines.push("");
      lines.push("Message:");
      lines.push(message || "");
    }

    const text = lines.join("\n").trim() + "\n";

    await transporter.sendMail({
      to: mailTo,
      from: mailFrom,
      replyTo: email || undefined,
      subject,
      text,
    });

    return json(200, { ok: true });
  } catch (err) {
    return json(500, {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
