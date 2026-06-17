import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gouravgodara6125@gmail.com",
      subject: `New message from ${name} — Portfolio Contact`,
      html: `
        <div style="background: #0a0a0a; padding: 32px 16px;"><div style="font-family: sans-serif; max-width: 720px; width: 100%; margin: 0 auto; background: #0f0f0f; color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #1f1f1f;">
          
          <!-- Header -->
          <div style="background: #161616; padding: 36px 40px; border-bottom: 1px solid #2a2a2a;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: #F5A623;"></div>
              <span style="color: #F5A623; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;">Portfolio Contact</span>
            </div>
            <h1 style="margin: 16px 0 0; font-size: 28px; font-weight: 900; color: #ffffff;">
              New Message 
              <span style="color: #F5A623;">Received</span>
            </h1>
          </div>

          <!-- Body -->
          <div style="padding: 36px 40px;">

            <!-- Name -->
            <div style="margin-bottom: 20px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
              <p style="margin: 0 0 6px; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.15em;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: 700; color: #ffffff;">${name}</p>
            </div>

            <!-- Email -->
            <div style="margin-bottom: 24px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
              <p style="margin: 0 0 6px; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.15em;">Reply To</p>
              <a href="mailto:${email}" style="margin: 0; font-size: 16px; font-weight: 700; color: #F5A623; text-decoration: none;">${email}</a>
            </div>

            <!-- Message -->
            <div style="background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 20px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 3px; height: 14px; background: #F5A623; border-radius: 2px; flex-shrink: 0;"></div>
                <p style="margin: 0; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.15em;">Message</p>
              </div>
              <div style="border-top: 1px solid #2a2a2a; padding-top: 16px;">
                <p style="margin: 0; font-size: 15px; color: #d1d5db; line-height: 1.9; white-space: pre-wrap; word-break: break-word;">${message}</p>
              </div>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your message on Gourav's Portfolio"
                style="display: inline-block; padding: 14px 32px; background: #F5A623; color: #0a0a0a; font-weight: 800; font-size: 14px; border-radius: 12px; text-decoration: none;">
                Reply to ${name} →
              </a>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 24px 40px; border-top: 1px solid #2a2a2a; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #4b5563;">
              Sent from your portfolio contact form · gouravgodara6125@gmail.com
            </p>
          </div>

        </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });

  } catch (err) {
    console.error("Send route error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
