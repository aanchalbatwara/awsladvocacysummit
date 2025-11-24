export default function Registration() {
  return (
    <section id="register" className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Register for the Summit
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Secure your spot at the Educational Advocacy Summit and join student leaders across Washington State
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-xl font-semibold mb-2">Choose Your Day</h3>
            <p className="text-blue-100">
              Attend in-person on Feb 13th, join virtually on Feb 14th, or participate in both days
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2">For High School Students</h3>
            <p className="text-blue-100">
              Open to all Washington State high school students passionate about civic education
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2">No Experience Required</h3>
            <p className="text-blue-100">
              Just bring your voice, vision, and desire to make a difference
            </p>
          </div>
        </div>

        {/* Embedded Google Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
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
          <p className="text-blue-100 mb-4">
            Questions about registration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:roz@awsp.org"
              className="text-white hover:text-blue-200 transition-colors underline"
            >
              roz@awsp.org
            </a>
            <span className="hidden sm:inline text-blue-300">•</span>
            <a
              href="mailto:james@awsleaders.org"
              className="text-white hover:text-blue-200 transition-colors underline"
            >
              james@awsleaders.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
