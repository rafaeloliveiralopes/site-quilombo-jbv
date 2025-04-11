import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { contactName, phone, email, subject, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject,
    text: `Nome: ${contactName}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      {
        status: 200,
        headers: {
          'Content-Security-Policy': "default-src 'self'; frame-ancestors 'none';",
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
        },
      }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    return NextResponse.json(
      { error: 'Erro ao enviar o email.' },
      {
        status: 500,
        headers: {
          'Content-Security-Policy': "default-src 'self'; frame-ancestors 'none';",
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
        },
      }
    );
  }
}
