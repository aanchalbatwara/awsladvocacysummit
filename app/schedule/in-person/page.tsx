import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Person Schedule | Educational Advocacy Summit 2026',
  description: 'Detailed schedule for the in-person Educational Advocacy Summit at the Washington State Capitol on February 13, 2026.',
};

export default function InPersonSchedule() {
  const scheduleItems = [
    {
      time: '9:00 - 9:30 AM',
      title: 'Check-In & Networking',
      description: 'Arrive at the Capitol, grab your badge and welcome packet with agenda & Capitol map. Connect with fellow student leaders from across Washington.'
    },
    {
      time: '9:00 - 9:15 AM',
      title: 'Opening Session & Welcome',
      description: (
        <>
          <span className="text-brand-gold font-bold">Gavin Cruz</span> and <span className="text-brand-gold font-bold">Aanchal Batwara</span> introduce AWSL and AWSP. Meet the Executive Board and key staff who will guide you throughout the day. Overview of the day's purpose and goals.
        </>
      )
    },
    {
      time: '9:15 - 9:30 AM',
      title: 'Youth Group Introductions',
      description: '1-2 minute introductions from each represented youth group. See your group pinned on a Washington State map!'
    },
    {
      time: '9:30 - 10:15 AM',
      title: 'Meetings with Legislators & Capitol Tours',
      description: 'Guided tours of the Washington State Capitol. Meet with legislators and learn firsthand about their work representing our communities.'
    },
    {
      time: '10:15 - 11:00 AM',
      title: 'Legislative Challenge: Write Your Own Bill',
      description: 'Work in mixed-region teams to choose a civic education-related issue. Draft a short "bill" with title, purpose, and 3-5 sections. Prepare a 2-3 minute pitch for the mock hearing.',
      highlight: true
    },
    {
      time: '11:00 - 11:30 AM',
      title: 'Special Session: Legislative Leadership',
      description: 'Guest speaker (Senator or House Speaker) shares insights on legislative leadership, youth voices, and civic engagement. Q&A with students.'
    },
    {
      time: '11:30 AM - 12:15 PM',
      title: 'Lunch Break',
      description: 'Enjoy a packed lunch or cafeteria options. Time to recharge and network with other students.'
    },
    {
      time: '12:15 - 1:00 PM',
      title: 'Mock Committee Hearings & Voting',
      description: 'Teams present their bills in a simulated committee hearing. Legislators and attendees ask questions. Vote on the top bill idea - winning team gets a prize!',
      highlight: true
    },
    {
      time: '1:00 - 2:15 PM',
      title: 'Panel Discussion & Partner Showcase',
      description: 'Hear from legislative staff, civic education advocates, and partner organizations. Learn about careers in public service and ways to stay engaged.'
    },
    {
      time: '2:15 - 2:45 PM',
      title: 'Alumni Action Planning',
      description: 'AWSL and USSYP alumni share how their experiences shaped their careers, advocacy, and civic engagement. Discover pathways from high school leadership to college, careers, and public service.'
    },
    {
      time: '2:45 - 3:00 PM',
      title: 'Closing Rally & Group Photo',
      description: 'Recognition of winning bill team. Group photo on the Capitol steps to commemorate your participation in this historic summit!',
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      {/* Header */}
      <div className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src="/images/IMG_2433.png"
            alt="Legislative Chamber"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-brand-gold hover:text-white mb-8 transition-colors font-semibold tracking-wide uppercase text-sm">
            <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 tracking-tight">In-Person Schedule</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-lg sm:text-xl font-light text-brand-cream/90">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Friday, February 13, 2026
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Washington State Capitol
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Info Box */}
        <div className="bg-white border-l-4 border-brand-gold p-8 mb-16 shadow-sm rounded-r-lg">
          <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 flex items-center">
            <svg className="h-6 w-6 mr-3 text-brand-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            What to Bring
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-brand-navy/80">
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Your enthusiasm and questions!</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Notebook and pen</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Packed lunch or cash</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Business casual attire</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>Valid ID for security</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                item.highlight ? 'is-active' : ''
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-cream bg-brand-navy group-[.is-active]:bg-brand-gold text-brand-cream shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.highlight ? (
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                   </svg>
                ) : (
                  <span className="w-2.5 h-2.5 bg-current rounded-full"></span>
                )}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-brand-navy/5 hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-2">
                  <span className="font-bold text-brand-gold text-sm tracking-wider uppercase mb-1">{item.time}</span>
                  <h3 className="text-xl font-serif font-bold text-brand-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-brand-navy/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-brand-navy rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-brand-cream/80 mb-8 text-lg max-w-2xl mx-auto">
              Register now to secure your spot at the in-person summit. Spaces are limited!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#register"
                className="bg-brand-gold text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Register for In-Person
              </Link>
              <Link
                href="/schedule/virtual"
                className="bg-transparent border border-brand-cream/30 text-brand-cream px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/10 transition-colors"
              >
                View Virtual Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
