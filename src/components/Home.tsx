import React, { useRef } from 'react';
import { 
  Flower2, 
  Activity,
  Baby,
  Heart,
  Sprout,
  Sun,
  Bed,
  Pill,
  Smile,
  ArrowRight,
  Shield,
  MessageSquare,
  Download,
  MessageCircle,
  ClipboardList,
  UserCheck
} from 'lucide-react';
import type { SelectedProvider } from '../App';
import { Footer } from './Footer';

interface HomeProps {
  onNavigate?: (view: string) => void;
}

const providers = [
  {
    id: '1',
    name: 'Dr. Anna Jones',
    role: 'MD, General Practitioner',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    name: 'Tiya Mcdaniel, NP',
    role: 'Nurse Practitioner',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    name: 'John Berry, PA',
    role: 'Fertility Specialist',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100'
  }
];

const conditions = [
   {
    title: 'General Health',
    description: 'Comprehensive wellness and preventive care',
    icon: Activity,
    bgColor: 'bg-teal-50',
    color: 'text-teal-600',
    borderColor: 'border-teal-100'
  },
  {
    title: 'Sexual Health',
    description: 'Solutions for Vaginal health',
    icon: Bed,
    bgColor: 'bg-indigo-50',
    color: 'text-indigo-600',
    borderColor: 'border-indigo-100'
  },
  {
    title: 'Hormonal Health',
    description: 'Balancing and optimizing hormonal wellness',
    icon: Smile,
    bgColor: 'bg-blue-50',
    color: 'text-blue-600',
    borderColor: 'border-blue-100'
  },
  {
    title: 'Pregnancy',
    description: 'Comprehensive prenatal and postnatal support',
    icon: Baby,
    bgColor: 'bg-pink-50',
    color: 'text-pink-600',
    borderColor: 'border-pink-100'
  },
  {
    title: 'Fertility',
    description: 'Family planning and fertility treatments',
    icon: Sprout,
    bgColor: 'bg-green-50',
    color: 'text-green-600',
    borderColor: 'border-green-100'
  },
  {
    title: 'Menopause',
    description: 'Managing life stage transitions with expert care',
    icon: Sun,
    bgColor: 'bg-orange-50',
    color: 'text-orange-600',
    borderColor: 'border-orange-100'
  },
  {
    title: 'Contraception',
    description: 'Managing your cycle on your terms',
    icon: Pill,
    bgColor: 'bg-purple-50',
    color: 'text-purple-600',
    borderColor: 'border-purple-100'
  },
  {
    title: 'Breast Health',
    description: 'Comprehensive breast care and screenings',
    icon: Heart,
    bgColor: 'bg-rose-50',
    color: 'text-rose-600',
    borderColor: 'border-rose-100'
  }
];

