import React from 'react';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us in Revolutionizing Home Care</h2>
          <p className="text-gray-600 mb-8">
            For inquiries or investment opportunities, reach out to our team.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:carexnest@gmail.com" className="text-gray-700 hover:text-blue-600">
                carexnest@gmail.com
              </a>
            </div>
            <a 
              href="https://calendly.com/digitalmanvendra/one-to-one-with-manvendra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Meeting
            </a>
          </div>
          <div className="mt-12">
            <p className="text-gray-600">Founded by</p>
            <p className="text-xl font-semibold text-gray-900">Manvendra Kumar</p>
          </div>
        </div>
      </div>
    </section>
  );
}