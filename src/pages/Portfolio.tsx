import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Development", "Marketing", "Design"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Development",
      description: "A full-featured online store with payment integration and inventory management.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Brand Identity - TechStart",
      category: "Design",
      description: "Complete brand identity including logo, guidelines, and marketing materials.",
      image: "🎨",
      technologies: ["Illustrator", "Photoshop", "Figma"],
      link: "#",
    },
    {
      title: "SEO Campaign - HealthPlus",
      category: "Marketing",
      description: "Comprehensive SEO strategy that increased organic traffic by 300%.",
      image: "📈",
      technologies: ["SEMrush", "Google Analytics", "Content Strategy"],
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      category: "Development",
      description: "Analytics dashboard with real-time data visualization and reporting.",
      image: "📊",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      link: "#",
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      description: "Multi-platform social media strategy with 500% engagement increase.",
      image: "📱",
      technologies: ["Meta Ads", "Content Creation", "Analytics"],
      link: "#",
    },
    {
      title: "Mobile App UI/UX",
      category: "Design",
      description: "Complete UI/UX design for a fitness tracking mobile application.",
      image: "📲",
      technologies: ["Figma", "Prototyping", "User Research"],
      link: "#",
    },
    {
      title: "Corporate Website",
      category: "Development",
      description: "Modern corporate website with CMS integration and multilingual support.",
      image: "🌐",
      technologies: ["React", "Headless CMS", "Tailwind"],
      link: "#",
    },
    {
      title: "Product Photography",
      category: "Design",
      description: "Professional product photography and editing for e-commerce brand.",
      image: "📸",
      technologies: ["Lightroom", "Photoshop", "Studio Setup"],
      link: "#",
    },
    // {
    //   title: "PPC Campaign - FinTech",
    //   category: "Marketing",
    //   description: "Google Ads campaign achieving 400% ROI for financial services client.",
    //   image: "💰",
    //   technologies: ["Google Ads", "A/B Testing", "Landing Pages"],
    //   link: "#",
    // },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest work and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="gradient-border h-full bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center text-6xl relative overflow-hidden">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 rounded-full bg-primary text-primary-foreground"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together. Contact us to discuss your project.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
