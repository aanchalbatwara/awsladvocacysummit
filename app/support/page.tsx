import Image from 'next/image';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Support <span className="text-brand-gold">AWSL</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Help us empower the next generation of student leaders in Washington State.
          </p>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-16 md:py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
              Why Your Support Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Imagine a world where every young leader, regardless of their background or financial situation, has the opportunity to ignite their potential. A world where the spark of leadership can flourish in every corner of our state.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Summer Camps Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-gold">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Summer Camps</h3>
              <p className="text-gray-600 leading-relaxed">
                Today, rising transportation costs pose a significant barrier, limiting access to transformative summer leadership camps for many promising young minds. These camps offer invaluable experiences that foster essential skills like critical thinking, problem-solving, and effective communication. They inspire young leaders to dream big and strive for greatness.
              </p>
            </div>

            {/* Student Voice Programs Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-teal">
              <div className="w-14 h-14 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Student Voice Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting AWSL Student Voice and student-centered initiatives is essential to closing access gaps and dismantling financial barriers that too often prevent students from fully stepping into their leadership potential. These programs create equitable pathways for students to grow, support one another, and sustain their leadership development as changemakers in their schools and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-brand-navy">
                Making Leadership Accessible
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By supporting the Association of Washington Student Leaders (AWSL), you can help remove barriers and empower a new generation of leaders. Your generous contribution will directly fund transportation subsidies, ensuring that historically underserved students from diverse backgrounds can attend life-changing camps and programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By investing in opportunities like Student Voice networks and summer leadership camps, we ensure that leadership is not limited by a student's zip code or financial situation, but is accessible to all who are ready to learn, lead, and make a difference.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Your Support Helps Us:</h3>
                <ul className="space-y-3">
                  {[
                    'Provide transportation subsidies for students',
                    'Fund scholarships for summer leadership camps',
                    'Expand Student Voice programs statewide',
                    'Create equitable pathways for all students',
                    'Develop future changemakers and leaders'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-brand-navy rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-4">
                    <svg className="w-10 h-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Make a Contribution</h3>
                  <p className="text-blue-200 text-sm">
                    Ensure the longevity of AWSL programs while supporting the Washington School Principals' Education Foundation.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm text-blue-200">
                      With your donation, you contribute to the continued success of AWSL programs – so that youth in Washington will have safe, fun, and welcoming schools for years to come.
                    </p>
                  </div>
                </div>

                <a
                  href="https://awsleaders.org/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-gold text-brand-navy font-bold py-4 px-6 rounded-lg hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-xl text-center text-lg"
                >
                  Donate Now
                </a>

                <p className="text-xs text-blue-300 text-center mt-4">
                  The Association of Washington Student Leaders is a division of the Washington School Principals' Education Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AWSL is proudly sponsored by the Association of Washington School Principals
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <Image
                src="/images/AWSL_Seal_Style_Logo_2021_final.png"
                alt="AWSL Logo"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 font-medium">Association of Washington Student Leaders</p>
              <p className="text-xs text-gray-500">Serving Since 1956</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/AWSP_logo_seal_tshirt_logo_front.png"
                alt="AWSP Logo"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 font-medium">Association of Washington School Principals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-teal py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Every contribution helps us build a brighter future for student leaders across Washington State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://awsleaders.org/support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Donate to AWSL
            </a>
            <Link
              href="/#register"
              className="bg-brand-navy text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg"
            >
              Register for the Summit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
