
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Instagram, BarChart3, Shield } from "lucide-react";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI Hair Consultant",
      description: "Smart color and style recommendations based on face shape, skin tone, and hair texture analysis.",
      gradient: "from-purple-500 to-purple-600",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Smart Salon Scheduling",
      description: "Intelligent booking system that prevents double-bookings and optimizes stylist schedules for maximum efficiency.",
      gradient: "from-pink-500 to-pink-600",
      color: "text-pink-600"
    },
    {
      icon: Users,
      title: "Client Hair History",
      description: "Complete hair journey tracking with photos, formulas, preferences, and allergy information for every client.",
      gradient: "from-blue-500 to-blue-600",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      title: "Instagram Booking Automation",
      description: "Convert Instagram comments and DMs into confirmed appointments with automated response and scheduling.",
      gradient: "from-green-500 to-green-600",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Salon Analytics Dashboard",
      description: "Track revenue per stylist, most popular services, client retention rates, and peak booking times.",
      gradient: "from-orange-500 to-orange-600",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Secure Client Data",
      description: "GDPR compliant client data protection with encrypted storage and automatic backup systems.",
      gradient: "from-indigo-500 to-indigo-600",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Everything Your Hair Salon
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Needs to Succeed
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            From solo stylists to multi-location salons, our AI-powered platform streamlines every aspect of your hair business
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              <div className="mt-6">
                <span className={`${feature.color} text-sm font-semibold hover:underline cursor-pointer`}>
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hair Salon?</h3>
            <p className="text-xl mb-8 opacity-90">Join thousands of stylists who've revolutionized their salon business with SalonAI</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Start Free Trial
              </button>
              <button 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-semibold text-lg"
                onClick={() => {
                  const dashboardSection = document.getElementById('dashboard-previews');
                  if (dashboardSection) {
                    dashboardSection.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
