import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const appointment = location.state?.appointment;

  if (!appointment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            No Appointment Found
          </h1>
          <Link
            to="/book"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Schedule an appointment
          </Link>
        </div>
      </div>
    );
  }

  const appointmentTypes = {
    consultation: 'Free Consultation',
    quote_review: 'Quote Review',
    policy_review: 'Policy Review'
  };

  const durations = {
    consultation: '30 minutes',
    quote_review: '30 minutes',
    policy_review: '45 minutes'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const timezones = {
    'America/New_York': 'Eastern Time (ET)',
    'America/Chicago': 'Central Time (CT)',
    'America/Denver': 'Mountain Time (MT)',
    'America/Los_Angeles': 'Pacific Time (PT)',
    'America/Phoenix': 'Arizona Time (MST)',
    'America/Anchorage': 'Alaska Time (AKT)',
    'Pacific/Honolulu': 'Hawaii Time (HT)'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full mb-6">
            <svg className="w-12 h-12 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Appointment Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you, {appointment.name}
          </p>
        </div>

        {/* Appointment Details Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4">
            <h2 className="text-2xl font-semibold">Your Appointment Details</h2>
          </div>

          <div className="p-6 space-y-4">
            {/* Date */}
            <div className="flex items-start">
              <div className="w-12 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Date</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatDate(appointment.selectedDate)}
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start">
              <div className="w-12 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Time</div>
                <div className="text-lg font-semibold text-gray-900">
                  {appointment.clientTime}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Your time: {timezones[appointment.timezone]}
                </div>
                <div className="text-sm text-gray-500">
                  Broker's time: {appointment.brokerTime}
                </div>
              </div>
            </div>

            {/* Duration & Type */}
            <div className="flex items-start">
              <div className="w-12 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Appointment Type</div>
                <div className="text-lg font-semibold text-gray-900">
                  {appointmentTypes[appointment.appointmentType]}
                </div>
                <div className="text-sm text-gray-600">
                  Duration: {durations[appointment.appointmentType]}
                </div>
              </div>
            </div>

            {/* Confirmation Code */}
            <div className="flex items-start pt-4 border-t border-gray-200">
              <div className="w-12 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Confirmation Number</div>
                <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">
                  {appointment.confirmationCode}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Save this number for your records
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Confirmation email sent</span> to {appointment.email}
              </p>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Calendar invite sent</span> (check your email)
              </p>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Reminder scheduled</span> for 24 hours before
              </p>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Final reminder</span> 1 hour before your appointment
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-6 py-3 border-2 border-yellow-600 text-yellow-700 rounded-lg hover:bg-yellow-50 transition font-medium shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add to Calendar
            </button>
            <button className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Download .ics
            </button>
          </div>
        </div>

        {/* Need to Make Changes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Need to Make Changes?
          </h3>
          <p className="text-gray-700 mb-4">
            Use your confirmation number to reschedule or cancel your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium">
              Reschedule Appointment
            </button>
            <button className="px-6 py-2 text-gray-600 hover:text-gray-900 transition font-medium">
              Cancel Appointment
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Questions?
          </h3>
          <p className="text-gray-700 mb-3">
            If you have any questions or need assistance, feel free to reach out:
          </p>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Phone: (667) 481-5704</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email: moorsreality@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
