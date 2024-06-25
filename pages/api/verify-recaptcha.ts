import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: boolean;
    message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { recaptchaToken } = req.body;

        if (!recaptchaToken) {
            return res.status(400).json({ success: false, message: 'reCAPTCHA token is missing.' });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

        try {
            const response = await fetch(verifyUrl, {
                method: 'POST',
            });

            const data = await response.json();

            if (data.success) {
                return res.status(200).json({ success: true });
            } else {
                return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
            }
        } catch (error) {
            console.error('Error verifying reCAPTCHA:', error);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
