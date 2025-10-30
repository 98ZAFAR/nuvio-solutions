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
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Us</h1>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
          We are a small, dedicated team building secure, efficient, and scalable web and software 
          solutions for individuals and small businesses. Founded by passionate engineers who believe 
          in the power of technology to transform businesses.
        </p>
      </div>

      {/* Company Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Meet Our Team</h2>
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

      {/* Philosophy and Approach */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-600">
          <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
            <HiLightningBolt className="w-6 h-6 text-slate-800" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Our Philosophy</h3>
          <p className="text-gray-200 mb-4">
            We believe that technology should be efficient, secure, and scalable. 
            Our small, focused team ensures personalized attention and high-quality delivery for every project.
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
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white border border-slate-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Work With Us?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
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