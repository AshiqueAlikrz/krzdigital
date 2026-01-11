import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingCategories = [
    {
      title: "Website Development",
      plans: [
        {
          name: "Basic",
          price: "$999",
          description: "Perfect for small businesses",
          features: [
            "5-Page Responsive Website",
            "Mobile Optimization",
            "Contact Form",
            "Basic SEO Setup",
            "1 Month Support",
          ],
        },
        {
          name: "Standard",
          price: "$2,499",
          description: "Most popular choice",
          popular: true,
          features: [
            "10-Page Responsive Website",
            "Custom Design",
            "CMS Integration",
            "Advanced SEO",
            "E-commerce Ready",
            "3 Months Support",
          ],
        },
        {
          name: "Premium",
          price: "$4,999",
          description: "Enterprise solutions",
          features: [
            "Unlimited Pages",
            "Custom Web Application",
            "API Integrations",
            "Advanced Analytics",
            "Priority Support",
            "12 Months Maintenance",
          ],
        },
      ],
    },
    {
      title: "Digital Marketing",
      plans: [
        {
          name: "Starter",
          price: "$499/mo",
          description: "Get started with marketing",
          features: [
            "Social Media Management",
            "2 Platforms",
            "8 Posts/Month",
            "Basic Analytics",
            "Monthly Report",
          ],
        },
        {
          name: "Growth",
          price: "$999/mo",
          description: "Accelerate your growth",
          popular: true,
          features: [
            "Full Social Media Management",
            "4 Platforms",
            "20 Posts/Month",
            "PPC Campaign Management",
            "SEO Optimization",
            "Weekly Reports",
          ],
        },
        {
          name: "Enterprise",
          price: "$2,499/mo",
          description: "Maximum impact",
          features: [
            "Complete Digital Strategy",
            "All Platforms",
            "Unlimited Content",
            "Advanced PPC & Retargeting",
            "Dedicated Manager",
            "Real-time Dashboard",
          ],
        },
      ],
    },
    {
      title: "Graphic Design",
      plans: [
        {
          name: "Essential",
          price: "$299",
          description: "Basic design needs",
          features: [
            "Logo Design (3 Concepts)",
            "Business Card",
            "2 Revisions",
            "Source Files",
            "5 Days Delivery",
          ],
        },
        {
          name: "Professional",
          price: "$799",
          description: "Complete brand package",
          popular: true,
          features: [
            "Logo Design (5 Concepts)",
            "Full Stationery Set",
            "Brand Guidelines",
            "Social Media Kit",
            "Unlimited Revisions",
            "10 Days Delivery",
          ],
        },
        {
          name: "Ultimate",
          price: "$1,999",
          description: "Full creative suite",
          features: [
            "Complete Brand Identity",
            "UI/UX Design",
            "Marketing Materials",
            "Video/Motion Graphics",
            "Dedicated Designer",
            "Priority Support",
          ],
        },
      ],
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
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the perfect package for your business needs. All plans include dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Sections */}
      {pricingCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-16 md:py-24 ${categoryIndex % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12"
            >
              {category.title}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {category.plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative gradient-border bg-card/50 backdrop-blur-sm overflow-hidden ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-semibold flex items-center justify-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 md:p-8 ${plan.popular ? "pt-10" : ""}`}>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-display font-bold gradient-text">{plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Quote */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border bg-card/50 backdrop-blur-sm p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8">
                Request Custom Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
