"use client";

import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi';
import FadeInView from '../../components/animations/FadeInView';
import FloatingCard from '../../components/animations/FloatingCard';
import AnimatedButton from '../../components/animations/AnimatedButton';
import PulseIcon from '../../components/animations/PulseIcon';
import axios from 'axios';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      console.log('📤 Submitting form with data:', formData);
      
      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      });

      console.log('✅ Form submission successful:', response.data);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '' });
      setErrors({});
      
    } catch (error: any) {
      console.error('❌ Form submission error:', error);
      
      if (error.response) {
        // Server responded with error status
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Network error:', error.request);
      } else {
        // Something else happened
        console.error('Error:', error.message);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email Us",
      details: "contact@nuviosolutions.com",
      icon: <HiMail className="w-6 h-6" />
    },
    {
      title: "Call Us",
      details: "+1 234 567 890",
      icon: <HiPhone className="w-6 h-6" />
    },
    {
      title: "Location",
      details: "123 Tech Street, San Francisco, CA 94105, USA",
      icon: <HiLocationMarker className="w-6 h-6" />
    },
    {
      title: "Response Time",
      details: "Within 24 hours",
      icon: <HiClock className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <FadeInView>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            Have a project in mind or want to get in touch? We&apos;d love to hear from you. 
            Reach out to us via the form below or through our contact details.
          </p>
        </div>
      </FadeInView>

      {/* Contact Info Cards */}
      <FadeInView delay={0.2}>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, idx) => (
            <FloatingCard key={idx} className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-slate-600">
              <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4 text-slate-800">
                <PulseIcon>
                  {info.icon}
                </PulseIcon>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
              <p className="text-gray-200 text-sm">{info.details}</p>
            </FloatingCard>
          ))}
        </div>
      </FadeInView>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <FadeInView delay={0.4}>
          <FloatingCard className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-400 text-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <HiPaperAirplane className="w-5 h-5" />
                <strong>Message sent successfully!</strong>
              </div>
              <p className="mt-1 text-sm">
                Thank you for your message! We&apos;ve received it and will get back to you within 24 hours. 
                You should also receive a confirmation email shortly.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400 text-red-200 rounded-lg">
              <div className="flex items-center gap-2">
                <HiMail className="w-5 h-5" />
                <strong>Failed to send message</strong>
              </div>
              <p className="mt-1 text-sm">
                Something went wrong while sending your message. Please try again or contact us directly at{' '}
                <a href="mailto:contact@nuviosolutions.tech" className="underline">
                  contact@nuviosolutions.tech
                </a>
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name
                      ? 'border-red-400 bg-red-50 text-red-900 focus:ring-red-200'
                      : 'border-slate-500 bg-slate-600 text-white focus:ring-amber-200 focus:border-transparent'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email
                      ? 'border-red-400 bg-red-50 text-red-900 focus:ring-red-200'
                      : 'border-slate-500 bg-slate-600 text-white focus:ring-amber-200 focus:border-transparent'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-slate-500 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent transition-all duration-200"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.message
                    ? 'border-red-400 bg-red-50 text-red-900 focus:ring-red-200'
                    : 'border-slate-500 bg-slate-600 text-white focus:ring-amber-200 focus:border-transparent'
                }`}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>
            
            <AnimatedButton
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed opacity-75'
                  : 'bg-amber-600 hover:bg-amber-700'
              } text-white shadow-lg hover:shadow-xl`}
            >
              {isSubmitting ? (
                <div className='flex items-center justify-center gap-2'>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <p className='text-lg'>Sending Message...</p>
                </div>
              ) : (
                <div className='flex items-center justify-center gap-2'>
                  <p className='text-lg'>Send Message</p>
                  <HiPaperAirplane size={18} className="rotate-45 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </AnimatedButton>
          </form>
          </FloatingCard>
        </FadeInView>

        {/* Company Info & FAQ */}
        <div className="space-y-8">
          {/* Company Info */}
          <FadeInView delay={0.6}>
            <FloatingCard className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <h2 className="text-2xl font-semibold mb-6 text-white">Nuvio Solutions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Company:</h3>
                <p className="text-gray-200">Nuvio Solutions Pvt Ltd</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Address:</h3>
                <p className="text-gray-200">123 Tech Street, San Francisco, CA 94105, USA</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Business Hours:</h3>
                <p className="text-gray-200">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                <p className="text-gray-200">Weekend: Emergency support available</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-600">
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-amber-200 transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-200 transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-200 transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
              </div>
            </div>
            </FloatingCard>
          </FadeInView>

          {/* Quick FAQ */}
          <FadeInView delay={0.8}>
            <FloatingCard className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <h2 className="text-2xl font-semibold mb-6 text-white">Quick FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">How quickly can you start my project?</h3>
                <p className="text-gray-200 text-sm">We typically start new projects within 1-2 weeks after initial consultation and agreement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-200 text-sm">Yes, we offer maintenance and support packages for all our projects.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">What&apos;s your project process?</h3>
                <p className="text-gray-200 text-sm">Discovery → Planning → Development → Testing → Launch → Support</p>
              </div>
            </div>
            </FloatingCard>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}