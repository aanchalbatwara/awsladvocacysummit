import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/people.jpg"
          alt="Students at Washington State Capitol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* 70th Anniversary Badge */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/AWSL2B70th2BAnniversary2BScreen2B1.png"
            alt="70th Anniversary"
            width={120}
            height={120}
            className="drop-shadow-lg"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Educational Advocacy Summit
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-6 font-light drop-shadow-md">
          Association of Washington Student Leaders
        </p>

        <div className="bg-white/95 backdrop-blur-sm text-gray-900 rounded-lg p-6 sm:p-8 mb-8 shadow-2xl max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Day 1 */}
            <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Day 1 - In Person</div>
              <div className="text-2xl font-bold mb-2">February 13, 2026</div>
              <div className="text-gray-600 space-y-1">
                <p className="font-semibold">9:00 AM - 3:00 PM</p>
                <p>Washington State Capitol</p>
                <p className="text-sm">Olympia, WA</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="md:pl-6">
              <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Day 2 - Virtual</div>
              <div className="text-2xl font-bold mb-2">February 14, 2026</div>
              <div className="text-gray-600 space-y-1">
                <p className="font-semibold">9:00 AM - 1:00 PM</p>
                <p>Zoom (Online)</p>
                <p className="text-sm">Accessible Statewide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg"
          >
            Register Now
          </Link>
          <Link
            href="/#about"
            className="bg-white/90 hover:bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
