import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            About <span className="text-brand-gold">AWSL</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering students to lead and make positive change within their schools, communities, and themselves since 1956.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-navy">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Providing opportunities that support and increase the personal, academic, and social success of each and every student.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-brand-gold">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where each and every student is equipped with the skills and confidence to become impactful leaders and compassionate changemakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply z-10" />
              <Image
                src="/images/people.jpg"
                alt="Students collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif italic text-lg">
                  "Leadership is about culture, community, and connection."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-brand-navy">
                A Legacy of Leadership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Association of Washington Student Leaders (AWSL) is a division of the Association of Washington School Principals (AWSP). Since 1956, AWSL has been the premier organization for student leadership development in Washington State.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that children at all grade levels have the potential to become leaders in their neighborhoods, schools, and communities. Our work is informed and inspired by school leaders—including students, staff, and principals.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-brand-navy mb-3">What We Do</h3>
                <ul className="space-y-3">
                  {[
                    'Train and empower students to lead',
                    'Support adults engaged in student success',
                    'Provide experiential opportunities for social-emotional growth',
                    'Promote the value of students as leaders'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals and student leaders working together to amplify youth voice in Washington.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* James Layman */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/images/james.jpeg"
                  alt="James Layman"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-1">James Layman</h3>
                <p className="text-sm font-semibold text-brand-gold uppercase tracking-wide mb-3">Director of the Association of Washington Student Leaders</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Leading with a passion for music, history, and student voice since 2017. James empowers students to find their own leadership rhythm through connection and culture.
                </p>
                <a href="mailto:james@awsleaders.org" className="text-brand-teal hover:text-brand-navy transition-colors text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  james@awsleaders.org
                </a>
              </div>
            </div>

            {/* Roz Thompson */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-80 w-full overflow-hidden bg-brand-navy/10">
                <Image
                  src="/images/roz.png"
                  alt="Roz Thompson"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-1">Roz Thompson</h3>
                <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide mb-3">Director of Government Relations and Advocacy at AWSP</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Bridging the gap between schools and the state legislature. Roz champions policies that support principals and students alike across Washington.
                </p>
                <a href="mailto:roz@awsp.org" className="text-brand-teal hover:text-brand-navy transition-colors text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  roz@awsp.org
                </a>
              </div>
            </div>

            {/* Aanchal Batwara */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-80 w-full overflow-hidden bg-brand-navy/10">
                <Image
                  src="/images/aanchal.png"
                  alt="Aanchal Batwara"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-1">Aanchal Batwara</h3>
                <p className="text-sm font-semibold text-brand-green uppercase tracking-wide mb-3">Student Leader</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Dedicated to elevating student voice in decision-making. Aanchal brings a fresh perspective from Tesla STEM High School to the statewide advocacy stage.
                </p>
                <a href="mailto:batwara.aanchal@gmail.com" className="text-brand-teal hover:text-brand-navy transition-colors text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  batwara.aanchal@gmail.com
                </a>
              </div>
            </div>

            {/* Gavin Cruz */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-80 w-full overflow-hidden bg-brand-navy/10">
                <Image
                  src="/images/gavin.jpeg"
                  alt="Gavin Cruz"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-1">Gavin Cruz</h3>
                <p className="text-sm font-semibold text-brand-green uppercase tracking-wide mb-3">Student Leader</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  A freshman at the University of Washington committed to civic engagement. Gavin represents the power of student advocacy in action.
                </p>
                <a href="mailto:gtbc@uw.edu" className="text-brand-teal hover:text-brand-navy transition-colors text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  gtbc@uw.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-teal py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Us at the Summit
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Experience the power of student voice firsthand at our upcoming Educational Advocacy Summit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#register"
              className="bg-white text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
