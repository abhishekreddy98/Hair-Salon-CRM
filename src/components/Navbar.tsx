
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className={cn("text-xl font-bold", isScrolled ? "text-gray-800" : "text-white")}>
                SalonAI
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('features')}
                    className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-white/10")}
                  >
                    Features
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('dashboard-previews')}
                    className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-white/10")}
                  >
                    Demo
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-white/10")}>
                    Pricing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[300px]">
                      <li>
                        <button
                          onClick={() => scrollToSection('pricing')}
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left"
                        >
                          <div className="font-medium">View Pricing</div>
                          <p className="text-sm text-gray-500">Compare our plans and features</p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="block p-3 space-y-1 rounded-md hover:bg-gray-100 w-full text-left"
                        >
                          <div className="font-medium">Enterprise</div>
                          <p className="text-sm text-gray-500">Custom solutions for large salons</p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-white/10")}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-white/10")}
                  >
                    Reviews
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-6 py-2 rounded-lg transition-colors font-medium", isScrolled ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700" : "bg-white text-purple-600 hover:bg-gray-100")}>
                    Get Started
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-gradient-to-r from-purple-600 to-pink-600")}>
          <button
            onClick={() => scrollToSection('features')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10")}
          >
            Features
          </button>
          
          <button
            onClick={() => scrollToSection('dashboard-previews')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10")}
          >
            Demo
          </button>
          
          <button
            onClick={() => scrollToSection('pricing')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10")}
          >
            Pricing
          </button>
          
          <Link to="/blog" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Blog
          </Link>
          
          <button
            onClick={() => scrollToSection('testimonials')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-white/10")}
          >
            Reviews
          </button>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md font-medium", isScrolled ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : "text-purple-600 bg-white hover:bg-gray-100")}>
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
