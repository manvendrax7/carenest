import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Menu, X, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Market from './components/Market';
import Business from './components/Business';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import FAQ from './components/FAQ';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">CareNest</span>
            </a>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="/#solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="/#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
              <a href="/#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a 
                href="https://calendly.com/digitalmanvendra/one-to-one-with-manvendra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <a 
                  href="/#solutions" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </a>
                <a 
                  href="/#how-it-works" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="/#blog" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="/#contact" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="https://calendly.com/digitalmanvendra/one-to-one-with-manvendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-center"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">CareNest</span>
              </div>
              <p className="text-gray-400">Revolutionizing home care services with professional and reliable solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#solutions" className="hover:text-blue-400">Solutions</a></li>
                <li><a href="/#how-it-works" className="hover:text-blue-400">How It Works</a></li>
                <li><a href="/#blog" className="hover:text-blue-400">Blog</a></li>
                <li><a href="/#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home Visits</li>
                <li>AI Consultation</li>
                <li>Urgent Care</li>
                <li>Pharmacy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  carexnest@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CareNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <Market />
      <Business />
      <Technology />
      <Newsletter />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;