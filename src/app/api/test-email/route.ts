import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('🔍 Testing email configuration...');
    
    // Check environment variables
    const config = {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
      EMAIL_USER_VALUE: process.env.EMAIL_USER || 'Not set',
      ADMIN_EMAIL_VALUE: process.env.ADMIN_EMAIL || 'Not set'
    };
    
    console.log('Environment check:', config);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        error: 'Environment variables not configured',
        config
      });
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

    // Test connection
    try {
      await transporter.verify();
      console.log('✅ Email connection verified');
      
      return NextResponse.json({
        success: true,
        message: 'Email configuration is working correctly!',
        config: {
          EMAIL_USER: process.env.EMAIL_USER,
          ADMIN_EMAIL: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
          host: 'smtp.gmail.com',
          port: 587
        }
      });
      
    } catch (verifyError: any) {
      console.log('❌ Email verification failed:', verifyError);
      
      return NextResponse.json({
        success: false,
        error: 'Email connection failed',
        details: verifyError.message,
        config
      });
    }

  } catch (error: any) {
    console.error('💥 Test endpoint error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Test failed',
      details: error.message
    });
  }
}