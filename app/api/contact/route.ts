import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create reusable transporter using SMTP configuration
function createTransporter() {
  const hostname = process.env.SMTP_HOSTNAME;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!hostname || !user || !password) {
    throw new Error("SMTP configuration is incomplete");
  }

  return nodemailer.createTransport({
    host: hostname,
    port: port,
    secure: port === 465, // true for 465, false for other ports like 587
    auth: {
      user: user,
      pass: password,
    },
  });
}

// Email template for admin
function getAdminEmailTemplate(
  type: string,
  name: string,
  email: string,
  company: string,
  message: string
) {
  const typeLabel: Record<string, string> = {
    investor: "Investor",
    corporate: "Corporate Buyer",
    developer: "Project Developer",
    partner: "Potential Partner",
    other: "Other",
  };

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 0; }
      .header { background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%); color: white; padding: 30px 20px; text-align: center; }
      .header h2 { margin: 0; font-size: 24px; }
      .content { background: #f9fafb; padding: 30px; }
      .field { margin-bottom: 20px; display: flex; }
      .field-label { font-weight: 600; color: #16a34a; width: 120px; flex-shrink: 0; }
      .field-value { color: #666; }
      .message-section { margin-top: 25px; }
      .message-box { background: white; padding: 20px; border-left: 4px solid #16a34a; margin-top: 10px; white-space: pre-wrap; word-wrap: break-word; }
      .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #e5e7eb; }
      .divider { border-top: 1px solid #e5e7eb; margin: 20px 0; }
      a { color: #16a34a; text-decoration: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📬 New Contact Form Submission</h2>
      </div>
      <div class="content">
        <div class="field">
          <div class="field-label">Category:</div>
          <div class="field-value"><strong>${typeLabel[type] || "Other"}</strong></div>
        </div>
        
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value"><strong>${name}</strong></div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value"><a href="mailto:${email}">${email}</a></div>
        </div>
        
        ${
          company
            ? `<div class="field">
          <div class="field-label">Company:</div>
          <div class="field-value">${company}</div>
        </div>`
            : ""
        }
        
        <div class="divider"></div>
        
        <div class="message-section">
          <div class="field-label">Message:</div>
          <div class="message-box">${message}</div>
        </div>
      </div>
      <div class="footer">
        <p>This email was sent from the NCRB contact form.</p>
        <p><strong>Reply directly to:</strong> ${email}</p>
      </div>
    </div>
  </body>
</html>
  `;
}

// Confirmation email for user
function getUserConfirmationTemplate(name: string) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 0; }
      .header { background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%); color: white; padding: 30px 20px; text-align: center; }
      .header h2 { margin: 0; font-size: 24px; }
      .content { background: #f9fafb; padding: 30px; }
      .greeting { font-size: 18px; color: #333; margin-bottom: 20px; }
      .message { color: #666; margin-bottom: 20px; line-height: 1.8; }
      .highlight { background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0; }
      .contact-section { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb; }
      .contact-item { margin: 12px 0; }
      .icon { margin-right: 8px; }
      .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #e5e7eb; }
      a { color: #16a34a; text-decoration: none; }
      a:hover { text-decoration: underline; }
      strong { color: #16a34a; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>✓ Message Received</h2>
      </div>
      <div class="content">
        <div class="greeting">Hi ${name},</div>
        
        <div class="message">
          Thank you for reaching out to <strong>NCRB</strong>! We've received your message and truly appreciate your interest in partnering with us.
        </div>
        
        <div class="highlight">
          <strong>Next Steps:</strong><br>
          Our team will review your inquiry and respond within <strong>24-48 hours</strong> with personalized guidance and next steps tailored to your needs.
        </div>
        
        <div class="message">
          In the meantime, feel free to reach out to our teams directly:
        </div>
        
        <div class="contact-section">
          <div class="contact-item">
            <span class="icon">📧</span>
            <a href="mailto:info@NCRB.world">info@NCRB.world</a>
          </div>
          
          <div class="contact-item">
            <span class="icon">🇺🇸</span> World Headquarters (US)<br>
            <a href="tel:+17812662004">+1-781-266-2004</a>
          </div>
          
          <div class="contact-item">
            <span class="icon">🌎</span> Americas & Europe<br>
            <a href="tel:+16048094334">+1-604-809-4334</a>
          </div>
          
          <div class="contact-item">
            <span class="icon">🌏</span> Asia-Pacific<br>
            <a href="tel:+8801703727060">+880-1703-727060</a>
          </div>
        </div>
        
        <div class="message">
          We look forward to exploring exciting opportunities together!
        </div>
      </div>
      <div class="footer">
        <p>&copy; 2026 Natural Capital ReBank. All rights reserved.</p>
        <p>This is an automated response. Your message has been safely received.</p>
      </div>
    </div>
  </body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // Check SMTP configuration
    if (!process.env.SMTP_HOSTNAME || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP configuration is incomplete");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Get admin email
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    if (!adminEmail) {
      console.error("Admin email not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Prepare email templates
    const adminEmailHtml = getAdminEmailTemplate(type, name, email, company, message);
    const userConfirmationHtml = getUserConfirmationTemplate(name);

    // Get from email (sender email)
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

    // Send admin notification
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Submission: ${name} (${type})`,
      html: adminEmailHtml,
      replyTo: email,
    });

    // Send user confirmation
    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: "We Received Your Message - NCRB",
      html: userConfirmationHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}