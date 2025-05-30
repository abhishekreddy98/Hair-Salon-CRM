
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const testimonials = [
    {
      name: "Maria Rodriguez",
      salon: "Luxe Hair Studio",
      location: "Beverly Hills, CA",
      avatar: "MR",
      rating: 5,
      text: "SalonAI has transformed how we run our salon. The AI scheduling is incredible - we've reduced no-shows by 80% and our revenue has increased by 35% in just 3 months.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "James Thompson",
      salon: "Urban Cuts",
      location: "Austin, TX",
      avatar: "JT",
      rating: 5,
      text: "The client management features are game-changing. We can track every client's preferences and history automatically. Our customer satisfaction scores have never been higher.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sarah Chen",
      salon: "Bella Beauty Bar",
      location: "Miami, FL",
      avatar: "SC",
      rating: 5,
      text: "The automated marketing tools have helped us book 40% more appointments. The Instagram integration is seamless and our clients love the personalized SMS reminders.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Trusted by
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Top Salons
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            See how salon owners across the country are growing their businesses with SalonAI
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-purple-600 font-medium">{testimonial.salon}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                <p className="text-gray-600 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                <p className="text-gray-600">Happy Salon Owners</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">35%</div>
                <p className="text-gray-600">Average Revenue Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-gray-600">Reduction in No-Shows</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
