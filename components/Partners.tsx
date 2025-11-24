export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Support the Summit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Help us bring civic education to students across Washington State
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Looking For */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">We're Looking For</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Legislative Partners</h4>
                  <p className="text-gray-600">
                    A legislator to speak at the event and help reserve presentation space
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Sponsorship Support</h4>
                  <p className="text-gray-600">
                    Organizations to help fund transportation, meals, and educational materials
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Community Partners</h4>
                  <p className="text-gray-600">
                    Organizations to host workshops, exhibit, and connect with student leaders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Sponsorship Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Workshop Opportunity:</strong> Host a session on your organization's work and mission</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Exhibitor Table:</strong> Share information and connect with student leaders statewide</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Organization Recognition:</strong> Placement on summit materials and promotional content</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Direct Access:</strong> Network with students, educators, and policymakers</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-blue-500">
              <p className="text-blue-100 mb-4">
                Interested in partnering with us?
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:batwara.aanchal@gmail.com"
                  className="block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                >
                  Contact Aanchal Batwara
                </a>
                <a
                  href="mailto:gtbc@uw.edu"
                  className="block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                >
                  Contact Gavin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
