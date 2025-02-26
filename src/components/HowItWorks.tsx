import React from 'react';
import { Home, Brain, ChevronFirst as FirstAid, Pill } from 'lucide-react';

const steps = [
  {
    icon: Home,
    title: 'Home Visit',
    description: 'Choose from onboarded providers, schedule services, and receive expert care at home.'
  },
  {
    icon: Brain,
    title: 'AI Consultation',
    description: 'Describe symptoms to AI, get instant remedies, or connect with healthcare professionals.'
  },
  {
    icon: FirstAid,
    title: 'Urgent Care',
    description: 'Connect directly with emergency services or hospitals in critical situations.'
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Manage prescriptions and receive medication deliveries through our platform.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">
            Simple steps to access professional healthcare services from the comfort of your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}