import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface CareTeamProps {
  onNavigate: (view: string) => void;
}

export function CareTeam({ onNavigate }: CareTeamProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header showBack onBack={() => onNavigate('home')} title="Care Team" />

      <div className="max-w-screen-xl mx-auto px-4 py-4 sm:py-6 flex-grow">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Our Care Team</h1>
          <p className="text-sm xs:text-base text-gray-600">Meet the dedicated providers behind Viv Health's personalized care</p>
        </div>

        {/* Provider Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="sm:flex">
            <div className="sm:w-1/3 md:w-1/4">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGUVF9zRGSFmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688631701065?e=1743638400&v=beta&t=BU0H-IAB24BYg9UwNYAgzESFGpzMnVKPirinOjNee0k" 
                alt="Annelie Roding, DMSc, PA-C"
                className="w-full h-48 xs:h-64 sm:h-full object-cover object-center"
              />
            </div>
            <div className="p-4 xs:p-5 sm:p-6 sm:w-2/3 md:w-3/4">
              <h2 className="text-xl xs:text-2xl font-bold text-gray-800">Annelie Roding, DMSc, PA-C</h2>
              <p className="text-purple-600 font-medium text-sm xs:text-base">Provider</p>
              
              <div className="mt-3 sm:mt-4 space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-gray-500 mr-2" />
                  <span className="text-sm xs:text-base text-gray-600">Brooklyn, New York</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-gray-500 mr-2" />
                  <span className="text-sm xs:text-base text-gray-600">10 years experience</span>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-sm xs:text-base text-gray-600">
                Passionate about empowering women through personalized healthcare solutions and education.
              </p>

              {/* Contact Info Card */}
              <div className="mt-4 xs:mt-5 sm:mt-6 bg-purple-600 rounded-lg p-4 xs:p-5 text-white">
                <div className="flex items-center mb-2 xs:mb-3">
                  <Phone className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold">Text a Provider for Care</h3>
                </div>
                <p className="text-xl xs:text-2xl font-bold mb-1">(213) 415-2133</p>
                <p className="text-sm xs:text-base text-purple-200">Available daily</p>
                <p className="text-base xs:text-lg font-semibold mt-1">8 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
} 