import { useState, type FormEvent } from "react";
import styles from './FormContactMe.module.css';
import { Form, UserRoundPen, Mailbox, MessagesSquare} from 'lucide-react';

const FormContactMe = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (name.trim() === "") {
            return setError('A name is required to send.');
        }

        if (name.length < 2) {
            return setError('The name must contain at least 2 letters.');
        }

        if (name.length > 50) {
            return setError('The name cannot be longer than 50 characters.');
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook)\.com$/;
        if (!email || !emailRegex.test(email)) {
            return setError('Please enter a valid Gmail or Outlook address.');
        }

        if (!message || message.trim() === "") {
            return setError('Please enter a message.');
        }

        if (message.length > 500) {
            return setError("The message cannot exceed 500 characters.");
        }

        setLoading(true);

        try {
            const res = await fetch(`https://sant-portfolio.onrender.com/contact_aivy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send message.');
            }

            setSuccess('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err: any) {
            setError(err.message || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contactSection}>
            <form
              onSubmit={handleSubmit}
              className={styles.formContainer}
            >
                <Form color="white" size={30}/>

                <div className={styles.inputGroup}>
                    <label htmlFor="nameUser">Name <UserRoundPen  style={{marginBottom: '-4px'}}/></label>
                    <input
                        id="nameUser"
                        required 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Your name"
                        />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="emailUser">Email <Mailbox  style={{marginBottom: '-4px'}}/></label>
                    <input
                        id="emailUser"
                        required 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="your.email@gmail.com"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="msgUser">Message <MessagesSquare  style={{marginBottom: '-4px'}}/></label>
                    <textarea
                        id="msgUser"
                        required 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Write your message here..."
                        />
                </div>
                  {error && <div className={styles.errorMessage}>{error}</div>}
                  {success && <div className={styles.successMessage}>{success}</div>}

                <button 
                   type="submit" 
                   disabled={loading} 
                   className={styles.submitButton}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
};

export default FormContactMe;