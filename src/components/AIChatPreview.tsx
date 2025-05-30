
import { motion } from "framer-motion";
import { MessageCircle, Smartphone, Monitor } from "lucide-react";

const AIChatPreview = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-purple-50">
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
            Your Personal
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              AI Assistant
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Get instant help with scheduling, client questions, and business insights - available 24/7 on web and mobile
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4">
              <Monitor className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Web Dashboard</h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                  <span className="text-white font-medium ml-4">SalonAI Assistant</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    AI
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-xs">
                    <p className="text-gray-800 text-sm">Hi! I noticed Sarah Johnson hasn't booked her usual appointment. Would you like me to send her a personalized reminder?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl rounded-tr-none p-3 max-w-xs">
                    <p className="text-sm">Yes, send the reminder and suggest her favorite time slots</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">
                    You
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    AI
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-xs">
                    <p className="text-gray-800 text-sm">✅ Done! I've sent Sarah a personalized SMS with her available slots for next week. I also included a 10% discount for her loyalty.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-4">
              <Smartphone className="w-8 h-8 text-pink-600" />
              <h3 className="text-2xl font-bold text-gray-800">Mobile App</h3>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mx-auto" style={{ width: '280px', height: '560px' }}>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 bg-white rounded-full opacity-60"></div>
                  <span className="text-white font-medium">SalonAI</span>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-4 space-y-3 h-full bg-gray-50">
                <div className="bg-white rounded-2xl p-3 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">AI Assistant</span>
                  </div>
                  <p className="text-xs text-gray-800">Your 2 PM appointment with Emma Davis is confirmed. Shall I prepare her usual color formula?</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-3 ml-8 shadow-sm">
                  <p className="text-xs">Yes, and remind me about her allergy note</p>
                </div>
                
                <div className="bg-white rounded-2xl p-3 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">AI Assistant</span>
                  </div>
                  <p className="text-xs text-gray-800">✅ Formula ready! Note: Emma is allergic to ammonia-based products. I've flagged gentle alternatives.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-3 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">AI Assistant</span>
                  </div>
                  <p className="text-xs text-gray-800">Quick update: Today's revenue is up 12% from last week. Your afternoon is fully booked! 🎉</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">AI Features That Save You Time</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Smart Reminders</h4>
                <p className="text-gray-600 text-sm">Automatically follow up with clients and send personalized booking suggestions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Instant Insights</h4>
                <p className="text-gray-600 text-sm">Get real-time business analytics and actionable recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Your AI assistant never sleeps - get help anytime, anywhere</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIChatPreview;
