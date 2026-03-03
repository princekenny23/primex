import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, employeeCount, modules, preferredDate, message } = body;

    // Validate required fields
    if (!name || !email || !company || !phone || !employeeCount || !modules || modules.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // Examples: SendGrid, AWS SES, Resend, Nodemailer, etc.
    
    // For now, we'll just log the data
    console.log('Demo Request Submission:', {
      name,
      email,
      company,
      phone,
      employeeCount,
      modules,
      preferredDate,
      message,
      timestamp: new Date().toISOString()
    });

    /*
    // Example using Nodemailer (you would need to install nodemailer):
    
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'sales@primexltd.com',
      subject: `New Demo Request from ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Employee Count:</strong> ${employeeCount}</p>
        <p><strong>Modules of Interest:</strong> ${modules.join(', ')}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Additional Comments:</strong></p>
        <p>${message || 'None'}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
