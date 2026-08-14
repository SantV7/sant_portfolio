import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';


interface ContactData {
    name: string;
    email: string;
    message: string;
}

export async function ContactUser (req: Request, res: Response) {
    const { name, email, message } = req.body as ContactData;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Contato do Portfólio - ${name}`,
            text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
            html: `<h3>Novo contato do Portfólio</h3><p><b>Nome:</b> ${name}</p><p><b>E-mail:</b> ${email}</p><p><b>Mensagem:</b> ${message}</p>`
        })

        return res.status(200).json({success: 'Message sent sucessfully!'})

    } catch (err: any) {
            console.error("ERRO COMPLETO:", err);
            return res.status(500).json({ error: 'Internal server error while sending email.' });
    } 

}