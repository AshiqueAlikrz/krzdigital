import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "CEO, TechVentures",
      image: "👨‍💼",
      rating: 5,
      text: "KRZ Digital transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 150%. Highly recommended!",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director, StyleHub",
      image: "👩‍💼",
      rating: 5,
      text: "The digital marketing campaign exceeded all expectations. We saw a 300% increase in organic traffic within 3 months. Their SEO expertise is unmatched.",
    },
    {
      name: "David Chen",
      role: "Founder, InnovateTech",
      image: "👨‍💻",
      rating: 5,
      text: "Outstanding software development work! The team built a complex SaaS platform that handles millions of users. Professional, reliable, and innovative.",
    },
    {
      name: "Emily Brown",
      role: "Creative Director, DesignCo",
      image: "👩‍🎨",
      rating: 5,
      text: "The brand identity they created for us is absolutely stunning. Their designers have an incredible eye for detail and truly understood our vision.",
    },
    {
      name: "James Wilson",
      role: "COO, GrowthFirst",
      image: "👨‍💼",
      rating: 5,
      text: "We've worked with many agencies, but KRZ Digital stands out. Their holistic approach to digital services gives us everything we need under one roof.",
    },
    {
      name: "Lisa Anderson",
      role: "E-commerce Manager, ShopMax",
      image: "👩‍💻",
      rating: 5,
      text: "Our e-commerce platform is now blazing fast and converts like crazy. The team's attention to user experience made all the difference.",
    },
  ];

  const clients = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "DesignStudio", logo: "🎨" },
    { name: "MarketPro", logo: "📈" },
    { name: "CloudSoft", logo: "☁️" },
    { name: "DataFlow", logo: "📊" },
    { name: "CreativeHub", logo: "✨" },
    { name: "BrandMaster", logo: "🎯" },
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
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border p-6 bg-card/50 backdrop-blur-sm"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.image}
                  </motion.span>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      {/* <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted-foreground">
              Join the growing list of companies that trust us with their digital needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="gradient-border p-6 bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center gap-2"
              >
                <motion.span
                  className="text-4xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  {client.logo}
                </motion.span>
                <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-16 md:py-24 bg-secondary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "150+", label: "Projects Delivered" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "5⭐", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
