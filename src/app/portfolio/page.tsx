"use client";

import { useState } from 'react';
import { HiDesktopComputer, HiChevronRight, HiBadgeCheck } from 'react-icons/hi';
import FadeInView from '../../components/animations/FadeInView';
import FloatingCard from '../../components/animations/FloatingCard';
import AnimatedCounter from '../../components/animations/AnimatedCounter';
import HoverTiltCard from '../../components/animations/HoverTiltCard';
import AnimatedButton from '../../components/animations/AnimatedButton';
import ProjectModal from '../../components/ProjectModal';
import Link from 'next/link';

interface ProjectType {
  name: string;
  description: string;
  fullDescription?: string;
  tech: string;
  link: string;
  category: string;
  duration?: string;
  teamSize?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "Property Listing Platform",
      description:
        "A comprehensive web platform for listing, searching, and managing properties with filters and maps.",
      fullDescription: "Built a full-stack property listing platform that revolutionized how real estate agents and property owners connect with potential buyers. The platform features advanced search capabilities, interactive maps, virtual tours, and a comprehensive admin dashboard for property management.",
      tech: "React, Node.js, PostgreSQL, Tailwind CSS",
      link: "#",
      category: "Web Development",
      duration: "4 months",
      teamSize: "5 members",
      features: [
        "Advanced Property Search & Filters",
        "Interactive Map Integration",
        "Virtual Property Tours", 
        "Real-time Chat System",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "Mobile Responsive Design",
        "SEO Optimized"
      ],
      challenges: [
        "Handling large property datasets efficiently",
        "Real-time map rendering performance",
        "Complex search algorithm optimization",
        "Multi-role user authentication system"
      ],
      outcomes: [
        "70% increase in property inquiries",
        "50% reduction in time-to-lease",
        "99.5% system uptime achieved",
        "150+ properties listed in first month"
      ]
    },
    {
      name: "Competitive ML Coding Platform",
      description:
        "An online platform for hosting competitive machine learning challenges with leaderboards and submissions.",
      fullDescription: "Developed a cutting-edge platform for data scientists and ML enthusiasts to compete in machine learning challenges. Features include real-time leaderboards, automated model evaluation, dataset management, and comprehensive analytics dashboard.",
      tech: "Next.js, Python (FastAPI), MongoDB, Tailwind CSS",
      link: "#",
      category: "AI & ML",
      duration: "6 months", 
      teamSize: "4 members",
      features: [
        "Real-time Competition Leaderboards",
        "Automated ML Model Evaluation",
        "Dataset Upload & Management",
        "Code Submission System",
        "Performance Analytics Dashboard",
        "User Profile & Rankings",
        "Discussion Forums",
        "Prize Distribution System"
      ]
    },
    {
      name: "Fund Raising Website",
      description:
        "Crowdfunding platform for NGOs and individual campaigns, including secure payment integration.",
      fullDescription: "Created a comprehensive crowdfunding platform that enables NGOs and individuals to raise funds for their causes. Includes campaign management, donor tracking, social sharing, and transparent fund allocation reporting.",
      tech: "React, Node.js, Stripe API, PostgreSQL",
      link: "#",
      category: "FinTech",
      duration: "3 months",
      teamSize: "3 members",
      features: [
        "Campaign Creation & Management",
        "Secure Payment Processing",
        "Donor Management System",
        "Social Media Integration",
        "Fund Tracking & Reporting",
        "Email Notifications",
        "Mobile-First Design",
        "Admin Analytics Dashboard"
      ]
    },
    {
      name: "E-commerce Platform",
      description:
        "Full-featured online store with product catalog, cart, checkout, and admin panel for managing inventory.",
      fullDescription: "Built a scalable e-commerce solution with advanced product management, inventory tracking, order processing, and customer management. Features multi-vendor support, payment integration, and comprehensive analytics.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      link: "#",
      category: "E-commerce",
      duration: "5 months",
      teamSize: "6 members",
      features: [
        "Multi-vendor Marketplace",
        "Advanced Product Catalog",
        "Shopping Cart & Wishlist",
        "Secure Checkout Process",
        "Inventory Management",
        "Order Tracking System",
        "Customer Reviews & Ratings",
        "Sales Analytics Dashboard"
      ]
    },
    {
      name: "LegalDocs Management System",
      description:
        "A web platform for managing legal documents securely, with client access and version control.",
      fullDescription: "Developed a secure document management system for law firms to manage legal documents, client communications, case files, and billing. Features end-to-end encryption, version control, and role-based access.",
      tech: "React, Django, PostgreSQL, Tailwind CSS",
      link: "#",
      category: "Enterprise",
      duration: "4 months",
      teamSize: "4 members",
      features: [
        "Secure Document Storage",
        "Version Control System",
        "Client Portal Access",
        "Document Sharing & Collaboration",
        "Case Management Tools",
        "Billing & Invoicing",
        "Audit Trail & Logging",
        "Role-based Permissions"
      ]
    },
    {
      name: "Healthcare Management System",
      description:
        "Complete healthcare solution with patient management, appointment scheduling, and medical records.",
      fullDescription: "Comprehensive healthcare management platform for clinics and hospitals. Includes patient records, appointment scheduling, prescription management, billing, and telemedicine capabilities with HIPAA compliance.",
      tech: "Next.js, Node.js, MySQL, Material UI",
      link: "#",
      category: "Healthcare",
      duration: "7 months",
      teamSize: "8 members",
      features: [
        "Patient Records Management",
        "Appointment Scheduling",
        "Prescription Management",
        "Telemedicine Integration",
        "Billing & Insurance Claims",
        "Medical Reports Generation",
        "Staff Management Portal",
        "HIPAA Compliant Security"
      ]
    }
  ];

  const categories = ["All", "Web Development", "AI & ML", "FinTech", "E-commerce", "Enterprise", "Healthcare"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <FadeInView>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-lg sm:text-xl text-gray-100">
            Here are some of the projects we&apos;ve built for our clients across multiple industries.
            Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </FadeInView>

      {/* Portfolio Stats */}
      <FadeInView delay={0.2}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <div className="text-gray-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <div className="text-gray-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">
              <AnimatedCounter end={6} />
            </div>
            <div className="text-gray-200">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-200 mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </div>
            <div className="text-gray-200">Success Rate</div>
          </div>
        </div>
      </FadeInView>

      {/* Category Filter */}
      <FadeInView delay={0.4}>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? 'bg-amber-200 text-slate-800 shadow-lg'
                    : 'bg-slate-700 text-gray-200 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeInView key={`${project.name}-${activeCategory}`} delay={idx * 0.1}>
              <HoverTiltCard className="h-full">
                <FloatingCard className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-600 h-full cursor-pointer group">
                  {/* Project Image Placeholder */}
                  <div 
                    className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-amber-200/20 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-amber-200/30 transition-all duration-300">
                        <HiDesktopComputer className="w-8 h-8 text-amber-200" />
                      </div>
                      <div className="text-sm font-medium text-amber-200">{project.category}</div>
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 flex-1 flex flex-col"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-200 transition-colors duration-300">{project.name}</h2>
                      <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-300 mb-2">
                          <strong>Tech Stack:</strong>
                        </p>
                        <p className="text-sm text-amber-200 font-medium">{project.tech}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-600">
                      <span className="text-xs bg-amber-200 text-slate-800 px-2 py-1 rounded-full flex items-center gap-1">
                        <HiBadgeCheck className="w-3 h-3" />
                        {project.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                        className="text-white hover:text-gray-100 font-medium text-sm flex items-center gap-1 transition-colors duration-200 hover:underline cursor-pointer"
                      >
                        View Details
                        <HiChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </FloatingCard>
              </HoverTiltCard>
            </FadeInView>
          ))}
        </div>

        {/* Load More Projects */}
        <FadeInView delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-200 mb-6">
              Want to see more projects? We have delivered various other solutions spanning web, mobile, 
              and software development for multiple domains and industries.
            </p>
            <AnimatedButton className='inline-block px-8 py-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium shadow-lg cursor-pointer'>
                <Link href="/contact">Discuss Your Project</Link>
            </AnimatedButton>
          </div>
        </FadeInView>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}