import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-amber-200">Nuvio Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Crafting technology-driven solutions for businesses worldwide. 
            Your trusted freelance team of expert developers and designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio" 
              className="px-5 py-2 md:px-8 md:py-4 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium shadow-lg"
            >
              Explore Our Work
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-2 md:px-8 md:py-4 border-2 border-amber-200 text-amber-200 rounded-lg hover:bg-amber-200 hover:text-slate-800 transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-700 to-slate-600">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">50+</div>
            <div className="text-gray-100">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">5</div>
            <div className="text-gray-100">Expert Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">100%</div>
            <div className="text-gray-100">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">24/7</div>
            <div className="text-gray-100">Support Available</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-600 to-slate-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Who We Are</h2>
            <p className="text-gray-100">
              Founded by three passionate engineers, Nuvio Solutions Pvt Ltd delivers cutting-edge
              software and web solutions globally, from the US to Turkey, UAE, UK, Pakistan, and Bangladesh.
            </p>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-100">
              <li>Listen carefully to client requirements.</li>
              <li>Strategically plan and document all features and functionalities.</li>
              <li>Begin development only after client review and confirmation.</li>
              <li>Deliver secure, scalable, and maintainable solutions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-500 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white border border-slate-600">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Let us discuss your ideas and bring them to life with our expertise and passion for exceptional digital solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-lg font-medium shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
