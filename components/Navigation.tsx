'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/images/AWSL_Seal_Style_Logo_2021_final.png"
              alt="AWSL Logo"
              width={60}
              height={60}
              className="h-12 w-12 sm:h-14 sm:w-14 transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-serif font-bold text-brand-navy">Educational Advocacy Summit</div>
              <div className="text-xs text-gray-600 font-medium">Association of Washington Student Leaders</div>
            </div>
            <div className="sm:hidden">
              <div className="text-sm font-serif font-bold text-brand-navy">EAS 2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              About
            </Link>
            <Link href="/#opportunities" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              Opportunities
            </Link>
            <Link href="/schedule/in-person" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              In-Person Schedule
            </Link>
            <Link href="/schedule/virtual" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              Virtual Schedule
            </Link>
            <Link
              href="/#register"
              className="bg-brand-navy text-white px-6 py-2 rounded-lg hover:bg-brand-navy/90 transition-all shadow-md hover:shadow-lg font-semibold"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-100 pt-4">
            <Link
              href="/#about"
              className="block py-2 text-gray-600 hover:text-brand-navy font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#opportunities"
              className="block py-2 text-gray-600 hover:text-brand-navy font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
            <Link
              href="/schedule/in-person"
              className="block py-2 text-gray-600 hover:text-brand-navy font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              In-Person Schedule
            </Link>
            <Link
              href="/schedule/virtual"
              className="block py-2 text-gray-600 hover:text-brand-navy font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Virtual Schedule
            </Link>
            <Link
              href="/#register"
              className="block bg-brand-navy text-white px-6 py-2 rounded-lg hover:bg-brand-navy/90 transition-colors font-semibold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
