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
              Attend in-person on Feb 13th, join virtually on Feb 14th, or participate in both days
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

        {/* Embedded Google Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-brand-navy/10">
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
          <p className="text-gray-600 mb-4">
            Questions about registration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:batwara.aanchal@gmail.com"
              className="text-brand-navy hover:text-brand-gold transition-colors underline font-medium"
            >
              batwara.aanchal@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="mailto:gtbc@uw.edu"
              className="text-brand-navy hover:text-brand-gold transition-colors underline font-medium"
            >
              gtbc@uw.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
