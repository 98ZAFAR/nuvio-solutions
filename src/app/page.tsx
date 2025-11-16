import { HiUsers, HiCheckCircle } from "react-icons/hi";
import AnimatedCounter from "../components/animations/AnimatedCounter";
import FadeInView from "../components/animations/FadeInView";
import FloatingCard from "../components/animations/FloatingCard";
import PulseIcon from "../components/animations/PulseIcon";
import AnimatedButton from "../components/animations/AnimatedButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Welcome to <span className="text-amber-200">Nuvio Solutions</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.4}>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              We architect, execute, and scale real businesses.<br />
              Custom-coded, secure, future-proof web solutions — built exactly for you
            </p>
          </FadeInView>
          <FadeInView delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/portfolio" variant="primary">
                Explore Our Work
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary">
                Get Started
              </AnimatedButton>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-700 to-slate-600">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <FadeInView delay={0.1} className="text-center">
            <AnimatedCounter end={10} suffix="+" />
            <div className="text-gray-100">Projects Delivered</div>
          </FadeInView>
          <FadeInView delay={0.2} className="text-center">
            <AnimatedCounter end={5} />
            <div className="text-gray-100">Expert Team Members</div>
          </FadeInView>
          <FadeInView delay={0.3} className="text-center">
            <AnimatedCounter end={100} suffix="%" />
            <div className="text-gray-100">Client Satisfaction</div>
          </FadeInView>
          <FadeInView delay={0.4} className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">24/7</div>
            <div className="text-gray-100">Support Available</div>
          </FadeInView>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-600 to-slate-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <FloatingCard 
            delay={0.2}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
              <HiUsers className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h2 className="text-2xl font-semibold mb-4 text-white">Who We Are</h2>
            <p className="text-gray-100">
              Founded by three passionate engineers, Nuvio Solutions Pvt Ltd delivers cutting-edge
              software and web solutions globally, from the US to Turkey, UAE, UK, India, Pakistan, and Bangladesh.
            </p>
          </FloatingCard>

          <FloatingCard 
            delay={0.4}
            className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-slate-600"
          >
            <PulseIcon className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
              <HiCheckCircle className="w-6 h-6 text-slate-800" />
            </PulseIcon>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Approach</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-100">
              <li>Listen carefully to client requirements.</li>
              <li>Strategically plan and document all features and functionalities.</li>
              <li>Begin development only after client review and confirmation.</li>
              <li>Deliver secure, scalable, and maintainable solutions.</li>
            </ul>
          </FloatingCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-500 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <FloatingCard 
            delay={0.3}
            className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white border border-slate-600"
          >
            <FadeInView delay={0.5}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let&apos;s Build What Your Business Deserves</h2>
            </FadeInView>
            <FadeInView delay={0.6}>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                If you&apos;re looking for a development team that treats your platform as a mission-critical asset — not a template website — Nuvio Solutions Pvt Ltd is the partner built for that standard.
              </p>
              <p className="text-amber-200 font-medium mb-6">
                Ready to discuss your project?<br />
                Let&apos;s start with a technical consultation.
              </p>
            </FadeInView>
            <FadeInView delay={0.7}>
              <AnimatedButton href="/contact" variant="primary" className="text-lg">
                Get in Touch
              </AnimatedButton>
            </FadeInView>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}