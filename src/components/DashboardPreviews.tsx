
import { motion } from "framer-motion";
import { Calendar, Clock, Users, TrendingUp } from "lucide-react";

const DashboardPreviews = () => {
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
    <section id="dashboard-previews" className="py-20 bg-gradient-to-b from-white to-purple-50">
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
            Everything You Need in 
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              One Dashboard
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Manage appointments, track clients, and grow your business with our intuitive salon management platform
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Calendar View</h3>
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Sarah Johnson - Cut & Color</p>
                      <p className="text-sm text-gray-600">9:00 AM - 11:30 AM</p>
                    </div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Mike Rodriguez - Beard Trim</p>
                      <p className="text-sm text-gray-600">12:00 PM - 12:30 PM</p>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Emma Davis - Highlights</p>
                      <p className="text-sm text-gray-600">2:00 PM - 4:00 PM</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-purple-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Smart Scheduling</h4>
              </div>
              <p className="text-gray-600">AI automatically prevents double bookings and optimizes your daily schedule for maximum efficiency.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-pink-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Client Management</h4>
              </div>
              <p className="text-gray-600">Track client preferences, service history, and automatically send personalized follow-ups.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Revenue Analytics</h4>
              </div>
              <p className="text-gray-600">Real-time insights into your salon's performance with automated reporting and growth recommendations.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Client Profile</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SJ
                </div>
                <h4 className="text-xl font-bold text-center text-gray-800">Sarah Johnson</h4>
                <p className="text-center text-gray-600 mt-1">VIP Client since 2021</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Visits:</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Lifetime Value:</span>
                    <span className="font-semibold">$3,240</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Recent Services</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cut & Color - Blonde Highlights</span>
                      <span className="text-sm text-gray-500">Dec 15, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Deep Conditioning Treatment</span>
                      <span className="text-sm text-gray-500">Nov 20, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Trim & Style</span>
                      <span className="text-sm text-gray-500">Oct 18, 2023</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Preferences & Notes</h5>
                  <p className="text-gray-600 text-sm">Prefers appointments after 2 PM. Allergic to ammonia-based products. Loves trying new color trends. Regular customer - books every 6-8 weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreviews;
