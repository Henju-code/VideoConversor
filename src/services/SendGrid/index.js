import axios from "axios";

const url = 'https://api.sendgrid.com/v3/mail/send';

const token = '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';

export const verificationCode = '2021';

export async function sendEmailVerification (email) {
    const data = JSON.stringify({
        "personalizations": [{ "to": [{ "email": `${email}` }] }],
        "from": { "email": "henjucode@gmail.com" },
        "subject": "Your verification code",
        "content": [{ "type": "text/plain", "value": `Your code is: ${verificationCode}` }]
    });

    await axios.post(
        url,
        data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}