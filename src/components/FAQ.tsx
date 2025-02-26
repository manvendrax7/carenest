import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does CareNest ensure quality care?',
    answer: 'We thoroughly vet all healthcare providers and maintain strict quality standards. Regular feedback and monitoring ensure consistent, high-quality care.',
  },
  {
    question: 'What services are available through CareNest?',
    answer: 'CareNest offers home visits, AI consultations, urgent care coordination, and pharmacy services. Our platform connects you with qualified healthcare providers for various medical needs.',
  },
  {
    question: 'How do I schedule a home visit?',
    answer: 'You can easily schedule a home visit through our platform. Simply select your preferred provider, choose a convenient time, and confirm your appointment.',
  },
  {
    question: 'Is CareNest available in my area?',
    answer: 'CareNest is currently expanding its services across major cities. Contact us to check availability in your location.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}