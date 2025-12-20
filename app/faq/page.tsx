import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-navy py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Important information regarding supervision, travel, and expectations for the summit.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* AWSL’s Role and Supervision */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-gold rounded-full"></span>
                AWSL’s Role and Supervision
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  The Association of Washington Student Leaders (AWSL) provides programming and staff support only during official, published summit sessions. AWSL staff are present solely for scheduled summit activities and do not supervise students outside of those sessions.
                </p>
                <p className="mt-4">
                  Supervision responsibility at all times rests with the student’s school, designated chaperones, parents or guardians, or the student, as applicable. Off-site activities, including meals, free time, and time between sessions, are not supervised by AWSL.
                </p>
              </div>
            </div>

            {/* Travel, Lodging, and Transportation Expectations */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-teal rounded-full"></span>
                Travel, Lodging, and Transportation Expectations
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  AWSL does not provide transportation or lodging for this event. All travel to and from the summit, as well as lodging arrangements and supervision, are the responsibility of the school, designated chaperones, or families.
                </p>
                <p className="mt-4">
                  Students may not drive themselves to or from the event, including during the summit day. Participation may involve travel-related and off-site risks, which the student, family, or school assumes. By registering, participants acknowledge and accept these expectations and responsibilities.
                </p>
              </div>
            </div>

          </div>

          {/* Contact / Support */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions? Feel free to reach out to our team.
            </p>
            <Link
              href="/about#team"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-navy hover:bg-brand-navy/90 transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
