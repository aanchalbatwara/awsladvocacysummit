export default function Registration() {
  return (
    <section id="register" className="py-16 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Register for the Summit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure your spot at the Educational Advocacy Summit and join student leaders across Washington State
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-gold">Choose Your Day</h3>
            <p className="text-gray-300">
              Attend in-person on Feb 13th, join virtually on Feb 14th, or participate in both days
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-gold">For High School Students</h3>
            <p className="text-gray-300">
              Open to all Washington State high school students passionate about civic education
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-gold">No Experience Required</h3>
            <p className="text-gray-300">
              Just bring your voice, vision, and desire to make a difference
            </p>
          </div>
        </div>

        {/* Embedded Google Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-brand-gold/20">
            <div className="aspect-[16/20] w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeVvXtwkajnh-DnHgf50i3RHZESfy4D0ZG3bJfV0bhP0RWiuA/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">
            Questions about registration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:roz@awsp.org"
              className="text-brand-gold hover:text-white transition-colors underline font-medium"
            >
              roz@awsp.org
            </a>
            <span className="hidden sm:inline text-gray-500">•</span>
            <a
              href="mailto:james@awsleaders.org"
              className="text-brand-gold hover:text-white transition-colors underline font-medium"
            >
              james@awsleaders.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
