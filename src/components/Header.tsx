import React, { useState } from 'react';
import { Flower2, Search, Bell, ArrowLeft, X, Menu } from 'lucide-react';

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export function Header({ 
  showBack = false, 
  onBack, 
  title, 
  showSearch = true, 
  showNotifications = true 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 sm:gap-2">
          {showBack && (
            <button 
              onClick={onBack}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1 -ml-1 focus-ring rounded-md"
            >
              <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </button>
          )}
          <div className="flex items-center">
            <Flower2 className="text-purple-600 w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7" />
            <h1 className="text-sm xs:text-base sm:text-xl font-semibold ml-1 sm:ml-2">Viv Health</h1>
            <span className="ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-700 text-[8px] xs:text-[10px] sm:text-xs font-medium rounded-full border border-green-200">
              beta
            </span>
          </div>
          {title && (
            <span className="text-sm xs:text-base sm:text-lg font-semibold ml-1 sm:ml-2 text-gray-700 truncate">
              | {title}
            </span>
          )}
        </div>
        {(showSearch || showNotifications) && (
          <div className="flex gap-2 sm:gap-4">
            {showSearch && 
              <button className="focus-ring rounded-md p-1">
                <Search className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            }
            {showNotifications && 
              <button className="focus-ring rounded-md p-1">
                <Bell className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            }
          </div>
        )}
        <div className="block sm:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus-ring rounded-md p-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-50">
              <nav className="flex flex-col space-y-4">
                {/* Navigation links */}
                <a 
                  href="#" 
                  className="text-sm xs:text-base text-gray-700 hover:text-purple-600 focus-ring rounded-md py-1 px-2 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="text-sm xs:text-base text-gray-700 hover:text-purple-600 focus-ring rounded-md py-1 px-2 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="text-sm xs:text-base text-gray-700 hover:text-purple-600 focus-ring rounded-md py-1 px-2 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  Care Team
                </a>
                <a 
                  href="#" 
                  className="text-sm xs:text-base text-gray-700 hover:text-purple-600 focus-ring rounded-md py-1 px-2 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  FAQ
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}