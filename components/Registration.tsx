export default function Registration() {
  return (
    <section id="register" className="py-16 bg-brand-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-brand-navy">
            Register for the Summit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot at the Educational Advocacy Summit and join student leaders across Washington State
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl p-3 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold/20 transition-colors">📅</div>
              <h3 className="text-xl font-serif font-bold text-brand-navy">Choose Your Day</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Attend in-person on Feb 20th, join virtually on Feb 21th, or participate in both days
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl p-3 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold/20 transition-colors">🎓</div>
              <h3 className="text-xl font-serif font-bold text-brand-navy">For High School Students</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Open to all Washington State high school students passionate about civic education
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl p-3 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold/20 transition-colors">✨</div>
              <h3 className="text-xl font-serif font-bold text-brand-navy">No Experience Required</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Just bring your voice, vision, and desire to make a difference
            </p>
          </div>
        </div>

        {/* Registration Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Person Registration Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-brand-navy/10 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-brand-navy p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🏛️</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">In-Person</h3>
                    <p className="text-blue-200 text-sm">February 20, 2026</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-gray-700">Visit the Washington State Capitol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-gray-700">Meet legislators face-to-face</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-gray-700">Network with student leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="text-gray-700">Participate in hands-on workshops</span>
                  </li>
                </ul>
                <a
                  href="https://awschools.jotform.com/253504320178047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-navy/90 transition-all shadow-md hover:shadow-lg text-center"
                >
                  Register for In-Person
                </a>
              </div>
            </div>

            {/* Virtual Registration Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-brand-navy/10 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-brand-teal p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💻</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">Virtual</h3>
                    <p className="text-teal-100 text-sm">February 21, 2026</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    <span className="text-gray-700">Join from anywhere in Washington</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    <span className="text-gray-700">Interactive virtual workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    <span className="text-gray-700">Digital networking opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    <span className="text-gray-700">Live Q&A with speakers</span>
                  </li>
                </ul>
                <a
                  href="https://awschools.jotform.com/253536437277970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-teal/90 transition-all shadow-md hover:shadow-lg text-center"
                >
                  Register for Virtual
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Questions about registration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:awsladvocacysummit@gmail.com"
              className="text-brand-navy hover:text-brand-gold transition-colors underline font-medium"
            >
              awsladvocacysummit@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
