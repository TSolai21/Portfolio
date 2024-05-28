import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptionToMe = {
      from: process.env.USER,
      to: process.env.USER,
      subject: "New Mail from Portfolio",
      text: "",
      html: `
          <h3>Hello Kumar</h3>
          <p>You have a message from ${name}</p>
          <p> ${message}</p> 
          `,
    };

    const mailOptions = {
      from: {
        name: "Solaikumar",
        address: process.env.USER,
      },
      to: email,
      subject: "New Mail from Solaikumar",
      text: "",
      html: `
        <h3>Hello ${name}</h3>
        <p> Thanks for contacting me ,Will get back to you soon</p> 
        `,
    };
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionToMe);

    console.log(name, email, message);
    return NextResponse.json(
      { message: "Mail sent successfully " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
