import { HiCheckCircle, HiLightningBolt, HiCode, HiServer, HiDatabase, HiDeviceMobile } from "react-icons/hi";
import FadeInView from "../../components/animations/FadeInView";
import FloatingCard from "../../components/animations/FloatingCard";
import PulseIcon from "../../components/animations/PulseIcon";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Custom-Engineered Web Solutions for High-Growth Businesses</h1>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
          Nuvio Solutions Pvt Ltd is a global web development partner specializing in fully custom-coded, performance-driven digital products — built for scalability, security, and long-term business impact.
        </p>
      </div>

      {/* What We Do */}
      <div className="max-w-6xl mx-auto mb-16">
        <FadeInView>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">What We Do</h2>
          <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
            We build mission-critical digital platforms — engineered from the ground up, not assembled using templates or no-code tools. Our core capabilities include:
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Custom website development",
              description: "High-performance, conversion-focused sites",
              icon: <HiCode className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Full-stack engineering",
              description: "Frontend, backend, database architecture, API development",
              icon: <HiServer className="w-6 h-6 text-slate-800" />
            },
            {
              title: "UI/UX strategy & design",
              description: "Interface systems built for business outcomes, not just aesthetics",
              icon: <HiLightningBolt className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Admin dashboards & internal tools",
              description: "Secure, data-driven operational platforms",
              icon: <HiDatabase className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Ongoing maintenance & performance optimization",
              description: "Long-term reliability and scalability",
              icon: <HiCheckCircle className="w-6 h-6 text-slate-800" />
            }
          ].map((service, idx) => (
            <FloatingCard 
              key={idx}
              delay={0.2 + idx * 0.1}
              className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 border border-slate-600"
            >
              <div className="flex items-start gap-4">
                <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </PulseIcon>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>

      {/* Why Custom-Code Matters */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Why Custom-Code Matters</h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          We don&apos;t work with website builders, drag-and-drop systems, or generic CMS themes. Our engineering-first approach ensures:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "No performance bottlenecks",
              description: "(optimised down to the last millisecond)",
              icon: <HiLightningBolt className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Full ownership and future scalability",
              description: "no platform lock-in",
              icon: <HiCheckCircle className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Stronger security",
              description: "no plugin/third-party weaknesses",
              icon: <HiServer className="w-6 h-6 text-slate-800" />
            },
            {
              title: "Flexible architecture",
              description: "for evolving business models",
              icon: <HiCode className="w-6 h-6 text-slate-800" />
            }
          ].map((item, idx) => (
            <FloatingCard 
              key={idx}
              delay={0.2 + idx * 0.1}
              className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600 text-center"
            >
              <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </PulseIcon>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </FloatingCard>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600">
          <p className="text-gray-200 text-center text-lg">
            For businesses that value precision and long-term ROI over shortcuts, custom development is not an option — it&apos;s the standard.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <FloatingCard 
          delay={0.2}
          className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
        >
          <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <HiCheckCircle className="w-6 h-6 text-slate-800" />
          </PulseIcon>
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Expertise</h2>
          <p className="text-gray-200">
            Our team has deep experience in building modern web applications, ensuring scalability, security, and excellent user experience. 
            We follow best practices and stay updated with the latest technologies.
          </p>
        </FloatingCard>
        
        <FloatingCard 
          delay={0.4}
          className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
        >
          <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <HiLightningBolt className="w-6 h-6 text-slate-800" />
          </PulseIcon>
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Listen carefully to your requirements</li>
            <li>Plan features and architecture strategically</li>
            <li>Develop only after review and confirmation</li>
            <li>Ensure fast, secure, and scalable solutions</li>
          </ul>
        </FloatingCard>
      </div>

      {/* Technology Stack */}
      <div className="max-w-6xl mx-auto mb-16">
        <FadeInView>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Our Technology Stack</h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <FloatingCard 
            delay={0.2}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <HiCode className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h3 className="text-2xl font-semibold mb-4 text-white">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>React.js, Next.js</li>
              <li>UI Libraries: Tailwind CSS, Material UI, Bootstrap, Chakra UI</li>
              <li>Animations & UX: Framer Motion</li>
            </ul>
          </FloatingCard>

          {/* Backend */}
          <FloatingCard 
            delay={0.4}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <HiServer className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h3 className="text-2xl font-semibold mb-4 text-white">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Languages: Node.js, Python (FastAPI, Django, Flask), Java (Spring Boot)</li>
              <li>API: RESTful, GraphQL, WebSocket</li>
              <li>Microservices: Docker-based architecture</li>
            </ul>
          </FloatingCard>

          {/* Databases & Cloud */}
          <FloatingCard 
            delay={0.6}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <HiDatabase className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h3 className="text-2xl font-semibold mb-4 text-white">Databases & Cloud</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Relational: PostgreSQL, MySQL, SQLite</li>
              <li>NoSQL: MongoDB, Redis</li>
              <li>Cloud: AWS, GCP, Azure, Vercel, Netlify</li>
            </ul>
          </FloatingCard>

          {/* Mobile & AI */}
          <FloatingCard 
            delay={0.8}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-6">
              <HiDeviceMobile className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h3 className="text-2xl font-semibold mb-4 text-white">Mobile & AI</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Mobile: React Native (cross-platform)</li>
              <li>AI & Data: Python, TensorFlow, PyTorch, ML APIs, analytics dashboards</li>
            </ul>
          </FloatingCard>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white border border-slate-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let&apos;s Build Your Website</h2>
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