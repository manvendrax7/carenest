import React from 'react';
import { Heart, ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-8">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Transforming Home Healthcare</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing Home Care Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bringing professional and reliable home care services right to your doorstep.
            Experience healthcare reimagined with CareNest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/digitalmanvendra/one-to-one-with-manvendra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Schedule a Meeting
              <Calendar className="w-4 h-4" />
            </a>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}