
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreviews from '@/components/DashboardPreviews';
import PricingPlans from '@/components/PricingPlans';
import Testimonials from '@/components/Testimonials';
import AIChatPreview from '@/components/AIChatPreview';
import InstagramRequests from '@/components/InstagramRequests';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <PageLayout>
      <SEO 
        title="SalonAI - AI-Powered Hair Salon CRM" 
        description="Revolutionize your salon with our AI-powered CRM. Smart scheduling, client management, Instagram & SMS automation for premium US salons."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['salon CRM', 'hair salon software', 'AI scheduling', 'salon management', 'beauty salon app', 'client management']}
      />
      <Hero />
      <Features />
      <DashboardPreviews />
      <InstagramRequests />
      <PricingPlans />
      <Testimonials />
      <AIChatPreview />
    </PageLayout>
  );
};

export default Index;
