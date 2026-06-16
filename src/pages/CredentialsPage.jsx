import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CredentialsPage = () => {
  const [licenses, setLicenses] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLicensePhoto, setSelectedLicensePhoto] = useState(null);

  useEffect(() => {
    // Fetch credentials from API
    fetchCredentials();
  }, []);

  const fetchCredentials = async () => {
    try {
      // Replace with actual API call
      // const response = await fetch('/api/public/credentials');
      // const data = await response.json();
      
      // Mock data - Add as many states as needed
      setLicenses([
        {
          id: 1,
          state: 'MD',
          state_name: 'Maryland',
          license_number: '3002687577',
          issue_date: '2026-01-01',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=MD&searchType=Licensee',
          license_photo_url: null//photo url
        },
        {
          id: 2,
          state: 'VA',
          state_name: 'Virginia',
          license_number: '1405797',
          issue_date: '2025-02-12',
          status: 'Active',
          verification_url: 'https://www.scc.virginia.gov/boi/consumerinquiry/Search.aspx?searchType=agent',
          license_photo_url: null
        },
        {
          id: 3,
          state: 'DC',
          state_name: 'District of Columbia',
          license_number: '3003230720',
          issue_date: '2024-08-13',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=DC&searchType=Licensee',
          license_photo_url: null
        },
        {
          id: 4,
          state: 'GA',
          state_name: 'Georgia',
          license_number: '3746626',
          issue_date: '2024-09-19',
          status: 'Active',
          verification_url: 'https://www.sircon.com/ComplianceExpress/Inquiry/consumerInquiry.do',
          license_photo_url: '/licenses/Georgia.png'
        },
        {
          id: 5,
          state: 'TX',
          state_name: 'Texas',
          license_number:'3146446',
          issue_date: '2024-03-12',
          status: 'Active',
          verification_url: 'https://www.sircon.com/ComplianceExpress/Inquiry/consumerInquiry.do?nonSscrb=Y',
          license_photo_url: '/licenses/Texas.png'
        },
        {
          id: 6,
          state: 'NC',
          state_name: 'North Carolina',
          license_number: '20831334',
          issue_date: '2024-04-15',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=NC&searchType=Licensee',
          license_photo_url: null
        },
         {
          id: 7,
          state: 'SC',
          state_name: 'South Carolina',
          license_number: '20831334',
          issue_date: '2024-10-26',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=SC&searchType=Licensee',
          license_photo_url: '/licenses/SouthCarolina.png'
        },
         {
          id: 8,
          state: 'WV',
          state_name: 'West Virginia',
          license_number: '20831334',
          issue_date: '2024-12-05',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=WV&searchType=Licensee',
          license_photo_url: '/licenses/WestVirginia.png'
        },
         {
          id: 9,
          state: 'KY',
          state_name: 'Kentucky',
          license_number: '1368193',
          issue_date: '2024-10-24',
          status: 'Active',
          verification_url: 'https://insurance.ky.gov/ppc/Agent/Default.aspx',
          license_photo_url: '/licenses/Kentucky.png'
        },
         {
          id: 10,
          state: 'AR',
          state_name: 'Arkansas',
          license_number: '20831334',
          issue_date: '2025-05-16',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=AR&searchType=Licensee',
          license_photo_url: '/licenses/Arkansas.png'
        },
         {
          id: 11,
          state: 'AZ',
          state_name: 'Arizona',
          license_number: '20831334',
          issue_date: '2025-09-16',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=AZ&searchType=Licensee',
          license_photo_url: '/licenses/Arizona.png'
        },
         {
          id: 12,
          state: 'WA',
          state_name: 'Washington',
          license_number: '1291386',
          issue_date: '2025-01-14',
          status: 'Active',
          verification_url: 'https://fortress.wa.gov/oic/consumertoolkit/Search.aspx',
          license_photo_url: '/licenses/Washington.png'
        },
         {
          id: 13,
          state: 'AL',
          state_name: 'Alabama',
          license_number: '3003358112',
          issue_date: '2024-10-27',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=AL&searchType=Licensee',
          license_photo_url: '/licenses/Alabama.png'
        },
         {
          id: 14,
          state: 'TN',
          state_name: 'Tennessee',
          license_number: '3003381794 ',
          issue_date: '2024-11-13',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=TN&searchType=Licensee',
          license_photo_url: '/licenses/Tennessee.png'
        },
         {
          id: 15,
          state: 'FL',
          state_name: 'Florida',
          license_number: 'G195362',
          issue_date: '2024-12-11',
          status: 'Active',
          verification_url: 'https://licenseesearch.fldfs.com/',
          license_photo_url: null
        },
         {
          id: 16,
          state: 'MI',
          state_name: 'Michigan',
          license_number: '1341756',
          issue_date: '2024-11-21',
          status: 'Active',
          verification_url: 'https://difs.state.mi.us/locators/?searchtype=InsAgent',
          license_photo_url: null
        },
         {
          id: 17,
          state: 'WI',
          state_name: 'Wisconsin',
          license_number: '20831334',
          issue_date: '2024-12-03',
          status: 'Active',
          verification_url: 'https://sbs.naic.org/solar-external-lookup/?jurisdiction=WI&searchType=Licensee',
          license_photo_url: '/licenses/Wisconsin.png'
        },
         {
          id: 18,
          state: 'LA',
          state_name: 'Louisiana',
          license_number: '1194307',
          issue_date: '2024-11-19',
          status: 'Active',
          verification_url: 'https://www.ldi.la.gov/onlineservices/ProducerAdjusterSearch/',
          license_photo_url: null
        },
        {
          id: 19,
          state: 'OH',
          state_name: 'Ohio',
          license_number: '1570724',
          issue_date: '2024-12-31',
          status: 'Active',
          verification_url: 'https://www.ldi.la.gov/onlineservices/ProducerAdjusterSearch/',
          license_photo_url: '/licenses/Ohio.png'
        },
       
        // ADD MORE STATES HERE - Just copy the format above
        // Example:
        // {
        //   id: 7,
        //   state: 'FL',
        //   state_name: 'Florida',
        //   license_number: '[License Number]',
        //   issue_date: '2023-01-01',
        //   status: 'Active',
        //   verification_url: 'https://www.myfloridacfo.com/division/agents/',
        //   license_photo_url: '/licenses/florida-license.jpg'
        // },
      ]);

      setCarriers([
        {
          id: 1,
          name: 'Mutual of Omaha',
          logo_url: null,
          am_best_rating: 'A+',
          appointment_date: '2023-01-01'
        },
        {
          id: 2,
          name: 'Ameritas',
          logo_url: null,
          am_best_rating: 'A',
          appointment_date: '2023-01-01'
        },
        {
          id: 3,
          name: 'Americo',
          logo_url: null,
          am_best_rating: 'A',
          appointment_date: '2023-01-01'
        },
        {
          id: 4,
          name: 'American Amicable',
          logo_url: null,
          am_best_rating: 'A-',
          appointment_date: '2023-01-01'
        },
        {
          id: 5,
          name: 'Ethos',
          logo_url: null,
          am_best_rating: 'A',
          appointment_date: '2023-01-01'
        },
        {
          id: 6,
          name: 'Foresters',
          logo_url: null,
          am_best_rating: 'A',
          appointment_date: '2023-01-01'
        }

      ]);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching credentials:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Credentials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building trust through transparency and professional excellence
            </p>
          </div>
        </div>
      </section>

      {/* State Licenses */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              State Licenses
            </h2>
            <p className="text-lg text-gray-600">
              I am licensed and authorized to sell life insurance in the following states
            </p>
          </div>

          <div className="space-y-6">
            {licenses.map((license) => (
              <div
                key={license.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition border border-gray-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {license.state_name}
                      </h3>
                      <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {license.status}
                      </span>
                    </div>
                    <div className="space-y-1 text-gray-600">
                      <p>
                        <span className="font-medium">License Number:</span> {license.license_number}
                      </p>
                      <p>
                        <span className="font-medium">Issue Date:</span>{' '}
                        {new Date(license.issue_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  {/* License Photo Preview */}
                  {license.license_photo_url && (
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setSelectedLicensePhoto(license)}
                        className="relative group"
                      >
                        <img
                          src={license.license_photo_url}
                          alt={`${license.state_name} License`}
                          className="w-48 h-32 object-cover rounded-lg border-2 border-gray-300 group-hover:border-yellow-500 transition shadow-md"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition flex items-center justify-center">
                          <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">Click to enlarge</p>
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={license.verification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition text-sm font-medium shadow-md"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verify License
                    </a>
                    {!license.license_photo_url && (
                      <p className="text-xs text-gray-500 text-center">License photo available upon request</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* License Photo Modal */}
          {selectedLicensePhoto && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLicensePhoto(null)}
            >
              <div className="relative max-w-4xl max-h-screen">
                <button
                  onClick={() => setSelectedLicensePhoto(null)}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedLicensePhoto.license_photo_url}
                  alt={`${selectedLicensePhoto.state_name} License`}
                  className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute -bottom-12 left-0 right-0 text-center text-white">
                  <p className="text-lg font-semibold">{selectedLicensePhoto.state_name} License</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 bg-gradient-to-br from-yellow-50 to-white rounded-lg p-6 border border-yellow-200">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">License Verification</h4>
                <p className="text-gray-700">
                  You can verify any of my state licenses by clicking the "Verify License" button above.
                  This will take you to the official state insurance department website where you can
                  confirm my licensing status and credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top Carrier Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I work with these trusted, top-rated insurance carriers to bring you
              the best options and competitive rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carriers.map((carrier) => (
              <div
                key={carrier.id}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition border border-gray-200"
              >
                {/* Carrier Logo Placeholder */}
                <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  {carrier.logo_url ? (
                    <img
                      src={carrier.logo_url}
                      alt={carrier.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-xl font-bold text-gray-400">
                      {carrier.name}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {carrier.name}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">AM Best Rating:</span>
                    <span className="font-semibold text-gray-900">{carrier.am_best_rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Appointed Since:</span>
                    <span className="font-semibold text-gray-900">
                      {new Date(carrier.appointment_date).getFullYear()}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Active Appointment
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What Does This Mean For You?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Being appointed with multiple top-rated carriers means I can shop the market
                on your behalf. Unlike captive agents who work for just one company, I have
                the flexibility to compare options across multiple insurers to find the best
                coverage and rates for your specific situation.
              </p>
              <p>
                All of these carriers maintain strong financial ratings from AM Best, ensuring
                they have the stability and resources to honor their commitments to policyholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AM Best Rating Explanation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Understanding AM Best Ratings
          </h2>
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg p-6 border border-yellow-200">
            <p className="text-gray-700 mb-4">
              AM Best is the oldest and most respected insurance rating agency. Their ratings
              measure an insurance company's financial strength and ability to pay claims.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <div className="font-bold text-lg text-gray-900 mb-2">A++ / A+</div>
                <div className="text-gray-600">Superior</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-bold text-lg text-gray-900 mb-2">A / A-</div>
                <div className="text-gray-600">Excellent</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-bold text-lg text-gray-900 mb-2">B++ / B+</div>
                <div className="text-gray-600">Good</div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              All carriers I work with maintain ratings of A- or better, ensuring your policy
              is backed by financially stable companies.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Affiliations (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Development
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-gray-700 text-center">
              I maintain my licenses through ongoing professional development and continuing
              education. I stay current with industry regulations, new products, and best
              practices to provide you with the most informed guidance possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free consultation to discuss your life insurance needs.
          </p>
          <Link
            to="/book"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CredentialsPage;
