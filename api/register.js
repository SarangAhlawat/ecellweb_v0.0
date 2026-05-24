import { neon } from "@neondatabase/serverless";
import Resend from "resend";

const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.EMAIL_FROM || "E-Cell <no-reply@yourdomain.com>";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    try {
        const {
            name,
            email,
            phone,
            city,
            designation,

            college,
            year,
            course,

            companyName,
            companyWork,

            organization,
            role,
            experience,

            interest,
            startupBelief,
            sessionMotivation
        } = req.body;

        await sql`

        INSERT INTO registrations(

            name,
            email,
            phone,
            city,
            designation,

            college,
            year,
            course,

            company_name,
            company_work,

            organization,
            role,
            experience,

            interest,
            startup_belief,
            session_motivation

        )

        VALUES(

            ${name},
            ${email},
            ${phone},
            ${city},
            ${designation},

            ${college},
            ${year},
            ${course},

            ${companyName},
            ${companyWork},

            ${organization},
            ${role},
            ${experience},

            ${interest},
            ${startupBelief},
            ${sessionMotivation}

        )

        `;

                // Build a concise, responsive HTML email (white + violet metallic theme)
                const html = `
    <div style="font-family:'Space Grotesk','IBM Plex Sans','Segoe UI',Arial,sans-serif;background:#0b0b14;padding:30px 15px;color:#e5e7eb;">

    <div style="max-width:620px;margin:0 auto;background:#12121f;border:1px solid #27273b;border-radius:22px;overflow:hidden;box-shadow:0 0 30px rgba(124,58,237,.15);">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#7c3aed,#4f46e5,#06b6d4);padding:32px 24px;text-align:center;position:relative;">
            
            <div style="font-family:'Orbitron','Space Grotesk',sans-serif;
                        letter-spacing:2px;
                        font-size:14px;
                        text-transform:uppercase;
                        opacity:.9;">
                E-CELL CGC LANDRAN
            </div>

            <h1 style="margin:12px 0 6px;
                       font-size:28px;
                       color:#fff;
                       font-weight:700;">
                Registration Confirmed
            </h1>

            <p style="margin:0;
                      color:#e9d5ff;
                      font-size:15px;">
                Welcome aboard, <strong>${name}</strong>
            </p>
        </div>

        <!-- Body -->
        <div style="padding:28px;">

            <!-- User Details -->
            <div style="background:rgba(255,255,255,.03);
                        border:1px solid rgba(255,255,255,.08);
                        border-radius:18px;
                        padding:20px;
                        margin-bottom:22px;">

                <h2 style="margin:0 0 18px;
                           color:#c4b5fd;
                           font-size:18px;
                           font-weight:600;">
                    Your Registration
                </h2>

                <table style="width:100%;
                              border-collapse:collapse;
                              font-size:14px;">
                    <tr>
                        <td style="padding:10px 0;color:#9ca3af;width:35%;">
                            Name
                        </td>
                        <td style="padding:10px 0;color:#fff;">
                            ${name}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px 0;color:#9ca3af;">
                            Email
                        </td>
                        <td style="padding:10px 0;color:#fff;">
                            ${email}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px 0;color:#9ca3af;">
                            Phone
                        </td>
                        <td style="padding:10px 0;color:#fff;">
                            ${phone || '—'}
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Event Card -->
            <div style="background:linear-gradient(145deg,#151528,#1d1d35);
                        border:1px solid rgba(139,92,246,.35);
                        border-radius:20px;
                        padding:22px;">

                <div style="display:inline-block;
                            background:rgba(124,58,237,.15);
                            border:1px solid rgba(196,181,253,.25);
                            color:#c4b5fd;
                            padding:7px 14px;
                            border-radius:999px;
                            font-size:12px;
                            font-weight:600;
                            letter-spacing:.5px;
                            margin-bottom:16px;">
                    LIVE SESSION
                </div>

                <h3 style="margin:0 0 16px;
                           color:#fff;
                           font-size:22px;">
                    Design Thinking Live
                </h3>

                <div style="font-size:15px;color:#d1d5db;line-height:1.9;">
                    <div><strong style="color:#fff;">Date:</strong> 29 May 2026 (Friday)</div>
                    <div><strong style="color:#fff;">Time:</strong> 3:00 PM - 4:00 PM</div>
                    <div style="margin-top:6px;">
                        <strong style="color:#fff;">Speaker:</strong>
                        <a href="https://www.linkedin.com/in/anujgsharma/"
                           style="color:#8b5cf6;text-decoration:none;">
                           Mr. Anuj Sharma (Founder ALSiSAR IMPACT)
                        </a>
                    </div>
                </div>

                <div style="margin-top:18px;
                            padding:16px;
                            background:rgba(255,255,255,.03);
                            border-left:3px solid #8b5cf6;
                            border-radius:12px;
                            color:#d1d5db;
                            font-size:14px;
                            line-height:1.7;">
                    Design thinking in startups is a human-centered approach to building solutions; understanding customer needs, solving real problems, and turning ideas into impactful innovation.
                </div>

                <!-- CTA -->
                <div style="text-align:center;margin-top:28px;">

                    <p style="font-size:14px;color:#9ca3af;margin-bottom:18px;">
                        Live link activates <strong>1 hour before</strong> the session.
                    </p>

                    <a href="https://ecellcgc.in/live"
                       style="display:inline-block;
                              padding:14px 28px;
                              border-radius:14px;
                              background:linear-gradient(90deg,#7c3aed,#4f46e5);
                              color:#fff;
                              text-decoration:none;
                              font-weight:600;
                              box-shadow:0 0 20px rgba(124,58,237,.35);">
                        https://ecellcgc.in/live
                    </a>
                </div>

            </div>
        </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;
                margin-top:20px;
                color:#7c7c9b;
                font-size:12px;">
        © E-Cell CGC •
        <a href="https://ecellcgc.in/privacy"
           style="color:#a78bfa;text-decoration:none;">
           Privacy Policy
        </a>
    </div>

</div>
`;

        // Send confirmation email using Resend
        try {
            await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: `Registration Confirmed — E-Cell Session`,
                html
            });
        } catch (mailErr) {
            console.error('Email send failed:', mailErr);
            // Do not fail the whole request if email sending fails; return registration success but note warning
            return res.status(200).json({ success: true, emailSent: false, warning: 'Registration saved but confirmation email failed to send.' });
        }

        return res.status(200).json({ success: true, emailSent: true });

    } catch (error) {
        console.log(error);

        // Handle unique constraint violation (duplicate email)
        if (error && error.code === "23505") {
            return res.status(400).json({
                success: false,
                message: "This email is already registered. Please use a different email or contact support."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Registration failed. Please try again later."
        });
    }

}