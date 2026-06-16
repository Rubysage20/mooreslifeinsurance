import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CredentialsPage from './pages/CredentialsPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
             {/* Logo Section */}
<Link to="/" className="flex items-center">
  <div className="flex items-center">
    {/* The Logo Image */}
    <img 
      src="/images/logo.jpg" 
      alt="Moores Life Insurance" 
      className="w-10 h-10 object-contain rounded-md"
      // This ensures if the image is missing, it doesn't leave a "broken icon" border
      onError={(e) => { e.target.style.display = 'none'; }} 
    />

    {/* The Brand Name */}
    <span className="ml-3 text-xl font-semibold text-gray-900">
      Moores Life Insurance
    </span>
  </div>
</Link>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
                >
                  About
                </Link>
                <Link
                  to="/credentials"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
                >
                  Credentials
                </Link>
                <Link
                  to="/book"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition shadow-md"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Moores Life Insurance</h3>
                <p className="text-gray-400 text-sm">
                  Licensed Life Insurance Broker
                  <br />
                  Moore Life Moore Freedom
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400 text-sm">
                  Phone: (667) 481-5704
                  <br />
                  Email: moorsreality@gmail.com
                  <br />
                  Licensed in: MD, VA, DC, GA, TX, NC, AL, AZ, AR, FL, IN, KY, LA, MI, SC, TN, WA, WI, WV
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/credentials" className="text-gray-400 hover:text-white transition">
                      Credentials
                    </Link>
                  </li>
                  <li>
                    <Link to="/book" className="text-gray-400 hover:text-white transition">
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2026 Moores Life Insurance. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                {' · '}
                <a href="#" className="hover:text-white transition">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