export function Home({ onNavigate }: HomeProps) {
  const signupRef = useRef<HTMLDivElement>(null);

  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignUp = () => {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdZeKSkwnic9xpMsYZNjKENZ51zYMaXnr2k0bH-_D5dHS2eVA/viewform?usp=sharing';
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {/* Header - Mobile Optimized */}
          <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Flower2 className="text-purple-600 w-6 h-6 sm:w-7 sm:h-7" />
                  <h1 className="text-lg sm:text-xl font-semibold ml-2">Viv Health</h1>
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium rounded-full border border-green-200">
                    beta
                  </span>
                </div>
              </div>
              
              <nav className="hidden sm:flex items-center space-x-8">
                <a 
                  href="/about" 
                  className="font-medium text-gray-700 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('about');
                  }}
                >
                  About
                </a>
                <a 
                  href="/care-team" 
                  className="font-medium text-gray-700 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('care-team');
                  }}
                >
                  Care Team
                </a>
                <a 
                  href="/faq" 
                  className="font-medium text-gray-700 hover:text-purple-600 transition-colors focus-ring rounded-md py-1 px-2 -mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate && onNavigate('faq');
                  }}
                >
                  FAQ
                </a>
              </nav>
            </div>
          </header>

          {/* Spacer for fixed header */}
          <div className="h-16 sm:h-20 mb-6"></div>

          {/* Hero Section - Mobile Optimized */}
          <div className="bg-purple-50 rounded-xl mb-8 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center text-center px-3 sm:px-4 py-8 sm:py-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                24/7 Consultations for Women's Health
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Connect with licensed clinicians anytime, anywhere. 
                Get care for any women's health concern personalized to your body and your schedule.
              </p>
              <button 
                onClick={scrollToSignup}
                className="bg-white text-purple-600 border-2 border-purple-600 px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs xs:text-sm sm:text-base focus-ring"
              >
                Request an Invite
              </button>
            </div>
          </div>

          {/* Conditions Section */}
          <section className="mb-8 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2">Conditions We Treat</h2>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
                Comprehensive women's health care delivered with expertise and compassion
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {conditions.map((condition) => (
                <div
                  key={condition.title}
                  className={`group border ${condition.borderColor} rounded-xl p-3 sm:p-6 transition-all duration-300 hover:shadow-md ${condition.bgColor} bg-opacity-40 hover:bg-opacity-60`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${condition.bgColor} ${condition.color} transition-transform duration-300 group-hover:scale-110`}>
                      <condition.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base mb-0.5">
                        {condition.title}
                      </h3>
                      <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm">
                        {condition.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sign Up Section */}
          <section ref={signupRef} className="mb-8 sm:mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-3 xs:p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* Sign Up Button */}
                <div className="flex flex-col items-center justify-center text-center">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdZeKSkwnic9xpMsYZNjKENZ51zYMaXnr2k0bH-_D5dHS2eVA/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-600 px-5 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-lg text-sm xs:text-base sm:text-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-3 xs:mb-4 sm:mb-6 group focus-ring"
                  >
                    Sign Up
                    <ArrowRight className="inline ml-2 transition-transform group-hover:translate-x-1 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  </a>
                  <p className="text-xs xs:text-sm sm:text-base text-purple-100">
                    Submit your details to connect with a healthcare provider. We'll email you when we're ready to begin your care. 
                  </p>
                </div>

                {/* HIPAA Secure Messaging Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-6 text-white">
                  <div className="flex items-start gap-3 xs:gap-4">
                    <div className="flex-shrink-0 hidden sm:block">
                      <img
                        src="https://assets.entrepreneur.com/content/3x2/2000/20141103220441-spruce-acne.jpeg"
                        alt="Secure messaging interface"
                        className="w-24 h-24 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 xs:gap-2 mb-1 xs:mb-2">
                        <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-green-300" />
                        <h3 className="font-semibold text-base xs:text-lg">HIPAA-Secure Messaging</h3>
                      </div>
                      <p className="text-xs xs:text-sm text-purple-100 leading-relaxed">
                        All medical consultations are conducted through our secure messaging platform, ensuring your privacy and data protection. Message your provider anytime, share photos, and receive care plans - all in one secure place.
                      </p>
                      <div className="flex items-center gap-1 xs:gap-2 mt-2 xs:mt-3 text-green-300 text-xs xs:text-sm">
                        <MessageSquare className="w-3 h-3 xs:w-4 xs:h-4" />
                        <span>End-to-end encrypted communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="mb-8 sm:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 text-gray-900">What to Expect</h2>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
                Simple steps to start your personalized healthcare journey
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200">
                  <div className="text-purple-600 text-center">
                    <div className="text-[8px] xs:text-xs">Step</div>
                    <div className="text-xl xs:text-2xl font-bold leading-none">1</div>
                  </div>
                </div>
                <h3 className="font-bold text-base xs:text-lg mb-1 text-gray-600">Download the App</h3>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200">
                  <div className="text-purple-600 text-center">
                    <div className="text-[8px] xs:text-xs">Step</div>
                    <div className="text-xl xs:text-2xl font-bold leading-none">2</div>
                  </div>
                </div>
                <h3 className="font-bold text-base xs:text-lg mb-1 text-gray-600">Start your Consult</h3>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200">
                  <div className="text-purple-600 text-center">
                    <div className="text-[8px] xs:text-xs">Step</div>
                    <div className="text-xl xs:text-2xl font-bold leading-none">3</div>
                  </div>
                </div>
                <h3 className="font-bold text-base xs:text-lg mb-1 text-gray-600">Get your Treatment Plan</h3>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-200">
                  <div className="text-purple-600 text-center">
                    <div className="text-[8px] xs:text-xs">Step</div>
                    <div className="text-xl xs:text-2xl font-bold leading-none">4</div>
                  </div>
                </div>
                <h3 className="font-bold text-base xs:text-lg mb-1 text-gray-600">Personalize Your Care</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}