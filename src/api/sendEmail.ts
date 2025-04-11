import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { contactName, phone, email, subject, message } = req.body as {
      contactName: string;
      phone: string;
      email: string;
      subject: string;
      message: string;
    };

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
      subject: subject,
      text: `Nome: ${contactName}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar o email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
