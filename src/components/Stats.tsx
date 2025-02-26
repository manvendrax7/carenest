import React from 'react';
import { Users, Home, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Patients Served',
  },
  {
    icon: Home,
    number: '500+',
    label: 'Care Centers',
  },
  {
    icon: Award,
    number: '98%',
    label: 'Satisfaction Rate',
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Support Available',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center text-white animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}