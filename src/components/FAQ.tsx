import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface FAQProps {
  onNavigate: (view: string) => void;
}

export function FAQ({ onNavigate }: FAQProps) {
  const faqs = [
    {
      question: "How do I sign up for Viv Health?",
      answer: "You can sign up by clicking the 'Request an Invite' button on our homepage. After filling out a short form, we'll email you with details on how to download our secure messaging app and connect with a provider."
    },
    {
      question: "What conditions do you treat?",
      answer: "We provide care for a wide range of women's health concerns including general health, sexual health, hormonal health, pregnancy, fertility, menopause, contraception, breast health, and more."
    },
    {
      question: "How much does it cost?",
      answer: "During our pilot program, consultations are FREE with no co-pays, insurance requirements, or payment details required."
    },
    {
      question: "How quickly will I hear back from a provider?",
      answer: "Our providers are available daily from 8 AM to 8 PM. You can typically expect a response within a few hours during operating hours."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take your privacy seriously. All consultations are conducted through our HIPAA-secure messaging platform with end-to-end encryption."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header showBack onBack={() => onNavigate('home')} title="FAQ" />

      <div className="max-w-screen-xl mx-auto px-4 py-6 flex-grow">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
} 