import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timezone: '',
    appointmentType: 'consultation',
    notes: ''
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Auto-detect timezone on mount
  useEffect(() => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setFormData(prev => ({ ...prev, timezone: detectedTimezone }));
  }, []);

  // Fetch available slots when date or timezone changes
  useEffect(() => {
    if (selectedDate && formData.timezone) {
      fetchAvailableSlots();
    }
  }, [selectedDate, formData.timezone]);

  const fetchAvailableSlots = async () => {
    setLoading(true);
    try {
      // Replace with actual API call
      // const response = await fetch(`/api/availability?date=${selectedDate}&timezone=${formData.timezone}`);
      // const slots = await response.json();
      
      // Mock data - generate slots
      const mockSlots = generateMockSlots(selectedDate, formData.timezone);
      setAvailableSlots(mockSlots);
    } catch (error) {
      console.error('Error fetching slots:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockSlots = (date, clientTimezone) => {
    // Mock slots for demonstration
    const brokerTimezone = 'America/New_York';
    const slots = [];
    
    // Generate morning and afternoon slots
    const times = [
      { broker: '09:00', client: getClientTime('09:00', brokerTimezone, clientTimezone) },
      { broker: '10:00', client: getClientTime('10:00', brokerTimezone, clientTimezone) },
      { broker: '11:00', client: getClientTime('11:00', brokerTimezone, clientTimezone) },
      { broker: '14:00', client: getClientTime('14:00', brokerTimezone, clientTimezone) },
      { broker: '15:00', client: getClientTime('15:00', brokerTimezone, clientTimezone) },
      { broker: '16:00', client: getClientTime('16:00', brokerTimezone, clientTimezone) },
    ];

    times.forEach((time, index) => {
      slots.push({
        id: index,
        utc: `${date}T${time.broker}:00Z`,
        brokerTime: `${time.broker} EST`,
        clientTime: time.client,
        display: `${time.client} (${time.broker} EST)`
      });
    });

    return slots;
  };

  const getClientTime = (brokerTime, brokerTz, clientTz) => {
    // Simplified timezone conversion
    // In production, use moment-timezone or date-fns-tz
    const timezoneOffsets = {
      'America/New_York': -5,
      'America/Chicago': -6,
      'America/Denver': -7,
      'America/Los_Angeles': -8,
      'America/Phoenix': -7,
      'America/Anchorage': -9,
      'Pacific/Honolulu': -10
    };

    const [hours, minutes] = brokerTime.split(':').map(Number);
    const brokerOffset = timezoneOffsets[brokerTz] || -5;
    const clientOffset = timezoneOffsets[clientTz] || -5;
    const diff = clientOffset - brokerOffset;
    
    let clientHours = hours + diff;
    if (clientHours < 0) clientHours += 24;
    if (clientHours >= 24) clientHours -= 24;

    const period = clientHours >= 12 ? 'PM' : 'AM';
    const displayHours = clientHours > 12 ? clientHours - 12 : (clientHours === 0 ? 12 : clientHours);
    
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!selectedDate) {
      newErrors.date = 'Please select a date';
    }

    if (!selectedTime) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  try {
    const appointmentData = {
      ...formData,
      selectedDate,
      selectedTimeUtc: selectedTime.utc,
      clientTime: selectedTime.clientTime,
      brokerTime: selectedTime.brokerTime
    };

    // Submit to Netlify Forms
    const formBody = new URLSearchParams({
      'form-name': 'appointment',
      name: appointmentData.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
      timezone: appointmentData.timezone,
      appointmentType: appointmentData.appointmentType,
      date: appointmentData.selectedDate,
      clientTime: appointmentData.clientTime,
      brokerTime: appointmentData.brokerTime,
      notes: appointmentData.notes || 'None'
    });

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString()
    });

    const confirmationCode = 'APT-' + Math.random().toString(36).substr(2, 6).toUpperCase();

    navigate('/confirmation', {
      state: {
        appointment: {
          ...appointmentData,
          confirmationCode
        }
      }
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    alert('There was an error booking your appointment. Please try again.');
  } finally {
    setLoading(false);
  }
};

  // Generate next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (optional)
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const appointmentTypes = [
    { value: 'consultation', label: 'Free Consultation', duration: '20 minutes' },
    { value: 'quote_review', label: 'Quote Review', duration: '30 minutes' },
    { value: 'policy_review', label: 'Policy Review', duration: '30 minutes' }
  ];

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Phoenix', label: 'Arizona Time (MST)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
    { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Free Consultation</span>
          </h1>
          <p className="text-xl text-gray-600">
            Virtual meetings • Flexible scheduling • Same-day response
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step 1: Your Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Timezone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {timezones.map(tz => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Detected: {formData.timezone}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Appointment Type */}
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step 2: Appointment Type
              </h2>

              <div className="space-y-4">
                {appointmentTypes.map(type => (
                  <label
                    key={type.value}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                      formData.appointmentType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="appointmentType"
                      value={type.value}
                      checked={formData.appointmentType === type.value}
                      onChange={handleInputChange}
                      className="mt-1 mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.duration}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {type.value === 'consultation' && 'Get to know each other and discuss your insurance needs'}
                        {type.value === 'quote_review' && 'Review and compare quotes from multiple carriers'}
                        {type.value === 'policy_review' && 'Review your existing coverage and identify gaps'}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Select Date & Time */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step 3: Select Date & Time
              </h2>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedTime(null);
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Choose a date...</option>
                  {getAvailableDates().map(date => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                )}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Times <span className="text-red-500">*</span>
                  </label>
                  
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-2 text-sm text-gray-600">Loading available times...</p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-yellow-900">
                          <span className="font-semibold">Note:</span> Times shown in your local timezone ({
                            timezones.find(tz => tz.value === formData.timezone)?.label
                          }). Javon is in Eastern Time.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availableSlots.map(slot => (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`p-3 border-2 rounded-lg text-sm font-medium transition ${
                              selectedTime?.id === slot.id
                                ? 'border-yellow-600 bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-900'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                          >
                            <div>{slot.clientTime}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {slot.brokerTime}
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {errors.time && (
                    <p className="mt-2 text-sm text-red-500">{errors.time}</p>
                  )}
                </div>
              )}
            </div>

            {/* Step 4: Additional Information */}
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step 4: Additional Information (Optional)
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like to discuss?
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific questions or concerns you'd like to address..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Scheduling...' : 'Schedule Appointment'}
              </button>
              <p className="mt-4 text-sm text-gray-600">
                You'll receive a confirmation email after booking
              </p>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              You'll receive a confirmation email with appointment details
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              A calendar invite will be sent to your email
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              You'll receive reminders 24 hours and 1 hour before your appointment
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Need to reschedule? Use your confirmation number to make changes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
