"use client";

import { motion } from 'framer-motion';
import { 
  HiDesktopComputer, 
  HiExternalLink, 
  HiCode, 
  HiUser, 
  HiCheckCircle,
  HiStar,
  HiEye,
  HiClock
} from 'react-icons/hi';
import Modal from './animations/Modal';
import AnimatedButton from './animations/AnimatedButton';
import FadeInView from './animations/FadeInView';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    tech: string;
    link: string;
    category: string;
    fullDescription?: string;
    features?: string[];
    duration?: string;
    teamSize?: string;
    images?: string[];
    challenges?: string[];
    outcomes?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const features = project.features || [
    "Responsive Design",
    "User Authentication", 
    "Real-time Updates",
    "Advanced Search",
    "Admin Dashboard",
    "Payment Integration"
  ];

  const challenges = project.challenges || [
    "Scalable Architecture",
    "Performance Optimization",
    "Security Implementation",
    "Cross-browser Compatibility"
  ];

  const outcomes = project.outcomes || [
    "50% improvement in user engagement",
    "99.9% uptime achieved",
    "Reduced load times by 60%",
    "100% client satisfaction"
  ];

  const techStack = project.tech.split(', ');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="p-6 space-y-8">
        {/* Hero Section */}
        <FadeInView>
          <div className="relative">
            {/* Project Image Placeholder */}
            <div className="h-64 sm:h-80 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-200/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <HiDesktopComputer className="w-10 h-10 text-amber-200" />
                </div>
                <div className="text-lg font-medium text-amber-200">{project.category}</div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <HiClock className="w-6 h-6 text-amber-200 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Duration</div>
                <div className="text-white font-semibold">{project.duration || "3 months"}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <HiUser className="w-6 h-6 text-amber-200 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Team Size</div>
                <div className="text-white font-semibold">{project.teamSize || "4 members"}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <HiStar className="w-6 h-6 text-amber-200 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Rating</div>
                <div className="text-white font-semibold">5.0/5.0</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <HiEye className="w-6 h-6 text-amber-200 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Status</div>
                <div className="text-green-400 font-semibold">Completed</div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Project Description */}
        <FadeInView delay={0.1}>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <HiCode className="w-5 h-5 text-amber-200" />
              Project Overview
            </h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              {project.fullDescription || project.description}
            </p>
            <p className="text-gray-200 leading-relaxed">
              This project showcases our expertise in modern web development, focusing on creating 
              scalable, maintainable, and user-friendly solutions that meet real-world business needs.
            </p>
          </div>
        </FadeInView>

        {/* Tech Stack */}
        <FadeInView delay={0.2}>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 bg-amber-200 text-slate-800 rounded-full font-medium text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Features */}
        <FadeInView delay={0.3}>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg"
                >
                  <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Challenges & Solutions */}
        <FadeInView delay={0.4}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Challenges Solved</h3>
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Results Achieved</h3>
              <div className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Call to Action */}
        <FadeInView delay={0.7}>
          <div className="text-center pt-6 border-t border-slate-600">
            <h3 className="text-xl font-semibold text-white mb-4">Interested in Similar Work?</h3>
            <p className="text-gray-200 mb-6">
              Let&apos;s discuss how we can build something amazing for your business too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/contact" variant="primary">
                Start Your Project
              </AnimatedButton>
              {project.link !== "#" && (
                <AnimatedButton 
                  href={project.link} 
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <HiExternalLink className="w-4 h-4" />
                  View Live Demo
                </AnimatedButton>
              )}
            </div>
          </div>
        </FadeInView>
      </div>
    </Modal>
  );
}