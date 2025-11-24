import Link from 'next/link';
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
      description: 'James Laymen and Dr. Roz Thompson introduce AWSL and AWSP. Meet the Executive Board and key staff who will guide you throughout the day. Overview of the day\'s purpose and goals.'
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">In-Person Schedule</h1>
          <div className="text-xl sm:text-2xl mb-2">Friday, February 13, 2026</div>
          <div className="text-blue-100 text-lg">Washington State Capitol • Olympia, WA</div>
          <div className="text-blue-100 text-lg">9:00 AM - 3:00 PM</div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            What to Bring
          </h2>
          <ul className="text-blue-900 space-y-2">
            <li>• Your enthusiasm and questions for legislators!</li>
            <li>• Notebook and pen for taking notes</li>
            <li>• Packed lunch or cash for cafeteria (if not provided)</li>
            <li>• Professional/business casual attire recommended</li>
            <li>• Valid ID for Capitol security</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${
                item.highlight ? 'border-l-4 border-blue-600' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                    {item.title}
                  </h3>
                  <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {item.time}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {item.highlight && (
                  <div className="mt-3 flex items-center text-blue-600 font-semibold text-sm">
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

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Register now to secure your spot at the in-person summit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Register for In-Person
            </Link>
            <Link
              href="/schedule/virtual"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              View Virtual Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
