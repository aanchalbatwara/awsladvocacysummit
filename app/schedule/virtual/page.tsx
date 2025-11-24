import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Schedule | Educational Advocacy Summit 2026',
  description: 'Detailed schedule for the virtual Educational Advocacy Summit on February 14, 2026. Join from anywhere in Washington State!',
};

export default function VirtualSchedule() {
  const scheduleItems = [
    {
      time: '9:00 - 9:15 AM',
      title: 'Virtual Check-In & Welcome',
      description: 'Join Zoom and receive digital welcome packets. AWSL/AWSP leaders introduce themselves and overview the virtual day format and breakout room assignments.',
      type: 'welcome'
    },
    {
      time: '9:15 AM',
      title: 'Icebreaker Activity',
      description: 'Share your most memorable leadership experience via chat or unmute. Connect with fellow student leaders from across the state!',
      type: 'activity'
    },
    {
      time: '9:15 - 9:35 AM',
      title: 'Keynote: "Your Voice Matters: Youth Advocacy in Action"',
      description: 'Virtual keynote speaker (live or recorded) on civic engagement. Could be a former USSYP delegate, young elected official, or civic education leader. Q&A via chat or raised hands.',
      type: 'keynote',
      highlight: true
    },
    {
      time: '9:35 - 10:15 AM',
      title: 'Workshop Series (Breakout Rooms)',
      description: 'Choose ONE interactive workshop to attend:',
      type: 'workshop',
      highlight: true,
      workshops: [
        {
          title: 'Democracy 101: How Government Actually Works',
          description: 'Interactive lesson on three branches, how bills become laws. Includes Kahoot or Poll Everywhere quiz!'
        },
        {
          title: 'Advocacy 101: Finding Your Issue',
          description: 'Learn how to identify issues you care about and build effective advocacy campaigns'
        },
        {
          title: 'Building Your Advocacy Toolkit',
          description: 'How to research issues, contact legislators, write testimony. Template sharing and practice activities.'
        }
      ]
    },
    {
      time: '10:15 - 10:30 AM',
      title: 'Break',
      description: 'Take a short break to stretch, grab a snack, and recharge!',
      type: 'break'
    },
    {
      time: '10:30 - 11:25 AM',
      title: 'Virtual Legislative Panels (Rotating)',
      description: 'Join rotating panels in breakout rooms - choose or rotate between:',
      type: 'panel',
      highlight: true,
      panels: [
        {
          title: 'Panel A: Connect with Legislators',
          description: '2-3 legislators join to discuss their work and answer student questions'
        },
        {
          title: 'Panel B: Legislative Staff Careers',
          description: 'Staffers share their roles, daily work, and career paths in public service'
        },
        {
          title: 'Panel C: Civic Education in Washington',
          description: 'Educators and advocates discuss current state of civics learning and future directions'
        }
      ]
    },
    {
      time: '11:25 AM - 12:30 PM',
      title: 'Interactive Civic Challenge: Virtual Town Hall Simulation',
      description: 'Mixed groups via breakout rooms receive community issue scenarios (education budget, climate policy, etc.). Research, discuss, and prepare position statements. Present briefly to the full Zoom. Hands-on collaborative activity simulating real community advocacy!',
      type: 'activity',
      highlight: true
    },
    {
      time: '12:30 PM - 1:00 PM',
      title: 'Closing Session: From Learning to Action',
      description: 'AWSL alumni share how they\'ve continued civic engagement after high school. Learn about programs like USSYP and Page School. Group screenshot for memories! Survey link shared for feedback.',
      type: 'closing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
            <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Virtual Schedule</h1>
          <div className="text-xl sm:text-2xl mb-2">Saturday, February 14, 2026</div>
          <div className="text-green-100 text-lg">100% Online via Zoom</div>
          <div className="text-green-100 text-lg">9:00 AM - 1:00 PM</div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Info Box */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 mb-3 flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            Virtual Setup Tips
          </h2>
          <ul className="text-green-900 space-y-2">
            <li>• Stable internet connection recommended</li>
            <li>• Have Zoom installed and test your audio/video beforehand</li>
            <li>• Find a quiet space for participation</li>
            <li>• Notebook ready for taking notes</li>
            <li>• Camera on encouraged for networking!</li>
            <li>• Accessible from anywhere in Washington State</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${
                item.highlight ? 'border-l-4 border-green-600' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                    {item.title}
                  </h3>
                  <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {item.time}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">{item.description}</p>

                {/* Workshop Options */}
                {item.workshops && (
                  <div className="mt-4 space-y-3">
                    {item.workshops.map((workshop, wIndex) => (
                      <div key={wIndex} className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-1">{workshop.title}</h4>
                        <p className="text-sm text-green-700">{workshop.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Panel Options */}
                {item.panels && (
                  <div className="mt-4 space-y-3">
                    {item.panels.map((panel, pIndex) => (
                      <div key={pIndex} className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-1">{panel.title}</h4>
                        <p className="text-sm text-green-700">{panel.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {item.highlight && (
                  <div className="mt-3 flex items-center text-green-600 font-semibold text-sm">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                    Featured Activity
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Join Virtually?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessible Statewide</h3>
              <p className="text-gray-600 text-sm">Join from anywhere in Washington - no travel required</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect with Leaders</h3>
              <p className="text-gray-600 text-sm">Network with legislators, students, and educators virtually</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600 text-sm">Hands-on workshops, simulations, and breakout discussions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Participate Virtually?</h2>
          <p className="text-green-100 mb-6 text-lg">
            Join from anywhere in Washington State on February 14th
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Register for Virtual Summit
            </Link>
            <Link
              href="/schedule/in-person"
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              View In-Person Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
