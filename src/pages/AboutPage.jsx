import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moore Life
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Moore Freedom
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Professional life insurance guidance with personalized service
              and access to top-rated carriers
            </p>
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get to Know Javon
            </h2>
            <p className="text-xl text-gray-600">
              A personal message about my approach to life insurance
            </p>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white text-lg">Video Introduction</p>
                <p className="text-gray-400 text-sm mt-2">2 minutes</p>
              </div>
            </div>
            {/* 
              Replace above placeholder with:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Broker Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div>
              <div className="aspect-square bg-gray-300 rounded-2xl overflow-hidden shadow-xl">  
                <img
                src="/images/javon.png"
                alt="Javon Moore - Professional Life Insurance Agent"
               className="w-full h-full object-cover"/>
               </div>
                </div>
              
        


            {/* Bio */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who I Am
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Javon Moore is the founder of Moores Life Insurance, bringing a fresh, client-centered 
                  approach to life insurance planning. With a CLU (Chartered Life Underwriter) designation 
                  and two years of dedicated service, Javon has built his practice on a simple principle: 
                  taking the time to truly understand what each family needs.
                </p>
                <p>
                  What sets Javon apart is his commitment to finding solutions for everyone. Many of his 
                  clients come to him after being told they "don't qualify" or that life insurance is "too 
                  expensive." Javon sees these challenges differently—not as roadblocks, but as opportunities 
                  to explore creative solutions. His expertise in Indexed Universal Life (IUL) insurance 
                  allows him to help clients prepare for retirement while building their own financial 
                  institution through policies linked to the S&P 500.
                </p>
                <p>
                  Working with multiple top-rated carriers including Mutual of Omaha, Ameritas, Americo, 
                  American Amicable, and Ethos means Javon isn't limited to a one-size-fits-all approach. 
                  Whether you need temporary coverage through term life insurance or permanent protection 
                  with living benefits through whole life, he'll compare options to find what truly fits 
                  your budget and goals.
                </p>
                <p>
                  Licensed in Maryland, Virginia, DC, Georgia, Texas, North Carolina, and 14 other states, Javon serves 
                  clients aged 18-70 with household incomes from $40K to $150K and beyond. His mission is 
                  simple: "Moore Life Moore Freedom"—helping families achieve financial security and peace 
                  of mind through smart insurance planning.
                </p>
              </div>
            </div>
          </div>
        </div>
              </section>

      {/* What I Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I Help
            </h2>
            <p className="text-xl text-gray-600">
              A straightforward approach to finding the right coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Consultation */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free Consultation
              </h3>
              <p className="text-gray-600">
                No obligation assessment of your needs. We'll discuss your situation,
                family goals, and coverage requirements in a pressure-free environment.
              </p>
            </div>

            {/* Compare Options */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compare Multiple Carriers
              </h3>
              <p className="text-gray-600">
                Access to 20+ top-rated insurance carriers means we can compare rates,
                coverage options, and benefits to find the best fit for your budget.
              </p>
            </div>

            {/* Expert Guidance */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Personalized recommendations based on your unique situation, with ongoing
                support throughout the life of your policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Work With Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Licensed in 19 States</h3>
                <p className="text-gray-600">MD, VA, DC, GA, TX, NC, AL, AZ, AR, FL, IN, KY, LA, MI, SC, TN, WA, WI, WV, OH</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">5 Top-Rated Carriers</h3>
                <p className="text-gray-600">Access to multiple A-rated insurance companies</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Client-Focused Approach</h3>
                <p className="text-gray-600">Takes time to understand what your family needs</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Solutions for Everyone</h3>
                <p className="text-gray-600">Helping clients who previously didn't qualify</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">IUL Specialist</h3>
                <p className="text-gray-600">Expert in retirement planning with S&P 500-linked policies</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">CLU Designation</h3>
                <p className="text-gray-600">Chartered Life Underwriter certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free, no-obligation consultation to discuss your life insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/credentials"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
            >
              View My Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
