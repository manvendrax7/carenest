import React from 'react';
import { Brain, Link, Shield } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology</h2>
          <p className="text-gray-600">
            Leveraging cutting-edge technology to deliver superior healthcare solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Brain className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Driven Consultation</h3>
            <p className="text-gray-600">
              Advanced natural language processing for accurate symptom analysis and recommendations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Link className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration</h3>
            <p className="text-gray-600">
              Seamless connection with home care centers, pharmacies, and healthcare providers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h3>
            <p className="text-gray-600">
              Strong commitment to safeguarding patient data and maintaining privacy standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}