import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "Marketing", "Design", "Business"];

  const posts = [
    {
      title: "10 Web Development Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the future of web development, from AI integration to edge computing.",
      category: "Development",
      author: "David Chen",
      date: "Jan 15, 2024",
      image: "💻",
      readTime: "5 min read",
    },
    {
      title: "The Ultimate Guide to SEO in 2024",
      excerpt: "Learn the strategies and techniques that will help your website rank higher in search results.",
      category: "Marketing",
      author: "Sarah Miller",
      date: "Jan 12, 2024",
      image: "📈",
      readTime: "8 min read",
    },
    {
      title: "Design Systems: Building for Scale",
      excerpt: "How to create and maintain a design system that scales with your organization.",
      category: "Design",
      author: "Emma Wilson",
      date: "Jan 10, 2024",
      image: "🎨",
      readTime: "6 min read",
    },
    {
      title: "Maximizing ROI with PPC Advertising",
      excerpt: "A comprehensive guide to getting the most out of your pay-per-click advertising budget.",
      category: "Marketing",
      author: "James Wilson",
      date: "Jan 8, 2024",
      image: "💰",
      readTime: "7 min read",
    },
    {
      title: "Building Secure Web Applications",
      excerpt: "Essential security practices every developer should implement in their web applications.",
      category: "Development",
      author: "David Chen",
      date: "Jan 5, 2024",
      image: "🔒",
      readTime: "10 min read",
    },
    {
      title: "The Psychology of Color in Branding",
      excerpt: "Understanding how color choices impact user perception and brand recognition.",
      category: "Design",
      author: "Emma Wilson",
      date: "Jan 3, 2024",
      image: "🌈",
      readTime: "5 min read",
    },
    {
      title: "Scaling Your Digital Business",
      excerpt: "Strategies for growing your online business sustainably and profitably.",
      category: "Business",
      author: "Ahmed Khan",
      date: "Dec 28, 2023",
      image: "🚀",
      readTime: "8 min read",
    },
    {
      title: "Social Media Marketing Best Practices",
      excerpt: "Proven strategies to boost engagement and grow your social media presence.",
      category: "Marketing",
      author: "Sarah Miller",
      date: "Dec 25, 2023",
      image: "📱",
      readTime: "6 min read",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="gradient-border h-full bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Post Image */}
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center text-6xl">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {post.image}
                    </motion.span>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                      <motion.span
                        className="text-primary"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
