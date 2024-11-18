import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/emailTemplate";

interface ContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body: ContactForm = await req.json();

  const { name, email, phoneNumber, message } = body;

  try {
    await resend.emails.send({
      from: "Nielle Portfolio <onboarding@resend.dev>",
      to: "jandnllplz@gmail.com",
      subject: `Portfolio Inquiry: ${name} Interested in Collaborating`,
      react: EmailTemplate({
        name,
        email,
        phoneNumber,
        message,
      }) as React.ReactElement,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Something went wrong while sending email:", error);
    return new Response(JSON.stringify({ message: "Could not send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// Email sending using gmail account

// import nodemailer from "nodemailer";
// import type { NextRequest } from "next/server";

// interface ContactForm {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   message: string;
// }

// export async function POST(req: NextRequest) {
//   const body: ContactForm = await req.json();

//   const { name, email, phoneNumber, message } = body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASSWORD,
//     },
//   });

//   try {
//     const mail = await transporter.sendMail({
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_TO_USER,
//       subject: "New Contact Form Submission",
//       text: `
//       Name: ${name}\n
//       Email: ${email}\n
//       Phone Number: ${phoneNumber}\n
//       Message: ${message}
//     `,
//     });

//     return new Response(
//       JSON.stringify({ message: "Email sent successfully." }),
//       {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     // Similarly, return a Response object for error handling.
//     return new Response(JSON.stringify({ message: "Could not send email." }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
