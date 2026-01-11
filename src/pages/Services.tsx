import { motion } from "framer-motion";
import { Code, TrendingUp, Palette, Smartphone, Cloud, Shield, BarChart, Megaphone, PenTool, Layout, Search, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Website & Software Development",
      description: "Custom web applications, mobile solutions, and enterprise software built with cutting-edge technologies.",
      gradient: "from-primary/20 to-cyan-500/20",
      features: [
        { icon: Smartphone, text: "Mobile App Development" },
        { icon: Cloud, text: "Cloud Solutions" },
        { icon: Shield, text: "Secure & Scalable" },
        { icon: Layout, text: "Custom Web Apps" },
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Flutter", "PostgreSQL"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description: "Data-driven strategies to boost your online presence, drive traffic, and maximize conversions.",
      gradient: "from-accent/20 to-orange-500/20",
      features: [
        { icon: Search, text: "SEO Optimization" },
        { icon: BarChart, text: "Analytics & Reporting" },
        { icon: Megaphone, text: "Social Media Marketing" },
        { icon: Share2, text: "Content Strategy" },
      ],
      technologies: ["Google Ads", "Meta Ads", "SEMrush", "Mailchimp", "HubSpot", "Analytics"],
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Stunning visual identities, UI/UX designs, and creative assets that captivate your audience.",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: [
        { icon: PenTool, text: "Brand Identity" },
        { icon: Layout, text: "UI/UX Design" },
        { icon: Palette, text: "Print Design" },
        { icon: Share2, text: "Social Media Graphics" },
      ],
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Canva"],
    },
  ];

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From development to marketing and design, we offer end-to-end services to transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`gradient-border p-8 md:p-12 bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
                    >
                      <service.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <feature.icon className="w-4 h-4 text-primary" />
                          {feature.text}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 text-6xl">
                      {index === 0 && (
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="flex gap-2"
                        >
                          💻 🚀 ⚡
                        </motion.div>
                      )}
                      {index === 1 && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="flex gap-2"
                        >
                          📈 📊 🎯
                        </motion.div>
                      )}
                      {index === 2 && (
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="flex gap-2"
                        >
                          🎨 ✨ 🖌️
                        </motion.div>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {index === 0 && "Build Your Digital Product"}
                      {index === 1 && "Grow Your Online Presence"}
                      {index === 2 && "Create Visual Impact"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {index === 0 &&
                        "From concept to deployment, we build scalable, secure, and performant applications that drive your business forward. Our expert developers use the latest technologies to create solutions tailored to your needs."}
                      {index === 1 &&
                        "Our data-driven marketing strategies help you reach your target audience, increase engagement, and convert visitors into customers. We optimize every aspect of your digital marketing for maximum ROI."}
                      {index === 2 &&
                        "Stand out from the competition with stunning designs that communicate your brand's essence. From logos to complete brand identities, we create visuals that leave lasting impressions."}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
};

export default Services;
