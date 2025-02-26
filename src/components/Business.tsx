import React from 'react';
import { CreditCard, ShoppingBag, Handshake } from 'lucide-react';

export default function Business() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Model</h2>
          <p className="text-gray-600">
            Our sustainable approach to generating revenue while providing value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <CreditCard className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscription Fees</h3>
            <p className="text-gray-600">
              Home care centers pay to be part of our network, ensuring quality and commitment.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <ShoppingBag className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction Fees</h3>
            <p className="text-gray-600">
              We charge a small fee for services booked through our platform.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Handshake className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnerships</h3>
            <p className="text-gray-600">
              Strategic collaborations with pharmacies and medical supply companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}