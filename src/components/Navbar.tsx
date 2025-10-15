"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-slate-800/95 backdrop-blur-sm shadow-lg fixed w-full z-50 top-0 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Company Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/nuvio_logo.png" 
            alt="Nuvio Solutions Logo" 
            width={60} 
            height={60}
            className=" w-18 h-6 sm:w-30 sm:h-9 focus:outline-none"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="hover:text-amber-200 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link 
          href="/contact"
          className="hidden md:block px-6 py-2 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-amber-200 focus:outline-none transition-colors duration-200"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg border-t border-slate-700">
          <ul className="px-6 py-4 space-y-4 text-gray-200 font-medium">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-200 transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-slate-700">
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}