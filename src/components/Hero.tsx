
import { ArrowRight, Play, Sparkles, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full max-w-[100vw]" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden h-[700px] md:h-[750px] w-full">
        <div className="absolute inset-0 w-full">
          <img src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" alt="Professional hairstylist working with happy client" className={`w-full h-full object-cover opacity-60 ${isMobile ? 'object-right' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6 shadow-lg" variants={itemVariants}>
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Salon Management
              </motion.div>
              
              <motion.h1 className="banner-title text-gray-800 text-4xl md:text-6xl lg:text-7xl font-bold mb-6" variants={itemVariants}>
                The Future of
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Hair Salon CRM
                </span>
              </motion.h1>
              
              <motion.p className="banner-subtitle text-gray-600 mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
                Revolutionize your salon with AI-powered scheduling, client management, and automated marketing that grows your business.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-10 justify-center" variants={itemVariants}>
                <button 
                  className="px-8 md:px-10 py-4 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-300/30 flex items-center justify-center group text-base md:text-lg font-semibold"
                  onClick={scrollToContact}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="px-8 md:px-10 py-4 md:py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base md:text-lg font-semibold border border-gray-200"
                  onClick={e => {
                    e.preventDefault();
                    const dashboardSection = document.getElementById('dashboard-previews');
                    if (dashboardSection) {
                      dashboardSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <Play className="mr-2 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  View Demo
                </button>
              </motion.div>
              
              <motion.div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500" variants={itemVariants}>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No setup fees
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Cancel anytime
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto -mt-20">
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center rounded-xl text-white mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">AI Assistant</h3>
            <p className="text-gray-600 text-sm">Smart recommendations and automated client insights</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center rounded-xl text-white mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Smart Scheduling</h3>
            <p className="text-gray-600 text-sm">Automated booking with zero conflicts</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center rounded-xl text-white mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Client Profiles</h3>
            <p className="text-gray-600 text-sm">Complete history and preferences tracking</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center rounded-xl text-white mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Auto Marketing</h3>
            <p className="text-gray-600 text-sm">Instagram & SMS automation that converts</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
