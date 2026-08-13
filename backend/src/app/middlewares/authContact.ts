import type { NextFunction, Request, Response } from 'express';

interface ContactData {
    name: string;
    email: string;
    message: string;
}

export function authContactUser (req: Request, res: Response, next: NextFunction) {
    const { name, email, message } = req.body as ContactData;

    if(!name || !email || !message) {
        return res.status(400).json({error: 'All fields must be filled in.'})
    }

    if(name.length < 3) {
        return res.status(400).json({error: 'The name must contain at least 2 letters.'})
    }

    if (name.length > 50) {
        return res.status(400).json({error: 'The name cannot be longer than 50 characters.'});
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook)\.com$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({error: 'Please enter a valid Gmail or Outlook address.'});
    }

    if (!message || message.trim() === "") {
        return res.status(400).json({error: 'Please enter a message.'});
    }

    if (message.length > 500) {
        return res.status(400).json({error: "The message cannot exceed 500 characters."});
    }
    
    return next();
}