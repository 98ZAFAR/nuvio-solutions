import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  console.log('🧪 Email Test API called');
  
  try {
    // Check environment variables
    console.log('📋 Environment Check:', {
      EMAIL_USER: process.env.EMAIL_USER ? '✅ Set' : '❌ Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing',
      EMAIL_USER_VALUE: process.env.EMAIL_USER || 'Not set'
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        error: 'Environment variables not configured',
        details: {
          EMAIL_USER: !!process.env.EMAIL_USER,
          EMAIL_PASS: !!process.env.EMAIL_PASS
        }
      }, { status: 500 });
    }

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

    console.log('🔧 Testing transporter verification...');
    
    // Test verification
    await transporter.verify();
    console.log('✅ Transporter verified successfully');

    // Send test email
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self
      subject: 'Test Email from Nuvio Portfolio',
      html: `
        <h2>✅ Email Test Successful!</h2>
        <p>This is a test email from your Nuvio Portfolio contact form.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p>If you received this email, your email configuration is working correctly!</p>
      `
    };

    const result = await transporter.sendMail(testMailOptions);
    console.log('✅ Test email sent:', result.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email configuration is working!',
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('❌ Email test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      details: {
        isAuthError: error.code === 'EAUTH',
        isConnectionError: error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT',
        fullError: error.toString()
      }
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json();
    
    if (!testEmail) {
      return NextResponse.json({
        success: false,
        error: 'Test email address is required'
      }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        error: 'Environment variables not configured'
      }, { status: 500 });
    }

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

    await transporter.verify();

    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: testEmail,
      subject: 'Test Email from Nuvio Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e293b;">✅ Email Test Successful!</h2>
          <p>This is a test email from your Nuvio Portfolio contact form.</p>
          <p><strong>Sent to:</strong> ${testEmail}</p>
          <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
          <p>If you received this email, your email configuration is working correctly!</p>
        </div>
      `
    };

    const result = await transporter.sendMail(testMailOptions);

    return NextResponse.json({
      success: true,
      message: `Test email sent to ${testEmail}`,
      messageId: result.messageId
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}