import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface AboutProps {
  onNavigate: (view: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header showBack onBack={() => onNavigate('home')} title="About Us" />

      <div className="max-w-screen-xl mx-auto px-4 py-6 flex-grow">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Viv Health</h1>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Viv Health is dedicated to providing accessible, personalized healthcare 
              for women through our innovative telehealth platform. Our mission is to 
              empower women with convenient access to quality healthcare that fits into 
              their busy lives.
            </p>
            <p className="text-gray-600 mb-4">
              Founded with the belief that healthcare should be accessible to everyone, 
              we've built a platform that connects you with experienced providers who 
              specialize in women's health issues ranging from general wellness to 
              specialized concerns.
            </p>
            <p className="text-gray-600">
              Through secure messaging and personalized care plans, we're transforming 
              how women access healthcare, making it more convenient, private, and 
              tailored to individual needs.
            </p>
          </div>
          
          {/* Our Approach Section */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-600 max-w-2xl mb-6 text-sm sm:text-base">
            Leveraging technology to deliver accessible and personalized women's healthcare
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 text-center">
            <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-4xl mx-auto">
              Our AI-assisted women's healthcare model drives higher-quality service, better patient outcomes, greater team productivity, and lower operational costs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Improve patient experience</h3>
                <p className="text-gray-600">
                  Expand access and reach to patients, and promote continuous care relationships
                </p>
              </div>
              
              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Scale care delivery</h3>
                <p className="text-gray-600">
                  Promote women's healthcare as a fundamental driver of improved population health outcomes, greater equity of care, and decreased costs
                </p>
              </div>
              
              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Reduce operating expenses</h3>
                <p className="text-gray-600">
                  Leverage AI-assisted technology and services to execute a scalable, digitally-enabled care strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
} 