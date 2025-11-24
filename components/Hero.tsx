import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-brand-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 skew-x-12 transform origin-top-right translate-x-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-navy/10">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-navy tracking-wide uppercase">70th Anniversary</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.1]">
                Educational <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-green">
                  Advocacy Summit
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Association of Washington Student Leaders
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#register"
                className="bg-brand-navy text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-navy/90 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Register Now
              </Link>
              <Link
                href="/#about"
                className="bg-white text-brand-navy border-2 border-brand-navy/10 font-semibold py-4 px-8 rounded-lg hover:border-brand-navy hover:bg-brand-navy/5 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Schedule Cards - Mini */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="bg-white p-4 rounded-xl border-l-4 border-brand-navy shadow-sm">
                <div className="text-xs font-bold text-brand-navy uppercase mb-1">Day 1 • In Person</div>
                <div className="font-bold text-lg text-brand-navy">Feb 13, 2026</div>
                <div className="text-sm text-gray-500">Olympia, WA</div>
              </div>
              <div className="bg-white p-4 rounded-xl border-l-4 border-brand-green shadow-sm">
                <div className="text-xs font-bold text-brand-green uppercase mb-1">Day 2 • Virtual</div>
                <div className="font-bold text-lg text-brand-navy">Feb 14, 2026</div>
                <div className="text-sm text-gray-500">Online (Zoom)</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[600px] w-full hidden lg:block">
             <div className="absolute inset-0 bg-brand-navy rounded-2xl transform rotate-3 opacity-10"></div>
             <div className="absolute inset-0 bg-brand-gold rounded-2xl transform -rotate-2 opacity-10"></div>
             <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/people.jpg"
                  alt="Students at Washington State Capitol"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="text-brand-navy font-medium italic">
                    "Empowering student voices to shape the future of education."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
