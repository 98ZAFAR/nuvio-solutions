export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">We Build Your Digital Presence</h1>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
          Whether you're an individual or a small business, our team of five skilled professionals — 
          two frontend developers, two backend developers, and a UI designer (one of us doubles as frontend & UI) — 
          will craft your website to be efficient, secure, and future-proof.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Expertise</h2>
          <p className="text-gray-200">
            Our team has deep experience in building modern web applications, ensuring scalability, security, and excellent user experience. 
            We follow best practices and stay updated with the latest technologies.
          </p>
        </div>
        
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Listen carefully to your requirements</li>
            <li>Plan features and architecture strategically</li>
            <li>Develop only after review and confirmation</li>
            <li>Ensure fast, secure, and scalable solutions</li>
          </ul>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Our Technology Stack</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>React.js, Next.js</li>
              <li>UI Libraries: Tailwind CSS, Material UI, Bootstrap, Chakra UI</li>
              <li>Animations & UX: Framer Motion</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Languages: Node.js, Python (FastAPI, Django, Flask), Java (Spring Boot)</li>
              <li>API: RESTful, GraphQL, WebSocket</li>
              <li>Microservices: Docker-based architecture</li>
            </ul>
          </div>

          {/* Databases & Cloud */}
          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Databases & Cloud</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Relational: PostgreSQL, MySQL, SQLite</li>
              <li>NoSQL: MongoDB, Redis</li>
              <li>Cloud: AWS, GCP, Azure, Vercel, Netlify</li>
            </ul>
          </div>

          {/* Mobile & AI */}
          <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
            <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Mobile & AI</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Mobile: React Native (cross-platform)</li>
              <li>AI & Data: Python, TensorFlow, PyTorch, ML APIs, analytics dashboards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white border border-slate-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let's Build Your Website</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Ready to take your business online? Our expert team is here to help you create a powerful web presence.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-lg font-medium shadow-lg">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}