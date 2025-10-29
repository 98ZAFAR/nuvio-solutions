import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Interface for nodemailer errors
interface NodemailerError extends Error {
  code?: string;
  command?: string;
}

export async function POST(request: NextRequest) {
  // console.log('📧 Contact API called');
  
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // console.log('📋 Form data received:', { name, email: email?.substring(0, 3) + '***', subject, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('❌ Environment variables missing:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS
      });
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // console.log('✅ Validation passed, creating transporter...');

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('🔧 Transporter created, verifying connection...');
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ Email transporter verified successfully');
    } catch (verifyError) {
      console.log('❌ Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please check your credentials.' },
        { status: 500 }
      );
    }

    // Email template for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1e293b; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; color: #fcd34d;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; color: #e2e8f0;">Nuvio Solutions - Portfolio Website</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0; border-bottom: 2px solid #fcd34d; padding-bottom: 5px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0; border-bottom: 2px solid #fcd34d; padding-bottom: 5px;">Message</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #fcd34d;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">
                This message was sent from the contact form on your Nuvio Solutions website.<br>
                <strong>Received on:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email template for user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Nuvio Solutions!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1e293b; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; color: #fcd34d;">Thank You for Reaching Out!</h1>
            <p style="margin: 10px 0 0 0; color: #e2e8f0;">Nuvio Solutions Team</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Thank you for contacting Nuvio Solutions! We've received your message and our team will review it carefully.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #fcd34d; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #1e293b;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #475569;">
                <li>We'll review your inquiry within 24 hours</li>
                <li>One of our team members will reach out to you</li>
                <li>We'll schedule a consultation if needed</li>
                <li>We'll provide you with a detailed proposal</li>
              </ul>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #92400e; font-weight: 500;">
                <strong>Need immediate assistance?</strong><br>
                Feel free to call us at +1 234 567 890 or email us directly at contact@nuviosolutions.com
              </p>
            </div>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>The Nuvio Solutions Team</strong>
            </p>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Visit our website: <a href="https://nuviosolutions.com" style="color: #3b82f6;">nuviosolutions.com</a><br>
                Follow us on social media for updates and tech insights
              </p>
            </div>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending emails...');

    // Send emails
    try {
      const results = await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions),
      ]);
      
      console.log('✅ Emails sent successfully:', {
        adminEmail: results[0].messageId,
        userEmail: results[1].messageId
      });

      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully!' 
        },
        { status: 200 }
      );
    } catch (sendError) {
      console.log('❌ Failed to send emails:', sendError);
      throw sendError;
    }

  } catch (error: unknown) {
    const nodemailerError = error as NodemailerError;
    const errorDetails = nodemailerError instanceof Error ? {
      message: nodemailerError.message,
      code: nodemailerError.code,
      command: nodemailerError.command,
      stack: nodemailerError.stack
    } : { message: 'Unknown error occurred' };
    
    console.error('💥 Email sending error:', errorDetails);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (nodemailerError instanceof Error) {
      const errorCode = nodemailerError.code;
      
      if (errorCode === 'EAUTH') {
        errorMessage = 'Email authentication failed. Please check your email credentials.';
      } else if (errorCode === 'ECONNECTION') {
        errorMessage = 'Could not connect to email server. Please try again later.';
      } else if (errorCode === 'ETIMEDOUT') {
        errorMessage = 'Email service timeout. Please try again.';
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: nodemailerError instanceof Error ? nodemailerError.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}