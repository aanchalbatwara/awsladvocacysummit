import Image from 'next/image';

export default function EventInfo() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy mb-4">
            Why This Summit Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Addressing a critical gap in civic education and youth engagement across Washington State
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-brand-cream p-6 rounded-lg border-t-4 border-brand-navy shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-brand-navy mb-2">33%</div>
            <p className="text-gray-700">
              of students could correctly match the three branches of government to their core functions in a 2022 National Assessment of Educational Progress test
            </p>
          </div>

          <div className="bg-brand-cream p-6 rounded-lg border-t-4 border-brand-green shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-brand-green mb-2">50%</div>
            <p className="text-gray-700">
              of young people say they were taught how to register to vote, while 64% report being encouraged to vote in high school
            </p>
          </div>

          <div className="bg-brand-cream p-6 rounded-lg border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-brand-gold mb-2">&lt;20%</div>
            <p className="text-gray-700">
              of Americans surveyed could name their state legislators
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-cream p-6 rounded-lg border-t-4 border-brand-red shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-brand-red mb-2">40%</div>
            <p className="text-gray-700">
              In a survey of adults, only 40% could name the three branches of government
            </p>
          </div>

          <div className="bg-brand-cream p-6 rounded-lg border-t-4 border-brand-navy shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-brand-navy mb-2">~50%</div>
            <p className="text-gray-700">
              About half of respondents couldn't say if their state had a one- or two-house legislature
            </p>
          </div>
        </div>

        <div className="bg-brand-navy rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/IMG_1664.png"
                alt="Washington State Capitol Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-brand-gold">Our Goal</h3>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Bring students together across Washington State to strengthen civic education and youth voice.
                  Through hands-on experiences at the Capitol and interactive virtual sessions, we empower the
                  next generation of informed, engaged citizens and leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
