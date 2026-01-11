import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, gradient, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="gradient-border p-6 md:p-8 h-full bg-card/50 backdrop-blur-xl hover:bg-card/70 transition-all duration-500">
        {/* Icon container */}
        <motion.div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 ${gradient}`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl md:text-4xl"
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 40%)`,
          }}
        />

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
