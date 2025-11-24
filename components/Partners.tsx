import Image from 'next/image';

export default function Partners() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
            Support the Summit
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto">
            Help us bring civic education to students across Washington State
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Looking For */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-brand-navy/10 flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/images/IMG_7110.png"
                alt="Capitol Rotunda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white">We're Looking For</h3>
              </div>
            </div>
            
            <div className="p-8 flex-grow space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-navy/5 flex items-center justify-center border border-brand-navy/10">
                  <svg className="h-6 w-6 text-brand-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-bold text-brand-navy text-lg mb-1">Legislative Partners</h4>
                  <p className="text-brand-navy/70 leading-relaxed">
                    A legislator to speak at the event and help reserve presentation space
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                  <svg className="h-6 w-6 text-brand-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-bold text-brand-navy text-lg mb-1">Sponsorship Support</h4>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Organizations to help fund transportation, meals, and educational materials
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
                  <svg className="h-6 w-6 text-brand-teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-serif font-bold text-brand-navy text-lg mb-1">Community Partners</h4>
                  <p className="text-brand-navy/70 leading-relaxed">
                    Organizations to host workshops, exhibit, and connect with student leaders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="bg-brand-navy rounded-xl shadow-lg p-8 text-white flex flex-col border border-brand-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8 text-brand-gold relative z-10">Sponsorship Benefits</h3>
            <ul className="space-y-6 relative z-10 flex-grow">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-4 text-brand-cream/90 text-lg"><strong>Workshop Opportunity:</strong> Host a session on your organization's work and mission</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-4 text-brand-cream/90 text-lg"><strong>Exhibitor Table:</strong> Share information and connect with student leaders statewide</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-4 text-brand-cream/90 text-lg"><strong>Organization Recognition:</strong> Placement on summit materials and promotional content</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="ml-4 text-brand-cream/90 text-lg"><strong>Direct Access:</strong> Network with students, educators, and policymakers</span>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-brand-gold/20 relative z-10">
              <p className="text-brand-cream mb-6 font-serif italic text-lg">
                Interested in partnering with us?
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:batwara.aanchal@gmail.com"
                  className="block bg-brand-navy text-brand-gold border border-brand-gold px-6 py-4 rounded-lg hover:bg-brand-navy/90 transition-all font-bold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Contact Aanchal Batwara
                </a>
                <a
                  href="mailto:gtbc@uw.edu"
                  className="block bg-transparent border-2 border-brand-gold text-brand-gold px-6 py-4 rounded-lg hover:bg-brand-gold/10 transition-all font-bold text-center"
                >
                  Contact Gavin Cruz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
