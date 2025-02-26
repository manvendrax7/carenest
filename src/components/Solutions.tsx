import React from 'react';
import { Home, Brain, ChevronFirst as FirstAid, Pill } from 'lucide-react';

const solutions = [
  {
    icon: Home,
    title: 'Home Visit',
    description: 'Standardized local home care centers for professional care at home.'
  },
  {
    icon: Brain,
    title: 'AI Consultation',
    description: 'AI-powered symptom analysis and home remedies or specialist appointments.'
  },
  {
    icon: FirstAid,
    title: 'Urgent Care',
    description: 'Immediate access to emergency services and support.'
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Convenient ordering and delivery of prescribed medications.'
  }
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gray-50" id="solutions">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CareNest Solutions</h2>
          <p className="text-gray-600">
            Our comprehensive suite of services designed to revolutionize home healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}