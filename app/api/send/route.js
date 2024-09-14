import { EmailTemplate } from '../../_component/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, firstName, orderDetails } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: 'Order Confirmation',
      react: EmailTemplate({ firstName, orderDetails }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
