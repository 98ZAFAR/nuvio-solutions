import AnimatedCounter from "../../components/animations/AnimatedCounter";
import FadeInView from "../../components/animations/FadeInView";
import { HiLightningBolt, HiBadgeCheck } from 'react-icons/hi';
import { FaRegHandshake, FaRegLightbulb, FaSearch } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Aminul Islam",
      role: "Co-Founder & Backend Developer",
      responsibilities:
        "Handles backend projects and oversees overall company operations.",
      initials: "AI",
      skills: ["Node.js", "PostgreSQL", "Azure"]
    },
    {
      name: "Satish Kumar Singh",
      role: "Co-Founder & Lead Backend Developer",
      responsibilities:
        "Leads backend development and manages client communications.",
      initials: "SS",
      skills: ["FastAPI", "NodeJs", "MySQL", "PostgreSQL", "MongoDB", "Docker"]
    },
    {
      name: "Md Zafar",
      role: "Co-Founder & Frontend Developer",
      responsibilities: "Develops responsive and interactive frontend applications.",
      initials: "MZ",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Shalu Kumari",
      role: "Frontend & UI Designer",
      responsibilities:
        "Designs user interfaces and implements frontend features alongside Zafar.",
      initials: "SK",
      skills: ["UI/UX Design", "React", "Figma", "CSS"]
    },
    {
      name: "Murari Mohan Sarkar",
      role: "Marketing Specialist",
      responsibilities:
        "Leads marketing strategies and business outreach for the company.",
      initials: "MM",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"]
    },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every line of code, every design element is carefully crafted.",
      icon: <VscWorkspaceTrusted className="w-7 h-7 md:w-10 md:h-10 text-amber-200" />
    },
    {
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you to understand and exceed your expectations.",
      icon: <FaRegHandshake className="w-7 h-7 md:w-10 md:h-10 text-amber-200" />
    },
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for your business.",
      icon: <FaRegLightbulb className="w-7 h-7 md:w-10 md:h-10 text-amber-200" />
    },
    {
      title: "Transparency",
      description: "Clear communication, honest pricing, and regular updates throughout the project lifecycle.",
      icon: <FaSearch className="w-7 h-7 md:w-10 md:h-10 text-amber-200" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Nuvio Solutions | Building Custom-Coded Websites & Digital Solutions</h1>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
          We build secure, efficient, and scalable websites through clean code and thoughtful design. Discover the story behind Nuvio Solutions.
        </p>
      </div>

      {/* Company Stats */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* Main Intro */}
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 mb-12 border border-slate-600 text-center">
          {/* <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Main Intro</h2> */}
          <p className="text-gray-200 mb-4 text-lg">
            At <span className="text-amber-200 font-semibold">Nuvio Solutions Pvt Ltd</span>, we build secure, efficient, and scalable digital solutions through clean code and thoughtful design. Founded by passionate engineers, we believe in the power of technology to transform ideas into lasting impact.
          </p>
          <p className="text-gray-200 text-lg">
            Our mission is simple — to provide reliable web solutions to anyone who values quality. Whether you&apos;re a startup, a growing brand, or an established enterprise, we deliver the same level of precision, performance, and dedication.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <FadeInView delay={0.1} className="text-center">
          <AnimatedCounter end={1} suffix="+" />
          <div className="text-gray-200">Years in Business</div>
        </FadeInView>
        <FadeInView delay={0.2} className="text-center">
          <AnimatedCounter end={10} suffix="+" />
          <div className="text-gray-200">Projects Delivered</div>
        </FadeInView>
        <FadeInView delay={0.3} className="text-center">
          <AnimatedCounter end={6} />
          <div className="text-gray-200">Countries Served</div>
        </FadeInView>
        <FadeInView delay={0.4} className="text-center">
          <div className="text-3xl font-bold text-amber-200 mb-2">24/7</div>
          <div className="text-gray-200">Support Available</div>
        </FadeInView>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white">Our Core Team</h2>
        <p className="text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Behind every project is a focused team of engineers, designers, and strategists who turn ideas into high-performing digital experiences. Together, we ensure every website we build is efficient, secure, and future-ready.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-600"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-800 text-2xl font-bold">
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-amber-200 font-medium mb-3 text-sm">{member.role}</p>
              <p className="text-gray-200 text-sm mb-4 flex-1">{member.responsibilities}</p>
              
              {/* Skills */}
              <div className="border-t border-slate-600 pt-4">
                <p className="text-xs text-gray-300 mb-2">Key Skills:</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="text-xs bg-amber-200 text-slate-800 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-slate-600">
              <div className="w-full flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-200 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Industries We Serve</h2>
        <p className="text-center text-gray-200 mb-8 max-w-3xl mx-auto">
          We partner with <span className="text-amber-200 font-semibold">startups, founder-led companies, and established businesses</span> across sectors such as:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            "Technology & SaaS",
            "Real Estate & Architecture", 
            "Finance & Consulting",
            "Healthcare & Education",
            "Manufacturing & Professional Services"
          ].map((industry, idx) => (
            <div key={idx} className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-slate-600">
              <HiBadgeCheck className="w-8 h-8 text-amber-200 mx-auto mb-3" />
              <p className="text-white font-medium">{industry}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-200 max-w-3xl mx-auto">
          If your business views its website or digital platform as a <span className="text-amber-200 font-semibold">growth engine</span> rather than an online brochure — we are the right fit.
        </p>
      </div>

      {/* Development Philosophy & Process */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Development Philosophy & Process</h2>
        <p className="text-center text-gray-200 mb-8 max-w-3xl mx-auto">
          We follow a <span className="text-amber-200 font-semibold">consultative, engineering-driven, outcome-oriented process</span>:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              step: "1. Discovery & Technical Strategy",
              description: "Understanding business logic, user behavior, scalability needs"
            },
            {
              step: "2. UI/UX Architecture",
              description: "Designing interface systems built for clarity, trust, and conversion"
            },
            {
              step: "3. Custom Development (Frontend + Backend)",
              description: "Fully coded, optimized, and structured for growth"
            },
            {
              step: "4. Quality Assurance & Optimization",
              description: "Rigorous testing, performance tuning, security hardening"
            },
            {
              step: "5. Deployment & Ongoing Support",
              description: "Long-term partnerships, continuous improvements"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
              <h3 className="text-lg font-semibold mb-2 text-amber-200">{item.step}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Long-Term Reliability & Partnership */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Long-Term Reliability & Partnership</h2>
          <p className="text-gray-200 mb-6">
            Unlike short-cycle freelance deliveries, Nuvio Solutions engages as a <span className="text-amber-200 font-semibold">technology partner</span>.
          </p>
          <p className="text-gray-200 mb-6">
            We support startups scaling rapidly, businesses evolving their product roadmap, and brands seeking <span className="text-amber-200 font-semibold">future-proof digital infrastructure</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              "Continuous performance monitoring",
              "Feature enhancements and iterative upgrades",
              "Dedicated engineering support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <HiBadgeCheck className="w-6 h-6 text-amber-200 flex-shrink-0 mt-1" />
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-slate-800/50 rounded-lg border border-slate-600">
            <h3 className="text-xl font-semibold mb-4 text-white">Why Custom-Code Over Templates?</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-amber-200 font-bold">•</span>
                <span><strong className="text-white">Full ownership and future scalability</strong> — no platform lock-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-200 font-bold">•</span>
                <span><strong className="text-white">Stronger security</strong> — no plugin/third-party weaknesses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-200 font-bold">•</span>
                <span><strong className="text-white">Flexible architecture</strong> for evolving business models</span>
              </li>
            </ul>
            <p className="mt-4 text-gray-200">
              For businesses that value precision and long-term ROI over shortcuts, custom development is not an option — it&apos;s the standard.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy and Approach - Kept for continuity */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <HiLightningBolt className="w-6 h-6 text-slate-800" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Our Philosophy</h3>
          <p className="text-gray-200 mb-4">
            We believe that technology should be efficient, secure, and scalable. 
            Our focused team ensures personalized attention and high-quality delivery for every project.
          </p>
          <p className="text-gray-200">
            Whether you are an individual or a small business, we adapt to your requirements and deliver 
            the right technology stack for your project.
          </p>
        </div>
        
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <HiBadgeCheck className="w-6 h-6 text-slate-800" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Our Approach</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Listen carefully to client requirements</li>
            <li>Plan features and architecture strategically</li>
            <li>Develop only after review and confirmation</li>
            <li>Deliver secure, scalable, and maintainable solutions</li>
            <li>Provide ongoing support and maintenance</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className=" backdrop-blur-sm p-8 sm:p-12 text-slate-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how our expertise can help bring your vision to life.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-amber-200 text-slate-800 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-lg font-medium shadow-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}