import Link from 'next/link';
import Image from 'next/image';

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-16 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
            Choose Your Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you join us in person or virtually, you'll gain valuable insights into government and civic engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* In-Person Opportunities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative h-48 bg-brand-navy">
              <Image
                src="/images/IMG_2433.png"
                alt="Legislative Chamber"
                fill
                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-brand-navy/20"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-2xl font-serif font-bold mb-1">In-Person Experience</h3>
                <p className="text-blue-100 text-sm font-medium">February 13, 2026 • Washington State Capitol</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Meet & lobby with legislators</strong> and students across Washington
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Guided Capitol tours</strong> to learn state government functions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Mock legislative sessions</strong> where you draft and present bills
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Special sessions</strong> with Senators and House Speakers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Network with student leaders</strong> from across the state
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-navy mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Bring your voice & vision</strong> to shape civic education policy
                  </span>
                </li>
              </ul>
              <Link
                href="/schedule/in-person"
                className="mt-6 block text-center bg-brand-navy text-white py-3 px-6 rounded-lg hover:bg-brand-navy/90 transition-colors font-semibold shadow-sm"
              >
                View In-Person Schedule
              </Link>
            </div>
          </div>

          {/* Virtual Opportunities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-brand-teal p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-serif font-bold mb-2 relative z-10">Virtual Experience</h3>
              <p className="text-cyan-100 relative z-10">February 14, 2026 • Online via Zoom</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Join from anywhere</strong> in Washington State
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Interactive workshops</strong> on democracy, advocacy, and leadership
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Virtual legislative panels</strong> - connect directly with legislators
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Breakout room discussions</strong> with fellow students statewide
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Keynote speakers</strong> and alumni success stories
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong>Learn about civic engagement</strong> from home
                  </span>
                </li>
              </ul>
              <Link
                href="/schedule/virtual"
                className="mt-6 block text-center bg-brand-teal text-white py-3 px-6 rounded-lg hover:bg-brand-teal/90 transition-colors font-semibold shadow-sm"
              >
                View Virtual Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
