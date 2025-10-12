"use client";

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add email functionality here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-slate-800 text-gray-200 py-16 px-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-200">Nuvio Solutions</h2>
          <p className="mb-2">IIEST Shibpur, College Road</p>
          <p className="mb-2">Howrah, West Bengal 711103</p>
          <p className="mb-2">India</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-200 transition-colors duration-200">Facebook</a>
            <a href="#" className="hover:text-amber-200 transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-amber-200 transition-colors duration-200">Instagram</a>
            <a href="#" className="hover:text-amber-200 transition-colors duration-200">LinkedIn</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-amber-200">Contact Us</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-md border border-slate-600 bg-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-md border border-slate-600 bg-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Comment"
              rows={4}
              className="p-3 rounded-md border border-slate-600 bg-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Nuvio Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;