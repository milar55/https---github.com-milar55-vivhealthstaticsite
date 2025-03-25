import React from 'react';
import { Flower2, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-50 text-gray-600">
      <div className="max-w-screen-xl mx-auto py-6 xs:py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3 xs:mb-4">
              <Flower2 className="w-5 h-5 xs:w-6 xs:h-6 mr-2 text-purple-600" />
              <h2 className="text-lg xs:text-xl font-bold text-purple-700">Viv Health</h2>
            </div>
            <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4">
              Empowering women through accessible and personalized healthcare solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-1 xs:space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('care-team');
                  }}
                >
                  Care Team
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('faq');
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-purple-700">Contact Us</h3>
            <ul className="space-y-2 xs:space-y-3">
              <li className="flex items-center">
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 mr-2 flex-shrink-0 text-purple-600" />
                <span className="text-xs xs:text-sm sm:text-base text-gray-600">(213) 415-2133</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 xs:w-5 xs:h-5 mr-2 flex-shrink-0 text-purple-600" />
                <span className="text-xs xs:text-sm sm:text-base text-gray-600">hello@vivhealth.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-purple-700">Hours</h3>
            <p className="text-xs xs:text-sm sm:text-base text-gray-600">
              Our providers are available:
            </p>
            <p className="font-semibold mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base text-gray-600">8 AM - 8 PM</p>
            <p className="text-xs xs:text-sm sm:text-base text-gray-600">Available daily</p>
          </div>
        </div>

        <div className="mt-6 xs:mt-8 pt-4 xs:pt-6 border-t border-purple-200">
          <p className="text-center text-xs xs:text-sm sm:text-base text-gray-600">
            &copy; {currentYear} Viv Health. All rights reserved.
          </p>
          <div className="flex justify-center mt-2 xs:mt-3 space-x-4 text-xs">
            <a 
              href="#" 
              className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate('privacy-policy');
              }}
            >
              Privacy Policy
            </a>
            <a href="#" className="text-xs xs:text-sm sm:text-base text-gray-600 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 