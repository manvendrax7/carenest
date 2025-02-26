import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

export default function Market() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
          <p className="text-gray-600">
            Understanding the growing potential in the home healthcare market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Size</h3>
            <p className="text-gray-600">
              The home care industry shows significant growth potential with increasing demand for professional services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Target Audience</h3>
            <p className="text-gray-600">
              Elderly individuals, recovering patients, and those with chronic health conditions seeking reliable care.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Award className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Advantage</h3>
            <p className="text-gray-600">
              Enhanced standardization, technological integration, and superior accessibility set us apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}