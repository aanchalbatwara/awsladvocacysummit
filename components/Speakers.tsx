import Image from 'next/image';

export default function Speakers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-brand-cream">
              <Image
                src="/images/speaker.jpg"
                alt="Lieutenant Governor Denny Heck speaking with students"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent p-6">
                <p className="text-white text-sm font-medium italic">
                  Students engage with Washington State leaders
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-6">
              Learn from State Leaders
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Get exclusive access to Washington State legislators, elected officials, and civic leaders
              who are passionate about empowering the next generation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-navy/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-navy" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-serif font-semibold text-brand-navy">Direct Interaction</h3>
                  <p className="text-gray-600">
                    Ask questions and engage in meaningful conversations with elected officials
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-serif font-semibold text-brand-navy">Real-World Insights</h3>
                  <p className="text-gray-600">
                    Learn how legislation is created and how you can influence policy
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-serif font-semibold text-brand-navy">Career Pathways</h3>
                  <p className="text-gray-600">
                    Explore opportunities in public service, law, and civic leadership
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-cream rounded-lg border-l-4 border-brand-navy">
              <p className="text-brand-navy italic font-medium">
                "We're committed to supporting the next generation of civic leaders. Your voice matters
                in shaping the future of Washington State."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
