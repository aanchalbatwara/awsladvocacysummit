import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Person Schedule | Educational Advocacy Summit 2026',
  description: 'Detailed schedule for the in-person Educational Advocacy Summit at the Washington State Capitol on February 20, 2026.',
};

export default function InPersonSchedule() {
  const scheduleItems = [
    {
      time: '9:00 – 9:15 AM',
      title: 'Check-In & Welcome',
      description: 'The day begins with participant check-in and opening remarks. Students receive summit materials and are welcomed by statewide youth leaders, setting the tone for a collaborative, youth-driven day of civic engagement.'
    },
    {
      time: '9:15 AM',
      title: 'Youth Group Introductions: Our Statewide Network',
      description: 'Students representing youth organizations from across Washington introduce themselves and their communities. This session highlights the geographic and cultural diversity of Washington’s student advocacy landscape and emphasizes the power of statewide collaboration.'
    },
    {
      time: '9:30 AM – 10:00 AM',
      title: 'Keynote Speaker Lieutenant Gov. Denny Heck',
      description: 'Lieutenant Governor Denny Heck brings decades of experience in public service, economic policy, and education advocacy. In his keynote, he will reflect on leadership, the policymaking process, and why youth voices are essential to strengthening democracy in Washington State.',
      highlight: true
    },
    {
      time: '10:00 AM - 10:45 AM',
      title: 'Legislative Challenge: Write Your Own Bill (Competition)',
      description: 'In this interactive, team-based challenge, students step into the role of legislators. Students are first taught the basics of bill writing, then draft a mock bill addressing a real issue facing Washington, and finally prepare a short 2-3 minute pitch for a simulated hearing. This activity introduces students to legislative structure, persuasive advocacy, and policy problem-solving. Hot Topics in WA State: FAFSA Updates, Healthcare, Education.',
      highlight: true
    },
    {
      time: '10:45 AM - 11:15 AM',
      title: 'AM Workshops (LEV or WYA)',
      description: 'Students rotate through interactive workshops led by League of Education Voters (LEV) and Washington Youth Alliance (WYA), focused on civic participation, youth voice, public speaking, voting, and student well-being. Sessions emphasize skill-building, discussion, and direct engagement that equips students to advocate effectively in their schools and communities. Includes Q&A with students.'
    },
    {
      time: '11:15 AM - 12:00 PM',
      title: 'Capitol Tour',
      description: 'Participants will tour the Washington State Capitol, including the Legislative Building and the John L. O’Brien, Cherberg, and Temple of Justice buildings. Students will see where lawmakers meet, where legislative staff work, and where the state’s highest court operates, gaining a concrete understanding of how Washington’s government functions day to day.'
    },
    {
      time: '12:00 PM - 12:45 PM',
      title: 'Lunch',
      description: 'Lunch is provided for all attendees and offers students time to connect informally with peers, facilitators, and guest speakers. Representatives from statewide organizations, including the Secretary of State’s Office and the State Board of Education, will be present for informal conversation and networking. Vegetarian options will be available.'
    },
    {
      time: '12:45 PM - 1:05 PM',
      title: 'SVN Led Workshop (transitional activity or break)',
      description: 'This AWSL-led workshop introduces how Washington State’s legislature works, including its structure, key roles, and the steps a bill takes to become law. Students will also learn practical ways to get involved in advocacy, from voting and testimony to engaging with local and state officials, ending with an interactive activity that reinforces key concepts in a fun, engaging way.'
    },
    {
      time: '1:05 - 1:30 PM',
      title: 'Committee Hearings',
      description: 'Student teams present their drafted bills in simulated committee hearings. Participants practice public testimony, respond to questions, and receive feedback. Attendees vote to recognize standout policy ideas.',
      highlight: true
    },
    {
      time: '1:30 - 2:00 PM',
      title: 'PM Workshops #2',
      description: 'Additional rotating workshops deepen students’ understanding of civics, organizing, advocacy strategies, and pathways to involvement beyond the summit.'
    },
    {
      time: '2:00 PM - 2:45 PM',
      title: 'Speaker Panel @ SHR #4',
      description: 'This moderated panel brings together leaders from advocacy, government, and student organizing, including Kenji Linane-Booey, Statewide Field Manager at the League of Education Voters (Ex-Admissions Officer at Gonzaga University), Megan Wargacki, Senior Counsel at the Office of Program Research, Joel Anderson, Associate Director of Legislative & External Affairs at the Washington State Student Achievement Council, and student advocate Brandon Elliott representing ASUW OGR and UW Impact. Panelists will share insights on how policy is shaped, the role of advocacy and staff in the legislative process, and how students can meaningfully engage in public service.'
    },
    {
      time: '2:45 PM',
      title: 'Closing Rally & Group Photo',
      description: 'The summit concludes with a collective closing session and group photo on the Capitol grounds. Students leave with next steps for staying involved in statewide youth advocacy through organizations like the Association of Washington Student Leaders (AWSL) and civic engagement efforts.',
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
              Friday, February 20, 2026
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
