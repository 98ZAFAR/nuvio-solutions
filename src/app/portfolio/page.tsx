export default function Portfolio() {
  const projects = [
    {
      name: "Property Listing Platform",
      description:
        "A comprehensive web platform for listing, searching, and managing properties with filters and maps.",
      tech: "React, Node.js, PostgreSQL, Tailwind CSS",
      link: "#",
      category: "Web Development"
    },
    {
      name: "Competitive ML Coding Platform",
      description:
        "An online platform for hosting competitive machine learning challenges with leaderboards and submissions.",
      tech: "Next.js, Python (FastAPI), MongoDB, Tailwind CSS",
      link: "#",
      category: "AI & ML"
    },
    {
      name: "Fund Raising Website",
      description:
        "Crowdfunding platform for NGOs and individual campaigns, including secure payment integration.",
      tech: "React, Node.js, Stripe API, PostgreSQL",
      link: "#",
      category: "FinTech"
    },
    {
      name: "E-commerce Platform",
      description:
        "Full-featured online store with product catalog, cart, checkout, and admin panel for managing inventory.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      link: "#",
      category: "E-commerce"
    },
    {
      name: "LegalDocs Management System",
      description:
        "A web platform for managing legal documents securely, with client access and version control.",
      tech: "React, Django, PostgreSQL, Tailwind CSS",
      link: "#",
      category: "Enterprise"
    },
    {
      name: "Healthcare Management System",
      description:
        "Complete healthcare solution with patient management, appointment scheduling, and medical records.",
      tech: "Next.js, Node.js, MySQL, Material UI",
      link: "#",
      category: "Healthcare"
    }
  ];

  const categories = ["All", "Web Development", "AI & ML", "FinTech", "E-commerce", "Enterprise", "Healthcare"];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-400 text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
        <p className="text-lg sm:text-xl text-gray-100">
          Here are some of the projects we've built for our clients across multiple industries.
          Each project showcases our commitment to quality, innovation, and client satisfaction.
        </p>
      </div>

      {/* Portfolio Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-200 mb-2">50+</div>
          <div className="text-gray-200">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-200 mb-2">25+</div>
          <div className="text-gray-200">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-200 mb-2">6</div>
          <div className="text-gray-200">Industries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-700/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-600"  
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-amber-200/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-amber-200">{project.category}</div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3 text-white">{project.name}</h2>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-sm text-amber-200 font-medium">{project.tech}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-600">
                  <span className="text-xs bg-amber-200 text-slate-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Projects */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more projects? We have delivered various other solutions spanning web, mobile, 
            and software development for multiple domains and industries.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}