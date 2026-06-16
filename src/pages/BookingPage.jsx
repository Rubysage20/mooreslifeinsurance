import React, { useState } from 'react';

const BookingPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const appointmentTypes = [
  {
    value: 'free-consultation',
    label: 'Free Consultation',
    duration: '30 minutes',
    description: 'Get to know each other and discuss your insurance needs, review quotes, or go over your existing coverage.',
    url: 'https://calendly.com/mooresinsurance/30min'
  }
];

  const openCalendly = () => {
    if (!selectedType) return;
    const type = appointmentTypes.find(t => t.value === selectedType);
    window.Calendly.initPopupWidget({ url: type.url });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Free Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Virtual meetings • Flexible scheduling • Same-day response
          </p>
        </div>

        {/* Hours Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-yellow-600 font-bold text-lg mb-1">Mon - Fri</div>
            <div className="text-gray-600 text-sm">10:00 AM – 7:30 PM ET</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-yellow-600 font-bold text-lg mb-1">Saturday</div>
            <div className="text-gray-600 text-sm">10:00 AM – 2:00 PM ET</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-yellow-600 font-bold text-lg mb-1">Virtual</div>
            <div className="text-gray-600 text-sm">Phone or Video Call</div>
          </div>
        </div>

        {/* Appointment Type Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Appointment Type
          </h2>

          <div className="space-y-4 mb-8">
            {appointmentTypes.map(type => (
              <label
                key={type.value}
                className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                  selectedType === type.value
                    ? 'border-yellow-600 bg-gradient-to-br from-yellow-50 to-white'
                    : 'border-gray-200 hover:border-yellow-300'
                }`}
              >
                <input
                  type="radio"
                  name="appointmentType"
                  value={type.value}
                  checked={selectedType === type.value}
                  onChange={() => setSelectedType(type.value)}
                  className="mt-1 mr-4 accent-yellow-600"
                />
                <div>
                  <div className="font-semibold text-gray-900">{type.label}</div>
                  <div className="text-sm text-yellow-700 font-medium">{type.duration}</div>
                  <div className="text-sm text-gray-500 mt-1">{type.description}</div>
                </div>
              </label>
            ))}
          </div>

          {/* Schedule Button */}
          <div className="text-center">
            <button
              onClick={openCalendly}
              disabled={!selectedType}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Schedule Appointment
            </button>
            {!selectedType && (
              <p className="mt-3 text-sm text-gray-500">Please select an appointment type above</p>
            )}
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">What to Expect</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Confirmation email sent automatically after booking
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Calendar invite sent to your email
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Reminders 24 hours and 1 hour before your appointment
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Need to reschedule? Use the link in your confirmation email
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;