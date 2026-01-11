import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import ServiceCard from "./ServiceCard";
import ParticleBackground from "./ParticleBackground";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const services = [
    {
      icon: "💻",
      title: "Website & Software Development",
      description: "Custom web applications, mobile solutions, and enterprise software built with cutting-edge technologies.",
      gradient: "bg-gradient-to-br from-primary/20 to-cyan/20",
    },
    {
      icon: "📈",
      title: "Digital Marketing & SEO",
      description: "Data-driven strategies to boost your online presence, drive traffic, and maximize conversions.",
      gradient: "bg-gradient-to-br from-accent/20 to-coral/20",
    },
    {
      icon: "🎨",
      title: "Graphic Designing",
      description: "Stunning visual identities, UI/UX designs, and creative assets that captivate your audience.",
      gradient: "bg-gradient-to-br from-primary/20 to-accent/20",
    },
  ];

  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Header badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground font-medium">Premium Digital Solutions</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <AnimatedText text="Transform Your" className="text-foreground" />
            <br />
            <span className="gradient-text">
              <AnimatedText text="Digital Presence" delay={0.3} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            We craft innovative digital experiences that elevate brands and drive measurable results. Your vision, our expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl glow-primary"
            >
              <motion.span className="relative z-10 flex items-center gap-2" whileHover={{ x: 5 }}>
                Start Your Project
                <motion.svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.span>
            </Button>

            <Button variant="outline" size="lg" className="group border-border hover:border-primary/50 hover:bg-secondary/50 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
              <span className="flex items-center gap-2">
                View Our Work
                <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  ✦
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20 md:mt-32">
          {services.map((service, index) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} gradient={service.gradient} delay={1 + index * 0.2} />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="flex justify-center mt-20">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll Down</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
