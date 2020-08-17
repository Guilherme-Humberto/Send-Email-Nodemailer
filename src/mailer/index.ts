// Criando Transportador do multer

import nodemailer from 'nodemailer';
import mailer from '../config/mailer';
export const transporter = nodemailer.createTransport(mailer);
