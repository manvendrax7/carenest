import React from 'react';
import { AlertTriangle, Clock, TrendingUp, Scale } from 'lucide-react';

const problems = [
  {
    icon: Scale,
    title: 'Lack of Standardization',
    description: 'Current home care services lack reliability and consistency in service delivery.'
  },
  {
    icon: AlertTriangle,
    title: 'Limited Accessibility',
    description: 'Professional care is not easily accessible to all who need it, creating gaps in healthcare.'
  },
  {
    icon: Clock,
    title: 'Inefficient Processes',
    description: 'Existing home care systems are often inefficient and inconsistent in their operations.'
  },
  {
    icon: TrendingUp,
    title: 'Growing Demand',
    description: "There's an increasing need for dependable and efficient home care solutions."
  }
];

export default function Problem() {
  return (
    <section className="py-16 bg-white" id="problems">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problems We're Solving</h2>
          <p className="text-gray-600">
            We've identified key challenges in the current home care industry that need immediate attention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <problem.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}