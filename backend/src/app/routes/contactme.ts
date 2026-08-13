import { Router } from 'express';
import { authContactUser } from '../middlewares/authContact.ts';
import { ContactUser } from '../controllers/contactMeController.ts';

export const contactRoute = Router();

contactRoute.post('/contact_aivy', authContactUser, ContactUser )