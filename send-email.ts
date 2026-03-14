import express from 'express';
import nodemailer from 'nodemailer';
import { render } from "@react-email/render";
import FeedbackEmailTemplate from "./emails/feedback-email-template";

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { from, subject, content } = req.body;

  try {
    const emailHtml = await render(FeedbackEmailTemplate({ from, ...content }));
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject,
      html: emailHtml,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.error('Unknown error sending email:', error);
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

const PORT = process.env.API_PORT || 4001;

app.listen(PORT, () => {
  console.log(`✅ Email API running on port ${PORT}`);
});
