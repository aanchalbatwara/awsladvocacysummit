import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Schedule | Educational Advocacy Summit 2026',
  description: 'Detailed schedule for the virtual Educational Advocacy Summit on February 21, 2026. Join from anywhere in Washington State!',
};

export default function VirtualSchedule() {
  const scheduleItems = [
    {
      time: '9:30 AM',
      title: 'Virtual Check-In & Welcome',
      description: 'The summit opens with a virtual welcome as students join from across Washington and beyond. Statewide youth leaders introduce the goals of the day and guide participants through brief icebreakers designed to build connections and set expectations for an engaging, interactive experience.',
      type: 'welcome'
    },
    {
      time: '9:35 AM',
      title: 'Icebreaker',
      description: 'Students participate in short, interactive activities and breakout rooms that encourage conversation, collaboration, and relationship-building in a virtual setting.',
      type: 'activity'
    },
    {
      time: '9:40 AM',
      title: 'Guest Speaker: Anjali Verma @ Stanford University',
      description: 'Anjali Verma, a nationally recognized youth civic leader, shares her journey in public service and civic engagement. Drawing from her experience as a former United States Senate Youth Program delegate and young elected official, she will speak about the power of student voice, pathways into leadership, and how young people can create meaningful change at the local, state, and national levels. Anjali is a first-year Public Policy major at Stanford University.',
      type: 'keynote',
      highlight: true
    },
    {
      time: '10:10 AM',
      title: 'Workshop Series (Breakout Rooms)',
      description: 'Choose ONE interactive workshop to attend:',
      type: 'workshop',
      highlight: true,
      workshops: [
        {
          title: 'Democracy 101: How Government Works',
          description: 'An introduction to the structure and function of government, led by student leaders, focused on building foundational civic knowledge.'
        },
        {
          title: 'Advocacy 101: Finding Your Issue',
          description: 'Led by the League of Education Voters, this session helps students identify issues they care about and understand how to turn concerns into advocacy action.'
        },
        {
          title: 'Building Your Advocacy Toolkit',
          description: 'A skills-based workshop led by AWSL Director James Layman, focused on organizing, messaging, and practical tools for effective advocacy.'
        }
      ]
    },
    {
      time: '10:40 - 10:55 AM',
      title: 'BREAK',
      description: 'Students take a short break to recharge before the final sessions of the summit.',
      type: 'break'
    },
    {
      time: '10:55 AM',
      title: 'Rotating Panels',
      description: 'Join rotating panels in breakout rooms:',
      type: 'panel',
      highlight: true,
      panels: [
        {
          title: 'Panel A: Meet Your Legislators',
          description: 'This interactive panel features elected officials from both parties alongside legislative staff, including T’Wina Nobles, Senator Torres, and Megan Wargacki. Panelists discuss their work, how legislation is shaped, and answer student questions in a moderated Q&A.'
        },
        {
          title: 'Panel B: Civic Education Today: Where Are We Now?',
          description: 'Featuring Jodi Sandfort, Dean of the University of Washington Evans School of Public Policy & Governance, this session explores the state of civic education in the U.S., its challenges, and opportunities for strengthening youth engagement.'
        }
      ]
    },
    {
      time: '11:55 AM - 12:00 PM',
      title: 'Closing Session: From Learning to Action & Future Goals',
      description: 'The summit concludes with reflections from youth and AWSL alumni on continued civic engagement beyond high school. Students receive resources for staying involved in advocacy and civic leadership, along with a collective closing moment to mark the experience.',
      type: 'closing'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      {/* Header */}
      <div className="relative bg-brand-teal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src="/images/IMG_0294.png"
            alt="Capitol Aerial View"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-brand-teal/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-brand-cream hover:text-white mb-8 transition-colors font-semibold tracking-wide uppercase text-sm">
            <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 tracking-tight">Virtual Schedule</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-lg sm:text-xl font-light text-brand-cream/90">
            <div className="flex items-center font-bold">
              <svg className="h-6 w-6 mr-2 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Saturday, February 21, 2026
            </div>
            <div className="flex items-center font-bold">
              <svg className="h-6 w-6 mr-2 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              100% Online via Zoom
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Info Box */}
        <div className="bg-white border-l-4 border-brand-teal p-8 mb-16 shadow-sm rounded-r-lg">
          <h2 className="text-2xl font-serif font-bold text-brand-teal mb-4 flex items-center">
            <svg className="h-6 w-6 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            Virtual Setup Tips
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-brand-navy/80">
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Stable internet connection</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Zoom installed & tested</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Quiet space for participation</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Notebook ready</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Camera on encouraged!</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>Accessible statewide</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-teal/30 before:to-transparent">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                item.highlight ? 'is-active' : ''
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-cream bg-brand-teal group-[.is-active]:bg-brand-navy text-brand-cream shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.highlight ? (
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                   </svg>
                ) : (
                  <span className="w-2.5 h-2.5 bg-current rounded-full"></span>
                )}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-brand-teal/10 hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-2">
                  <span className="font-bold text-brand-teal text-sm tracking-wider uppercase mb-1">{item.time}</span>
                  <h3 className="text-xl font-serif font-bold text-brand-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-brand-navy/70 leading-relaxed mb-4">{item.description}</p>

                {/* Workshop Options */}
                {item.workshops && (
                  <div className="mt-4 space-y-3">
                    {item.workshops.map((workshop, wIndex) => (
                      <div key={wIndex} className="bg-brand-cream p-4 rounded-lg border border-brand-teal/10">
                        <h4 className="font-serif font-bold text-brand-teal mb-1">{workshop.title}</h4>
                        <p className="text-sm text-brand-navy/80">{workshop.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Panel Options */}
                {item.panels && (
                  <div className="mt-4 space-y-3">
                    {item.panels.map((panel, pIndex) => (
                      <div key={pIndex} className="bg-brand-cream p-4 rounded-lg border border-brand-teal/10">
                        <h4 className="font-serif font-bold text-brand-teal mb-1">{panel.title}</h4>
                        <p className="text-sm text-brand-navy/80">{panel.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm border border-brand-teal/10 p-10">
          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-10 text-center">Why Join Virtually?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-brand-teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-3">Accessible Statewide</h3>
              <p className="text-brand-navy/70">Join from anywhere in Washington - no travel required</p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-brand-teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-3">Connect with Leaders</h3>
              <p className="text-brand-navy/70">Network with legislators, students, and educators virtually</p>
            </div>

            <div className="text-center group">
              <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-brand-teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-3">Interactive Learning</h3>
              <p className="text-brand-navy/70">Hands-on workshops, simulations, and breakout discussions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-brand-teal rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Participate Virtually?</h2>
            <p className="text-brand-cream/90 mb-8 text-lg max-w-2xl mx-auto">
              Join from anywhere in Washington State on February 21st.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#register"
                className="bg-white text-brand-teal px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream transition-colors"
              >
                Register for Virtual Summit
              </Link>
              <Link
                href="/schedule/in-person"
                className="bg-transparent border border-brand-cream/30 text-brand-cream px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/10 transition-colors"
              >
                View In-Person Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
