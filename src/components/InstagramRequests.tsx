
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, Share2, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramRequests = () => {
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

  const mockInstagramPosts = [
    {
      username: "@glamourhairbh",
      time: "2h",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      caption: "✨ Fresh balayage for @jessica_m! Book your color transformation 💫",
      likes: 234,
      comments: 12,
      hasRequest: true,
      requestType: "Color Consultation"
    },
    {
      username: "@elitecutsstudio", 
      time: "4h",
      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
      caption: "Before & After: Pixie cut perfection! 💇‍♀️ Who's ready for a bold change?",
      likes: 156,
      comments: 8,
      hasRequest: true,
      requestType: "Haircut Appointment"
    },
    {
      username: "@salonluxemiami",
      time: "6h", 
      image: "/placeholder.svg",
      caption: "Bridal hair trial complete! ✨ Ready for the big day 👰",
      likes: 89,
      comments: 5,
      hasRequest: false
    }
  ];

  return (
    <section id="instagram-requests" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
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
            Turn Instagram Into
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Appointments
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Automatically capture booking requests from your Instagram posts and convert them into confirmed appointments
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Instagram Feed Mockup */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Instagram className="w-8 h-8 text-purple-600" />
                  <span className="text-lg font-semibold">Instagram</span>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {mockInstagramPosts.map((post, index) => (
                  <motion.div 
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{post.username}</p>
                        <p className="text-gray-500 text-xs">{post.time}</p>
                      </div>
                    </div>
                    
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt="Salon work" 
                        className="w-full h-full object-cover"
                      />
                      {post.hasRequest && (
                        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Request
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-2">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                      <Share2 className="w-5 h-5" />
                    </div>
                    
                    <p className="text-sm mb-1">{post.likes} likes</p>
                    <p className="text-sm text-gray-600">{post.caption}</p>
                    
                    {post.hasRequest && (
                      <div className="mt-3 bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <p className="text-sm text-purple-700 font-medium">📩 New booking request detected</p>
                        <p className="text-xs text-purple-600">Type: {post.requestType}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Auto-Detect Requests</h3>
                  <p className="text-gray-600">AI automatically identifies booking inquiries in your Instagram comments and DMs</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Scheduling</h3>
                  <p className="text-gray-600">Convert Instagram interest into confirmed appointments with intelligent time suggestions</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Automated Follow-up</h3>
                  <p className="text-gray-600">Send personalized responses and booking confirmations directly through Instagram</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Client Profile Creation</h3>
                  <p className="text-gray-600">Automatically create detailed client profiles from Instagram interactions and preferences</p>
                </div>
              </motion.div>
            </div>

            <motion.div className="mt-8" variants={itemVariants}>
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Connect Your Instagram
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstagramRequests;
