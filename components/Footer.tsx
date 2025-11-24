import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Educational Advocacy Summit</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Washington State high school students to engage in civic education,
              meet with legislators, and shape the future of democracy.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/images/AWSL_Seal_Style_Logo_2021_final.png"
                alt="AWSL"
                width={50}
                height={50}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/AWSP_logo_seal_tshirt_logo_front.png"
                alt="AWSP"
                width={50}
                height={50}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                  About the Summit
                </Link>
              </li>
              <li>
                <Link href="/#opportunities" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link href="/schedule/in-person" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                  In-Person Schedule
                </Link>
              </li>
              <li>
                <Link href="/schedule/virtual" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Virtual Schedule
                </Link>
              </li>
              <li>
                <a
                  href="https://awsleaders.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  AWSL Website
                </a>
              </li>
              <li>
                <a
                  href="https://awsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  AWSP Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">
                <div className="font-semibold text-white">Roz Thompson</div>
                <a href="mailto:roz@awsp.org" className="hover:text-brand-gold transition-colors">
                  roz@awsp.org
                </a>
              </li>
              <li className="text-gray-300">
                <div className="font-semibold text-white">James Laymen</div>
                <a href="mailto:james@awsleaders.org" className="hover:text-brand-gold transition-colors">
                  james@awsleaders.org
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400">
                February 13-14, 2026
                <br />
                Washington State Capitol & Virtual
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Association of Washington Student Leaders & Association of Washington School Principals.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
